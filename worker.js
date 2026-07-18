// Cloudflare Worker — Naejeonchilgi Payment + Transform
// Env vars required: POLAR_API_KEY, GEMINI_API_KEY, PROXY_SECRET
// KV binding required: NAEJEON_TOKENS

const POLAR_API = 'https://api.polar.sh/v1';
// 미국 리전 Vercel 프록시 경유 (Gemini 지역 차단 우회 — Cloudflare 직접/AI Gateway는 차단됨)
const GEMINI_PROXY = 'https://gemini-proxy-delta-nine.vercel.app/api/transform';
const GEMINI_MODEL = 'gemini-2.5-flash-image';
const PRODUCT_ID = '87bb06af-1d7b-4100-858c-ca626ab86718';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { headers: CORS });

    const { pathname } = new URL(request.url);
    if (pathname === '/track-click') return trackClick(request, env);
    if (pathname === '/stats') return stats(request, env);
    if (pathname === '/create-checkout') return createCheckout(request, env);
    if (pathname === '/verify-payment') return verifyPayment(request, env);
    if (pathname === '/transform') return transform(request, env);

    return new Response('Not found', { status: 404 });
  },
};

// ── 수요 검증: "변환하기" 클릭 집계 (가짜문 테스트) ──
async function trackClick(request, env) {
  if (request.method !== 'POST') return json({ error: 'method' }, 405);
  let lang = 'na', source = 'na';
  try {
    const b = await request.json();
    if (b) {
      if (b.lang) lang = String(b.lang).slice(0, 8);
      if (b.source) source = String(b.source).slice(0, 24);
    }
  } catch {}
  const key = `click:${new Date().toISOString()}-${Math.random().toString(36).slice(2, 8)}`;
  await env.NAEJEON_TOKENS.put(key, '', { expirationTtl: 60 * 60 * 24 * 180, metadata: { source, lang } }); // 180일 보관
  return json({ ok: true });
}

// ── 클릭 통계 조회 (소유자용, ?key=STATS_KEY) ──
async function stats(request, env) {
  const { searchParams } = new URL(request.url);
  if (searchParams.get('key') !== env.STATS_KEY) {
    return new Response('unauthorized', { status: 401, headers: CORS });
  }
  let cursor, total = 0;
  const bySource = {};
  const rows = [];
  do {
    const list = await env.NAEJEON_TOKENS.list({ prefix: 'click:', cursor });
    total += list.keys.length;
    for (const k of list.keys) {
      const src = (k.metadata && k.metadata.source) || 'na';
      bySource[src] = (bySource[src] || 0) + 1;
      rows.push({ t: k.name.slice('click:'.length), src });
    }
    cursor = list.list_complete ? null : list.cursor;
  } while (cursor);

  rows.sort((a, b) => (a.t < b.t ? 1 : -1));
  const recent = rows.slice(0, 100).map(r => `<li>${r.t} <span class="src">${r.src}</span></li>`).join('');
  const srcRows = Object.entries(bySource).sort((a, b) => b[1] - a[1])
    .map(([s, c]) => `<li><span class="src">${s}</span> : <b>${c}</b></li>`).join('');
  const html = `<!DOCTYPE html><html lang="ko"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>변환 클릭 통계</title>
<style>body{font-family:system-ui,sans-serif;background:#0f1117;color:#e2e8f0;padding:40px 20px;max-width:640px;margin:0 auto;}
.big{font-size:4rem;font-weight:800;color:#f5c451;margin:0;}
.label{color:#94a3b8;margin:0 0 30px;}
h3{color:#7dd3fc;font-size:.95rem;text-transform:uppercase;letter-spacing:.05em;margin-top:30px;}
ul{list-style:none;padding:0;}li{color:#94a3b8;font-size:.82rem;padding:4px 0;border-bottom:1px solid #1e293b;font-family:monospace;}
.src{color:#f5c451;}</style>
</head><body>
<p class="big">${total}</p>
<p class="label">총 "나전칠기로 변환하기 ($1)" 클릭 수</p>
<h3>버튼별 클릭 (source)</h3>
<ul>${srcRows || '<li>없음</li>'}</ul>
<h3>최근 클릭 (최대 100, UTC)</h3>
<ul>${recent || '<li>아직 클릭 없음</li>'}</ul>
</body></html>`;
  return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8', ...CORS } });
}

