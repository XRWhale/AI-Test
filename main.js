// ── Animal Spirit Types ──
const TYPES = [
  {
    id: 'tiger', emoji: '🐯',
    name: { en: 'Tiger Spirit', ko: '호랑이상' },
    nameKo: '호랑이상 (虎相)',
    desc: {
      en: 'A natural-born leader radiating powerful energy. You command attention the moment you walk into a room.',
      ko: '타고난 리더십과 강렬한 카리스마의 소유자. 방에 들어서는 순간 모든 시선을 사로잡는 존재감을 가졌습니다.'
    },
    eyeDesc: { en: 'Sharp, intense gaze → Strong willpower', ko: '날카롭고 강렬한 눈빛 → 강한 의지력' },
    noseDesc: { en: 'Prominent bridge → Ambition & drive', ko: '높은 콧대 → 야망과 추진력' },
    lipDesc: { en: 'Firm, defined lips → Decisiveness', ko: '단단하고 뚜렷한 입술 → 결단력' },
    faceDesc: { en: 'Angular jawline → Leadership presence', ko: '각진 턱선 → 리더십 있는 존재감' },
    pros: { en: ['Incredible leadership skills', 'Fearless decision-maker', 'Inspires loyalty in others'], ko: ['뛰어난 리더십', '두려움 없는 결단력', '주변의 충성심을 이끌어냄'] },
    cons: { en: ['Can be overly dominant', 'Stubborn when challenged', 'Struggles to show vulnerability'], ko: ['지나치게 지배적일 수 있음', '도전받으면 고집이 셈', '약한 모습을 보이기 어려움'] },
    match: { en: 'Deer Spirit', ko: '사슴상' }, matchEmoji: '🦌',
    color: '#e85d3a'
  },
  {
    id: 'fox', emoji: '🦊',
    name: { en: 'Fox Spirit', ko: '여우상' },
    nameKo: '여우상 (狐相)',
    desc: {
      en: 'Magnetic charm meets sharp intuition. You see through people effortlessly and always know the right thing to say.',
      ko: '매혹적인 매력과 예리한 직감의 소유자. 사람의 마음을 꿰뚫어 보며, 항상 적절한 말을 찾아냅니다.'
    },
    eyeDesc: { en: 'Upturned, alluring eyes → Natural magnetism', ko: '올라간 매혹적인 눈꼬리 → 타고난 매력' },
    noseDesc: { en: 'Delicate, refined → Keen perception', ko: '섬세하고 정교한 코 → 예리한 직감' },
    lipDesc: { en: 'Curved smile → Persuasive communication', ko: '곡선미 있는 미소 → 설득력 있는 소통' },
    faceDesc: { en: 'Oval, balanced face → Adaptability', ko: '갸름하고 균형 잡힌 얼굴 → 적응력' },
    pros: { en: ['Extremely perceptive', 'Effortless social charm', 'Quick-witted & adaptable'], ko: ['뛰어난 관찰력', '자연스러운 사교 매력', '재치 있고 적응력 강함'] },
    cons: { en: ['May overthink motives', 'Guarded with true feelings', 'Can seem mysterious to others'], ko: ['동기를 지나치게 분석함', '진심을 잘 드러내지 않음', '신비로워 보일 수 있음'] },
    match: { en: 'Crane Spirit', ko: '학상' }, matchEmoji: '🏵️',
    color: '#f59e42'
  },
  {
    id: 'magpie', emoji: '🐦',
    name: { en: 'Magpie Spirit', ko: '까치상' },
    nameKo: '까치상 (鵲相)',
    desc: {
      en: 'The ultimate connector! Your bright energy and quick wit make you the life of every gathering.',
      ko: '최고의 소통가이자 분위기 메이커! 밝은 에너지와 재치로 어디서든 중심이 됩니다.'
    },
    eyeDesc: { en: 'Bright, sparkling eyes → Curiosity & joy', ko: '반짝이는 밝은 눈 → 호기심과 기쁨' },
    noseDesc: { en: 'Soft, rounded → Approachable warmth', ko: '부드럽고 둥근 코 → 다가가기 쉬운 따뜻함' },
    lipDesc: { en: 'Wide, expressive smile → Gift of gab', ko: '넓고 표현력 있는 미소 → 뛰어난 말재주' },
    faceDesc: { en: 'Heart-shaped face → Youthful energy', ko: '하트형 얼굴 → 젊은 에너지' },
    pros: { en: ['Incredible networking ability', 'Brings joy wherever you go', 'Excellent communicator'], ko: ['뛰어난 인맥 형성 능력', '어디서든 기쁨을 전파', '탁월한 소통 능력'] },
    cons: { en: ['Easily distracted by new things', 'May spread energy too thin', 'Dislikes being alone'], ko: ['새로운 것에 쉽게 주의가 분산됨', '에너지를 너무 분산시킬 수 있음', '혼자 있는 것을 싫어함'] },
    match: { en: 'Turtle Spirit', ko: '거북상' }, matchEmoji: '🐢',
    color: '#4a9fe5'
  },
  {
    id: 'crane', emoji: '🏵️',
    name: { en: 'Crane Spirit', ko: '학상' },
    nameKo: '학상 (鶴相)',
    desc: {
      en: 'Calm wisdom radiates from you. You see the bigger picture while others get lost in details.',
      ko: '고요한 지혜가 빛나는 유형. 다른 사람들이 디테일에 빠질 때 큰 그림을 봅니다.'
    },
    eyeDesc: { en: 'Calm, steady gaze → Inner peace', ko: '차분하고 안정된 눈빛 → 내면의 평화' },
    noseDesc: { en: 'Straight, balanced → Focus & clarity', ko: '곧고 균형 잡힌 코 → 집중력과 명확함' },
    lipDesc: { en: 'Thin, upturned corners → Quiet wisdom', ko: '얇고 올라간 입꼬리 → 조용한 지혜' },
    faceDesc: { en: 'Elongated, refined face → Elegance', ko: '길고 세련된 얼굴 → 우아함' },
    pros: { en: ['Exceptional analytical mind', 'Emotionally stable', 'Naturally wise beyond years'], ko: ['뛰어난 분석력', '감정적으로 안정적', '나이에 비해 자연스러운 지혜'] },
    cons: { en: ['Overthinks before acting', 'Hard to read emotionally', 'May seem distant'], ko: ['행동 전 지나치게 생각함', '감정을 읽기 어려움', '거리감 있어 보일 수 있음'] },
    match: { en: 'Fox Spirit', ko: '여우상' }, matchEmoji: '🦊',
    color: '#7c6fb0'
  },
  {
    id: 'turtle', emoji: '🐢',
    name: { en: 'Turtle Spirit', ko: '거북상' },
    nameKo: '거북상 (龜相)',
    desc: {
      en: 'The rock everyone relies on. Your steady, dependable nature builds empires that last forever.',
      ko: '모든 사람이 의지하는 든든한 존재. 꾸준하고 신뢰할 수 있는 성격으로 영원히 지속되는 기반을 만듭니다.'
    },
    eyeDesc: { en: 'Warm, trustworthy eyes → Reliability', ko: '따뜻하고 신뢰감 있는 눈 → 믿음직함' },
    noseDesc: { en: 'Broad, grounded → Stability', ko: '넓고 안정감 있는 코 → 안정감' },
    lipDesc: { en: 'Full, gentle lips → Kindness', ko: '도톰하고 부드러운 입술 → 친절함' },
    faceDesc: { en: 'Round, sturdy face → Endurance', ko: '둥글고 단단한 얼굴 → 인내력' },
    pros: { en: ['Unshakeable loyalty', 'Patient & persistent', 'Builds lasting foundations'], ko: ['흔들리지 않는 충성심', '인내심 강하고 끈기 있음', '오래가는 기반을 구축'] },
    cons: { en: ['Resistant to change', 'Can be overly cautious', 'Slow to open up'], ko: ['변화에 저항적', '지나치게 신중할 수 있음', '마음을 여는 데 시간이 걸림'] },
    match: { en: 'Magpie Spirit', ko: '까치상' }, matchEmoji: '🐦',
    color: '#2a9d6e'
  },
  {
    id: 'rabbit', emoji: '🐰',
    name: { en: 'Rabbit Spirit', ko: '토끼상' },
    nameKo: '토끼상 (兔相)',
    desc: {
      en: 'Pure-hearted and deeply sensitive. You feel everything intensely and your empathy touches everyone around you.',
      ko: '순수한 마음과 깊은 감수성의 소유자. 모든 것을 깊이 느끼며 주변 사람들에게 공감과 위로를 전합니다.'
    },
    eyeDesc: { en: 'Large, gentle eyes → Deep empathy', ko: '크고 부드러운 눈 → 깊은 공감 능력' },
    noseDesc: { en: 'Small, soft → Innocence', ko: '작고 부드러운 코 → 순수함' },
    lipDesc: { en: 'Soft, rosy lips → Tenderness', ko: '부드럽고 발그레한 입술 → 다정함' },
    faceDesc: { en: 'Soft, rounded features → Approachability', ko: '부드럽고 둥근 이목구비 → 친근함' },
    pros: { en: ['Deeply empathetic', 'Creative & imaginative', 'Brings comfort to others'], ko: ['깊은 공감 능력', '창의적이고 상상력 풍부', '주변에 위로를 줌'] },
    cons: { en: ['Takes criticism personally', 'Can be indecisive', 'Needs frequent reassurance'], ko: ['비판을 개인적으로 받아들임', '우유부단할 수 있음', '자주 확인받고 싶어함'] },
    match: { en: 'Tiger Spirit', ko: '호랑이상' }, matchEmoji: '🐯',
    color: '#e88dba'
  },
  {
    id: 'dragon', emoji: '🐉',
    name: { en: 'Dragon Spirit', ko: '용상' },
    nameKo: '용상 (龍相)',
    desc: {
      en: 'Unstoppable ambition meets raw talent. You were born to achieve greatness and nothing can stand in your way.',
      ko: '멈출 수 없는 야망과 타고난 재능의 소유자. 위대한 업적을 이루기 위해 태어났으며 아무것도 당신을 막을 수 없습니다.'
    },
    eyeDesc: { en: 'Piercing, focused eyes → Determination', ko: '관통하는 집중된 눈빛 → 결의' },
    noseDesc: { en: 'Strong, high bridge → Authority', ko: '강하고 높은 콧대 → 권위' },
    lipDesc: { en: 'Bold, defined lips → Commanding voice', ko: '대담하고 뚜렷한 입술 → 위엄 있는 목소리' },
    faceDesc: { en: 'Strong bone structure → Power', ko: '강한 골격 → 힘' },
    pros: { en: ['Limitless ambition', 'Natural authority', 'Achieves extraordinary goals'], ko: ['무한한 야망', '타고난 권위', '비범한 목표를 달성'] },
    cons: { en: ['Workaholic tendencies', 'Impatient with slowness', 'High expectations of others'], ko: ['일중독 경향', '느린 것에 대한 조급함', '타인에 대한 높은 기대'] },
    match: { en: 'Phoenix Spirit', ko: '봉황상' }, matchEmoji: '🔥',
    color: '#c9363a'
  },
  {
    id: 'deer', emoji: '🦌',
    name: { en: 'Deer Spirit', ko: '사슴상' },
    nameKo: '사슴상 (鹿相)',
    desc: {
      en: 'Gentle grace meets quiet strength. You have a calming aura that makes everyone feel safe and understood.',
      ko: '부드러운 우아함과 조용한 힘의 소유자. 모든 사람을 안전하고 이해받는다고 느끼게 하는 차분한 아우라가 있습니다.'
    },
    eyeDesc: { en: 'Soft, doe-like eyes → Compassion', ko: '사슴 같은 부드러운 눈 → 자비로움' },
    noseDesc: { en: 'Gentle slope → Harmony', ko: '부드러운 콧날 → 조화' },
    lipDesc: { en: 'Natural, relaxed lips → Authenticity', ko: '자연스럽고 편안한 입술 → 진정성' },
    faceDesc: { en: 'Oval, graceful face → Natural beauty', ko: '갸름하고 우아한 얼굴 → 자연미' },
    pros: { en: ['Deeply compassionate', 'Creates harmony everywhere', 'Quietly strong'], ko: ['깊은 자비심', '어디서든 조화를 만듦', '조용하지만 강함'] },
    cons: { en: ['Avoids confrontation', 'May neglect own needs', 'Too trusting at times'], ko: ['대립을 피함', '자신의 필요를 무시할 수 있음', '때로 너무 잘 믿음'] },
    match: { en: 'Tiger Spirit', ko: '호랑이상' }, matchEmoji: '🐯',
    color: '#b08d57'
  },
  {
    id: 'phoenix', emoji: '🔥',
    name: { en: 'Phoenix Spirit', ko: '봉황상' },
    nameKo: '봉황상 (鳳凰相)',
    desc: {
      en: 'A true creative soul blazing with artistic fire. You transform everything you touch into something beautiful.',
      ko: '예술적 열정으로 타오르는 진정한 크리에이터. 손대는 모든 것을 아름답게 변환시킵니다.'
    },
    eyeDesc: { en: 'Dreamy, expressive eyes → Artistic vision', ko: '몽환적이고 표현력 있는 눈 → 예술적 비전' },
    noseDesc: { en: 'Unique, distinctive → Originality', ko: '독특하고 개성적인 코 → 독창성' },
    lipDesc: { en: 'Expressive, dynamic lips → Passion', ko: '표현력 넘치는 역동적 입술 → 열정' },
    faceDesc: { en: 'Distinctive features → Unforgettable presence', ko: '독특한 이목구비 → 잊을 수 없는 존재감' },
    pros: { en: ['Boundless creativity', 'Transforms adversity into art', 'Uniquely inspiring'], ko: ['무한한 창의력', '역경을 예술로 변환', '독보적인 영감을 줌'] },
    cons: { en: ['Emotionally intense', 'Struggles with routine', 'Perfectionistic tendencies'], ko: ['감정적으로 격렬함', '일상에 적응하기 어려움', '완벽주의 경향'] },
    match: { en: 'Dragon Spirit', ko: '용상' }, matchEmoji: '🐉',
    color: '#d4542a'
  }
];

