// Cloudflare Worker — Naejeonchilgi Payment + Transform
// Env vars required: POLAR_API_KEY, GEMINI_API_KEY
// KV binding required: NAEJEON_TOKENS

const POLAR_API = 'https://api.polar.sh/v1';
const GEMINI_API = 'https://generativelanguage.googleapis.com/v1beta';
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
    if (pathname === '/create-checkout') return createCheckout(request, env);
    if (pathname === '/verify-payment') return verifyPayment(request, env);
    if (pathname === '/transform') return transform(request, env);

    return new Response('Not found', { status: 404 });
  },
};

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

  const geminiResp = await fetch(
    `${GEMINI_API}/models/gemini-2.0-flash-preview-image-generation:generateContent?key=${env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }, { inline_data: { mime_type: mimeType, data: imageData } }] }],
        generationConfig: { response_modalities: ['IMAGE', 'TEXT'] },
      }),
    }
  );

  if (!geminiResp.ok) {
    const err = await geminiResp.text();
    return json({ error: 'Gemini 오류: ' + err }, 500);
  }

  const result = await geminiResp.json();
  const parts = result.candidates?.[0]?.content?.parts || [];
  const imgPart = parts.find(p => p.inline_data);

  if (!imgPart) return json({ error: '이미지 생성 실패' }, 500);

  return json({ imageData: imgPart.inline_data.data, mimeType: imgPart.inline_data.mime_type });
}