async function createCheckout(request, env) {
  const { siteUrl } = await request.json();

  const resp = await fetch(`${POLAR_API}/checkouts`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.POLAR_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      product_id: PRODUCT_ID,
      success_url: `${siteUrl}?checkout_id={CHECKOUT_ID}`,
    }),
  });

  if (!resp.ok) {
    const err = await resp.text();
    return json({ error: 'Checkout 생성 실패: ' + err }, 500);
  }

  const data = await resp.json();
  return json({ url: data.url });
}

async function verifyPayment(request, env) {
  const { checkoutId } = await request.json();

  // 이미 사용된 결제인지 확인
  const alreadyUsed = await env.NAEJEON_TOKENS.get(`checkout:${checkoutId}`);
  if (alreadyUsed) return json({ error: '이미 사용된 결제입니다.' }, 400);

  // Polar에서 결제 상태 확인
  const resp = await fetch(`${POLAR_API}/checkouts/${checkoutId}`, {
    headers: { 'Authorization': `Bearer ${env.POLAR_API_KEY}` },
  });

  if (!resp.ok) return json({ error: '결제 정보를 찾을 수 없습니다.' }, 400);

  const checkout = await resp.json();
  if (checkout.status !== 'succeeded') return json({ error: '결제가 완료되지 않았습니다.' }, 400);

  // 1회용 토큰 발급
  const token = crypto.randomUUID();
  await env.NAEJEON_TOKENS.put(token, 'valid', { expirationTtl: 3600 });          // 1시간 유효
  await env.NAEJEON_TOKENS.put(`checkout:${checkoutId}`, 'used', { expirationTtl: 86400 }); // 중복 방지

  return json({ token });
}

async function transform(request, env) {
  const { token, imageData, mimeType } = await request.json();

  // 토큰 검증
  const status = await env.NAEJEON_TOKENS.get(token);
  if (status !== 'valid') return json({ error: '유효하지 않거나 이미 사용된 토큰입니다.' }, 401);

  // 토큰 소모
  await env.NAEJEON_TOKENS.put(token, 'used', { expirationTtl: 86400 });

  const prompt = `이미지를 한국의 나전칠기 작품과 동일하게 변형시켜줘

A portrait made entirely of mother-of-pearl inlay on black lacquer (najeonchilgi),
human face constructed from iridescent nacre shell fragments,
mosaic-like composition with color-shifting abalone pieces,
deep black lacquered background,
shimmering rainbow highlights on shell surfaces,
traditional Korean lacquerware art style,
highly detailed, studio lighting`;

  const geminiResp = await fetch(GEMINI_PROXY, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-proxy-secret': env.PROXY_SECRET,
    },
    body: JSON.stringify({
      apiKey: env.GEMINI_API_KEY,
      model: GEMINI_MODEL,
      body: {
        contents: [{ parts: [{ text: prompt }, { inline_data: { mime_type: mimeType, data: imageData } }] }],
        generationConfig: { response_modalities: ['IMAGE', 'TEXT'] },
      },
    }),
  });

  if (!geminiResp.ok) {
    const err = await geminiResp.text();
    console.error('Gemini API error', geminiResp.status, err);
    return json({ error: 'Gemini 오류: ' + err }, 500);
  }

  const result = await geminiResp.json();
  const parts = result.candidates?.[0]?.content?.parts || [];
  // Gemini REST 응답은 camelCase(inlineData) — snake_case(inline_data)도 대비
  const imgPart = parts.find(p => p.inlineData || p.inline_data);

  if (!imgPart) return json({ error: '이미지 생성 실패' }, 500);

  const inline = imgPart.inlineData || imgPart.inline_data;
  return json({ imageData: inline.data, mimeType: inline.mimeType || inline.mime_type });
}