const ANALYSIS_STEPS = {
  en: [
    'Detecting face shape...',
    'Analyzing eye features...',
    'Reading nose structure...',
    'Examining lip curvature...',
    'Calculating facial proportions...',
    'Matching animal spirit...',
    'Generating your reading...'
  ],
  ko: [
    '얼굴형을 감지하는 중...',
    '눈 특징을 분석하는 중...',
    '코 구조를 읽는 중...',
    '입술 곡선을 살피는 중...',
    '얼굴 비율을 계산하는 중...',
    '동물상을 매칭하는 중...',
    '관상 결과를 생성하는 중...'
  ]
};

// ── State ──
let uploadedImageData = null;

// ── Worker URL (Cloudflare Worker 배포 후 교체) ──
const WORKER_URL = 'https://naejeon-worker.zmfltmxkf79.workers.dev';

// ── DOM Ready ──
document.addEventListener('DOMContentLoaded', () => {
  initFlipGrid();

  // 결제 완료 후 돌아왔을 때 checkout_id 감지
  const params = new URLSearchParams(window.location.search);
  const checkoutId = params.get('checkout_id');
  if (checkoutId) {
    history.replaceState({}, '', window.location.pathname); // URL 정리
    const lang = getLang();
    fetch(`${WORKER_URL}/verify-payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ checkoutId }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.token) {
          sessionStorage.setItem('naejeonToken', data.token);
          // 저장해둔 이미지 복원 후 자동 변환
          const saved = sessionStorage.getItem('pendingImage');
          if (saved) {
            sessionStorage.removeItem('pendingImage');
            uploadedImageData = saved;
            // 관상 결과 화면(resultScreen)을 띄워야 나전칠기 UI/결과가 보임.
            // (이걸 안 하면 변환은 돌지만 숨겨진 화면에 그려져 안 보임)
            showResult();
            document.getElementById('naejeonBtn')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => transformToNaejeonchilgi(), 600);
          }
        } else {
          alert(lang === 'ko' ? '결제 확인 실패: ' + data.error : 'Payment failed: ' + data.error);
        }
      })
      .catch(() => {
        const lang = getLang();
        alert(lang === 'ko' ? '결제 확인 중 오류가 발생했습니다.' : 'Error verifying payment.');
      });
  }

  const uploadArea = document.getElementById('uploadArea');
  const fileInput = document.getElementById('fileInput');
  const previewArea = document.getElementById('previewArea');
  const previewImg = document.getElementById('previewImg');
  const retakeBtn = document.getElementById('retakeBtn');
  const analyzeBtn = document.getElementById('analyzeBtn');
  const retryBtn = document.getElementById('retryBtn');
  const shareBtn = document.getElementById('shareBtn');

  const landingUploadBtn = document.getElementById('landingUploadBtn');
  if (landingUploadBtn) {
    landingUploadBtn.addEventListener('click', () => fileInput.click());
  }

  // Sticky CTA
  const stickyCTA = document.getElementById('stickyCTA');
  const stickyUploadBtn = document.getElementById('stickyUploadBtn');
  if (stickyUploadBtn) stickyUploadBtn.addEventListener('click', () => fileInput.click());

  // Types preview CTA
  const typesPreviewCta = document.getElementById('typesPreviewCta');
  if (typesPreviewCta) typesPreviewCta.addEventListener('click', () => fileInput.click());

  // Final CTA
  const finalCtaBtn = document.getElementById('finalCtaBtn');
  if (finalCtaBtn) finalCtaBtn.addEventListener('click', () => fileInput.click());

  // Sticky CTA visibility based on hero scroll
  const landingSection = document.getElementById('home');
  if (stickyCTA && landingSection) {
    const onScroll = () => {
      const heroBottom = landingSection.getBoundingClientRect().bottom;
      stickyCTA.classList.toggle('visible', heroBottom < 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Types scroll — drag to scroll on desktop
  const typesScroll = document.querySelector('.types-scroll');
  if (typesScroll) {
    let isDown = false, startX, scrollLeft;
    typesScroll.addEventListener('mousedown', e => {
      isDown = true;
      startX = e.pageX - typesScroll.offsetLeft;
      scrollLeft = typesScroll.scrollLeft;
    });
    typesScroll.addEventListener('mouseleave', () => { isDown = false; });
    typesScroll.addEventListener('mouseup', () => { isDown = false; });
    typesScroll.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - typesScroll.offsetLeft;
      typesScroll.scrollLeft = scrollLeft - (x - startX) * 1.5;
    });
  }

  // Upload click
  uploadArea.addEventListener('click', () => fileInput.click());

  // Drag & drop
  uploadArea.addEventListener('dragover', e => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
  });
  uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
  uploadArea.addEventListener('drop', e => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  });

  fileInput.addEventListener('change', e => {
    if (e.target.files[0]) handleFile(e.target.files[0]);
  });

  retakeBtn.addEventListener('click', () => {
    uploadedImageData = null;
    fileInput.value = '';
    previewArea.style.display = 'none';
    uploadArea.style.display = '';
    analyzeBtn.disabled = true;
  });

  analyzeBtn.addEventListener('click', startAnalysis);
  retryBtn.addEventListener('click', () => {
    uploadedImageData = null;
    fileInput.value = '';
    document.getElementById('previewArea').style.display = 'none';
    document.getElementById('uploadArea').style.display = '';
    analyzeBtn.disabled = true;
    showScreen('uploadScreen');
  });

  shareBtn.addEventListener('click', shareResult);
  document.getElementById('naejeonBtn').addEventListener('click', naejeonFakeDoor);
  document.getElementById('naejeonHeroBtn')?.addEventListener('click', naejeonFakeDoor);

  function handleFile(file) {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
      const original = e.target.result;
      const showPreview = dataUrl => {
        uploadedImageData = dataUrl;
        previewImg.src = uploadedImageData;
        uploadArea.style.display = 'none';
        previewArea.style.display = 'flex';
        analyzeBtn.disabled = false;
        document.getElementById('try').scrollIntoView({ behavior: 'smooth' });
      };
      // 원본이 크면 sessionStorage 용량 초과·프록시 크기 제한에 걸리므로 1024px로 축소
      const img = new Image();
      img.onload = () => {
        const MAX = 1024;
        let { width, height } = img;
        if (width > MAX || height > MAX) {
          const scale = MAX / Math.max(width, height);
          width = Math.round(width * scale);
          height = Math.round(height * scale);
        }
        try {
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          canvas.getContext('2d').drawImage(img, 0, 0, width, height);
          showPreview(canvas.toDataURL('image/jpeg', 0.85));
        } catch {
          showPreview(original); // 축소 실패 시 원본 사용
        }
      };
      img.onerror = () => showPreview(original);
      img.src = original;
    };
    reader.readAsDataURL(file);
  }
});

// ── Screens ──
function showScreen(id) {
  ['uploadScreen', 'analyzingScreen', 'resultScreen'].forEach(s => {
    document.getElementById(s).style.display = s === id ? '' : 'none';
  });
}

// ── Hash from image for consistent results ──
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < Math.min(str.length, 5000); i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// ── Get current language ──
function getLang() {
  return localStorage.getItem('lang') || 'ko';
}

// ── Analysis ──
function startAnalysis() {
  showScreen('analyzingScreen');
  document.getElementById('scanImg').src = uploadedImageData;

  const fill = document.getElementById('progressFill');
  const detail = document.getElementById('analyzingDetail');
  let step = 0;
  const lang = getLang();
  const steps = ANALYSIS_STEPS[lang] || ANALYSIS_STEPS.ko;

  fill.style.width = '0%';

  const interval = setInterval(() => {
    step++;
    const pct = Math.min((step / steps.length) * 100, 100);
    fill.style.width = pct + '%';
    detail.textContent = steps[Math.min(step, steps.length - 1)];

    if (step >= steps.length) {
      clearInterval(interval);
      setTimeout(() => showResult(), 400);
    }
  }, 500);
}

// ── Result ──
function showResult() {
  const hash = simpleHash(uploadedImageData);
  const type = TYPES[hash % TYPES.length];
  const lang = getLang();

  // Secondary random values from hash
  const luckNum = (hash % 9) + 1;
  const luckColors = {
    en: ['Gold', 'Crimson', 'Azure', 'Emerald', 'Violet', 'Silver', 'Amber', 'Rose', 'Indigo'],
    ko: ['골드', '크림슨', '하늘색', '에메랄드', '바이올렛', '실버', '앰버', '로즈', '인디고']
  };
  const luckColor = (luckColors[lang] || luckColors.ko)[hash % 9];
  const pct = 70 + (hash % 25);

  // Localized labels
  const L = {
    en: {
      features: '🔍 Face Feature Analysis',
      eyes: 'Eyes', nose: 'Nose', lips: 'Lips', faceShape: 'Face Shape',
      strengths: '✨ Strengths',
      watchOut: '💭 Watch Out For',
      bestMatch: '💕 Best Match',
      matchText: (emoji, name) => `${emoji} Your ideal partner is <strong>${name}</strong>`,
      fortune: '🎯 Today\'s Fortune',
      luckyNum: 'Lucky number',
      luckyColor: 'Lucky color',
      luckScore: 'Overall Luck Score',
      disclaimer: '🎭 This is for entertainment purposes only!'
    },
    ko: {
      features: '🔍 이목구비 분석',
      eyes: '눈', nose: '코', lips: '입', faceShape: '얼굴형',
      strengths: '✨ 강점',
      watchOut: '💭 주의할 점',
      bestMatch: '💕 최고의 궁합',
      matchText: (emoji, name) => `${emoji} 당신의 이상적인 파트너는 <strong>${name}</strong>`,
      fortune: '🎯 오늘의 운세',
      luckyNum: '행운의 숫자',
      luckyColor: '행운의 색',
      luckScore: '종합 행운 점수',
      disclaimer: '🎭 이 결과는 재미를 위한 것입니다!'
    }
  };
  const l = L[lang] || L.ko;

  const typeName = type.name[lang] || type.name.ko;
  const typeDesc = type.desc[lang] || type.desc.ko;
  const eyeDesc = type.eyeDesc[lang] || type.eyeDesc.ko;
  const noseDesc = type.noseDesc[lang] || type.noseDesc.ko;
  const lipDesc = type.lipDesc[lang] || type.lipDesc.ko;
  const faceDesc = type.faceDesc[lang] || type.faceDesc.ko;
  const pros = type.pros[lang] || type.pros.ko;
  const cons = type.cons[lang] || type.cons.ko;
  const matchName = type.match[lang] || type.match.ko;

  const html = `
    <div class="result-card">
      <div class="result-photo-wrap">
        <img src="${uploadedImageData}" class="result-photo" alt="Your face photo" />
      </div>

      <div class="result-type-badge" style="background:${type.color}">
        <span class="result-emoji">${type.emoji}</span>
        <h2 class="result-type-name">${typeName}</h2>
        <p class="result-type-ko">${type.nameKo}</p>
      </div>

      <p class="result-desc">${typeDesc}</p>

      <div class="result-section">
        <h3>${l.features}</h3>
        <ul class="feature-list">
          <li><strong>${l.eyes}:</strong> ${eyeDesc}</li>
          <li><strong>${l.nose}:</strong> ${noseDesc}</li>
          <li><strong>${l.lips}:</strong> ${lipDesc}</li>
          <li><strong>${l.faceShape}:</strong> ${faceDesc}</li>
        </ul>
      </div>

      <div class="result-section">
        <h3>${l.strengths}</h3>
        <ul class="tag-list pros">${pros.map(p => `<li>✔ ${p}</li>`).join('')}</ul>
      </div>

      <div class="result-section">
        <h3>${l.watchOut}</h3>
        <ul class="tag-list cons">${cons.map(c => `<li>✖ ${c}</li>`).join('')}</ul>
      </div>

      <div class="result-section match-section" style="border-color:${type.color}">
        <h3>${l.bestMatch}</h3>
        <p class="match-text">${l.matchText(type.matchEmoji, matchName)}</p>
      </div>

      <div class="result-section fortune-section">
        <h3>${l.fortune}</h3>
        <p>${l.luckyNum}: <strong>${luckNum}</strong></p>
        <p>${l.luckyColor}: <strong>${luckColor}</strong></p>
        <div class="fortune-bar-wrap">
          <div class="fortune-bar" style="width:${pct}%;background:${type.color}">${pct}%</div>
        </div>
        <p class="fortune-label">${l.luckScore}</p>
      </div>

      <p class="result-disclaimer">${l.disclaimer}</p>
    </div>
  `;

  document.getElementById('resultContent').innerHTML = html;
  showScreen('resultScreen');

  // Store for sharing
  window._lastResult = type;
}

// ── 수요 검증: 변환 버튼 = 가짜문 (클릭 집계 + 곧 오픈 안내) ──
async function naejeonFakeDoor(e) {
  const lang = getLang();
  const btn = (e && e.currentTarget) || document.getElementById('naejeonBtn');
  const source = (btn && btn.id) || 'unknown';

  // 클릭 집계 (실패해도 UX엔 영향 없음)
  fetch(`${WORKER_URL}/track-click`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, source }),
  }).catch(() => {});

  // 클릭한 버튼 바로 아래에 "곧 오픈" 안내 표시
  let notice = btn.nextElementSibling;
  if (!notice || !notice.classList || !notice.classList.contains('naejeon-notice')) {
    notice = document.createElement('div');
    notice.className = 'naejeon-notice';
    btn.insertAdjacentElement('afterend', notice);
  }
  notice.textContent = lang === 'ko'
    ? '🙏 준비 중이에요! 곧 오픈 예정입니다. 관심 가져주셔서 감사합니다.'
    : '🙏 Coming soon! Thanks so much for your interest.';
  notice.style.display = 'block';
  btn.disabled = true;
  setTimeout(() => { btn.disabled = false; }, 2000);
}

// ── Naejeonchilgi Transform (현재 미사용 — 수요 검증 후 재활성화) ──
async function transformToNaejeonchilgi() {
  if (!uploadedImageData) return;

  const btn = document.getElementById('naejeonBtn');
  const loadingDiv = document.getElementById('naejeonLoading');
  const resultDiv = document.getElementById('naejeonResult');
  const resultImg = document.getElementById('naejeonImg');
  const lang = getLang();

  const token = sessionStorage.getItem('naejeonToken');

  // 토큰 없으면 결제 페이지로
  if (!token) {
    // 결제 후 복원을 위해 이미지 임시 저장
    try { sessionStorage.setItem('pendingImage', uploadedImageData); } catch {}
    btn.disabled = true;
    btn.textContent = lang === 'ko' ? '결제 페이지로 이동 중...' : 'Redirecting to payment...';
    try {
      const res = await fetch(`${WORKER_URL}/create-checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ siteUrl: window.location.origin + window.location.pathname }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      window.location.href = data.url;
    } catch (err) {
      alert(lang === 'ko' ? '결제 오류: ' + err.message : 'Payment error: ' + err.message);
      btn.disabled = false;
      btn.textContent = lang === 'ko' ? '🎨 나전칠기로 변환하기' : '🎨 Transform to Naejeonchilgi';
    }
    return;
  }

  // 토큰 있으면 변환 실행
  const comma = uploadedImageData.indexOf(',');
  const mimeMatch = uploadedImageData.substring(0, comma).match(/data:([^;]+)/);
  const mimeType = mimeMatch ? mimeMatch[1] : 'image/jpeg';
  const imageData = uploadedImageData.substring(comma + 1);

  btn.disabled = true;
  btn.textContent = lang === 'ko' ? '변환 중... ✨' : 'Transforming... ✨';
  loadingDiv.style.display = '';
  resultDiv.style.display = 'none';

  try {
    const res = await fetch(`${WORKER_URL}/transform`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, imageData, mimeType }),
    });

    const data = await res.json();
    if (data.error) throw new Error(data.error);

    sessionStorage.removeItem('naejeonToken');

    const imageDataUrl = `data:${data.mimeType};base64,${data.imageData}`;
    resultImg.src = imageDataUrl;
    // 원본(before) + 변환결과(after) 나란히 표시
    const beforeImg = document.getElementById('naejeonBeforeImg');
    if (beforeImg) beforeImg.src = uploadedImageData;
    const beforeCap = document.getElementById('naejeonBeforeCap');
    const afterCap = document.getElementById('naejeonAfterCap');
    if (beforeCap) beforeCap.textContent = lang === 'ko' ? '원본' : 'Before';
    if (afterCap) afterCap.textContent = lang === 'ko' ? '나전칠기' : 'After';
    resultDiv.style.display = '';

    document.getElementById('naejeonDownloadBtn').onclick = () => {
      const a = document.createElement('a');
      a.href = imageDataUrl;
      a.download = 'naejeonchilgi-portrait.png';
      a.click();
    };

  } catch (err) {
    if (/유효하지 않거나|Invalid or used/.test(err.message)) sessionStorage.removeItem('naejeonToken');
    alert(lang === 'ko' ? `변환 실패: ${err.message}` : `Transform failed: ${err.message}`);
  } finally {
    btn.disabled = false;
    btn.textContent = lang === 'ko' ? '🎨 나전칠기로 변환하기' : '🎨 Transform to Naejeonchilgi';
    loadingDiv.style.display = 'none';
  }
}

// ── Before/After Flip Grid ──
function initFlipGrid() {
  const cells = Array.from(document.querySelectorAll('.flip-cell'));
  if (!cells.length) return;

  // Set random initial states without transition
  cells.forEach(cell => {
    const inner = cell.querySelector('.flip-inner');
    inner.style.transition = 'none';
    if (Math.random() > 0.5) cell.classList.add('flipped');
    void inner.offsetWidth; // force reflow
    inner.style.transition = '';
  });

  // Schedule ongoing random flips per cell
  cells.forEach(cell => {
    const scheduleFlip = () => {
      const delay = 1800 + Math.random() * 1400;
      setTimeout(() => {
        cell.classList.toggle('flipped');
        scheduleFlip();
      }, delay);
    };
    setTimeout(scheduleFlip, Math.random() * 2000);
  });
}

// ── Share ──
function shareResult() {
  const type = window._lastResult;
  const lang = localStorage.getItem('lang') || 'ko';
  const name = type.name[lang] || type.name.ko;
  const desc = type.desc[lang] || type.desc.ko;
  const url = 'https://ai-test-d4dec.web.app/';
  const text = lang === 'ko'
    ? `나의 관상 동물상은 "${type.nameKo}" ${type.emoji}! ${desc}\n\n너도 해봐! ${url}`
    : `I got "${name}" ${type.emoji} on My Face Reading! ${desc}\n\nTry it yourself! ${url}`;

  if (navigator.share) {
    navigator.share({ title: lang === 'ko' ? '내 관상 동물상' : 'My Face Reading', text, url }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById('shareBtn');
      btn.textContent = lang === 'ko' ? '복사됨! ✅' : 'Copied! ✅';
      setTimeout(() => {
        const t = window.T && window.T[localStorage.getItem('lang') || 'ko'];
        btn.textContent = (t && t['try.share']) || '결과 공유하기 📤';
      }, 2000);
    });
  }
}
