// ── i18n Translation System ──
const T = {
  // Navigation
  'nav.logo': { ko: '&#x2728; 동양의 美', en: '&#x2728; Eastern Beauty' },
  'nav.about': { ko: '소개', en: 'About' },
  'nav.types': { ko: '동물상 유형', en: 'Animal Types' },
  'nav.guide': { ko: '관상 가이드', en: 'Guide' },
  'nav.faq': { ko: 'FAQ', en: 'FAQ' },
  'nav.privacy': { ko: '개인정보', en: 'Privacy' },

  // Article pages
  'article.back': { ko: '&#8592; 메인으로 돌아가기', en: '&#8592; Back to Home' },
  'article.related': { ko: '관련 아티클', en: 'Related Articles' },
  'physio.meta':  { ko: '관상학 가이드', en: 'Physiognomy Guide' },
  'physio.title': { ko: '관상학의 역사와 문화', en: 'The History & Culture of Physiognomy' },
  'physio.desc':  { ko: '동양 관상학(觀相學)의 기원부터 조선시대까지, 수천 년의 역사와 핵심 원리를 탐구합니다.', en: 'From ancient China to the Joseon Dynasty — explore thousands of years of Eastern face-reading wisdom.' },
  'guide.meta':   { ko: '동물상 가이드', en: 'Animal Type Guide' },
  'guide.title':  { ko: '9가지 동물상 완전 가이드', en: 'Complete Guide to 9 Animal Spirit Types' },
  'guide.desc':   { ko: '호랑이상부터 봉황상까지, 9가지 관상 동물상의 성격·직업·연애 스타일·궁합을 한 페이지에서 완전 정리합니다.', en: 'From Tiger to Phoenix — personality, career, love style, and compatibility for all 9 animal spirit types.' },
  'tips.meta':    { ko: '분석 가이드', en: 'Analysis Guide' },
  'tips.title':   { ko: '관상 분석 잘 받는 법', en: 'How to Get the Best Face Reading' },
  'tips.desc':    { ko: '정확한 관상 분석을 위한 올바른 사진 촬영법부터 결과를 일상에서 활용하는 방법까지.', en: 'From choosing the right photo to interpreting your results — make the most of your face reading.' },

  // Landing (new hero)
  'landing.title': {
    ko: '내 얼굴 속<br>어떤 동물이 산다',
    en: 'What animal lives<br>in your face?'
  },
  'landing.sub': {
    ko: '얼굴형·눈·코·입을 정밀하게 읽어<br>나의 동물 기질을 찾아드립니다',
    en: 'Your face shape, eyes, and lips<br>reveal your hidden animal spirit type'
  },
  'landing.cta': { ko: '내 동물상 알아보기 →', en: 'Find My Animal Type →' },

  // Hero (try section)
  'hero.title': { ko: '내 관상 동물상', en: 'My Face Reading' },
  'hero.desc': {
    ko: '동양 관상학으로 내 얼굴의 동물상을 알아보세요!<br>사진 한 장이면 나의 숨겨진 동물 기질을 확인할 수 있습니다.',
    en: 'Discover your animal spirit through Eastern physiognomy!<br>Just one photo reveals your hidden animal nature.'
  },
  'hero.cta': { ko: '관상 분석 시작하기', en: 'Start Analysis' },

  // About
  'about.title': { ko: '내 관상 동물상이란?', en: 'What is My Face Reading?' },
  'about.p1': {
    ko: '"내 관상 동물상"은 동양의 전통 관상학(觀相學)에서 영감을 받아 제작된 엔터테인먼트 서비스입니다. 관상학은 수천 년의 역사를 가진 동양 문화의 한 분야로, 얼굴의 생김새를 통해 그 사람의 성격과 운명을 읽어내는 학문입니다.',
    en: '"My Face Reading" is an entertainment service inspired by traditional Eastern physiognomy (觀相學). Physiognomy is a branch of Eastern culture with thousands of years of history, reading personality and destiny through facial features.'
  },
  'about.p2': {
    ko: '본 서비스는 사용자가 업로드한 얼굴 사진을 분석하여 <strong>9가지 동물상</strong> 중 하나로 매칭합니다. 각 동물상은 고유한 성격 특성, 강점, 약점, 궁합 정보를 포함하고 있어 자신을 재미있게 돌아볼 수 있는 기회를 제공합니다.',
    en: 'Our service analyzes your uploaded face photo and matches you to one of <strong>9 animal spirit types</strong>. Each type includes unique personality traits, strengths, weaknesses, and compatibility info for a fun self-discovery experience.'
  },
  'about.step1.title': { ko: '1단계: 업로드', en: 'Step 1: Upload' },
  'about.step1.desc': {
    ko: '정면 얼굴 사진을 업로드합니다. 밝은 조명에서 촬영한 정면 사진이 가장 정확한 결과를 제공합니다.',
    en: 'Upload a front-facing photo. Photos taken in bright lighting provide the most accurate results.'
  },
  'about.step2.title': { ko: '2단계: 분석', en: 'Step 2: Analyze' },
  'about.step2.desc': {
    ko: '눈, 코, 입, 얼굴 윤곽 등 주요 이목구비를 분석하여 동물상을 매칭합니다.',
    en: 'Your eyes, nose, lips, and face shape are analyzed to match your animal spirit.'
  },
  'about.step3.title': { ko: '3단계: 결과', en: 'Step 3: Result' },
  'about.step3.desc': {
    ko: '나의 동물상, 성격 분석, 강점과 약점, 궁합 등 상세한 결과를 확인하고 공유하세요.',
    en: 'View and share your detailed results including animal type, personality analysis, strengths, weaknesses, and compatibility.'
  },

  // Try Section
  'try.title': { ko: '지금 바로 해보기', en: 'Try It Now' },
  'try.subtitle': { ko: '사진을 올리고 나의 동물상을 확인하세요', en: 'Upload your photo and discover your animal spirit' },
  'try.upload': { ko: '사진을 선택하세요', en: 'Tap to upload your photo' },
  'try.upload.hint': { ko: '또는 여기에 드래그 & 드롭', en: 'or drag & drop here' },
  'try.retake': { ko: '다른 사진 선택', en: 'Choose Another' },
  'try.analyze': { ko: '내 관상 분석하기', en: 'Analyze My Face' },
  'try.disclaimer': { ko: '&#x1F3AD; 재미로 즐기는 엔터테인먼트 서비스입니다!', en: '&#x1F3AD; For entertainment only. Not based on real science!' },
  'try.analyzing': { ko: '관상을 읽고 있습니다...', en: 'Reading your face...' },
  'try.share': { ko: '결과 공유하기 &#x1F4E4;', en: 'Share Result &#x1F4E4;' },
  'try.retry': { ko: '다시 해보기', en: 'Try Again' },
  'naejeon.intro': { ko: '내 얼굴을 나전칠기 예술작품으로 변환해드립니다', en: 'Transform your face into a Naejeonchilgi masterpiece' },
  'naejeon.btn': { ko: '&#x1F3A8; 나전칠기로 변환하기 ($1)', en: '&#x1F3A8; Transform to Naejeonchilgi ($1)' },
  'naejeon.loading': { ko: '나전칠기로 변환 중... ✨', en: 'Transforming to Naejeonchilgi... ✨' },
  'naejeon.download': { ko: '&#x2B07;&#xFE0F; 이미지 다운로드', en: '&#x2B07;&#xFE0F; Download Image' },

  // Hero redesign keys
  'hero.badge': { ko: '&#x2736; 동양 관상학 기반 분석', en: '&#x2736; Eastern Physiognomy' },
  'hero.trust': { ko: '&#x2713; 무료&nbsp;&nbsp;&nbsp;&#x2713; 3초 분석&nbsp;&nbsp;&nbsp;&#x2713; 사진 저장 안 함', en: '&#x2713; Free&nbsp;&nbsp;&nbsp;&#x2713; 3 seconds&nbsp;&nbsp;&nbsp;&#x2713; No photo storage' },

  // How It Works
  'how.eyebrow': { ko: 'HOW IT WORKS', en: 'HOW IT WORKS' },
  'how.title': { ko: '3초면 끝나요', en: 'Done in 3 seconds' },
  'how.step1.title': { ko: '사진 선택', en: 'Choose Photo' },
  'how.step1.desc': { ko: '정면 얼굴 사진 한 장이면 충분합니다', en: 'One front-facing photo is all you need' },
  'how.step2.title': { ko: '관상 분석', en: 'Face Reading' },
  'how.step2.desc': { ko: '이목구비를 정밀 분석합니다', en: 'Precise facial feature analysis' },
  'how.step3.title': { ko: '결과 확인', en: 'See Results' },
  'how.step3.desc': { ko: '동물상 + 성격 분석 받기', en: 'Get your animal type + personality' },

  // Types Preview
  'preview.eyebrow': { ko: '9가지 동물상', en: '9 ANIMAL TYPES' },
  'preview.title': { ko: '나는 어떤 동물일까?', en: 'Which animal are you?' },
  'preview.sub': { ko: '9가지 유형 중 하나가 당신의 얼굴에 숨어있어요', en: 'One of 9 types is hidden in your face' },
  'preview.cta': { ko: '내 동물상 알아보기 →', en: 'Find My Animal Type →' },

  // Social Proof
  'proof.label': { ko: '명이 이미 분석했어요', en: 'people analyzed so far' },
  'proof.review1': { ko: '"여우상이라는 거 소름ㅋㅋ 친구한테 바로 공유함"', en: '"It said Fox Spirit and it\'s SO accurate 😭 shared instantly"' },
  'proof.review2': { ko: '"결과가 진짜 나랑 똑같음.. 재미로 했는데 무서움 &#x1F602;"', en: '"Did this for fun and it described me perfectly lol 😂"' },
  'proof.review3': { ko: '"호랑이상 나왔는데 친구들 다 공감ㅋㅋ 대박"', en: '"Got Tiger Spirit and all my friends were like \'omg yes\' 😂"' },

  // Final CTA
  'finalcta.title': { ko: '아직도 모르고 있어?', en: 'Still don\'t know?' },
  'finalcta.sub': { ko: '내 얼굴 속 동물상', en: 'Your animal spirit type' },
  'finalcta.cta': { ko: '지금 바로 알아보기 →', en: 'Discover Now →' },

  // Types Section
  'types.title': { ko: '9가지 관상 동물상', en: '9 Animal Spirit Types' },
  'types.desc': {
    ko: '관상학에서 영감을 받은 9가지 동물상을 소개합니다. 각 유형은 고유한 성격 특성과 매력을 가지고 있습니다.',
    en: 'Meet the 9 animal spirit types inspired by physiognomy. Each type has unique personality traits and charm.'
  },
  'types.tiger.title': { ko: '호랑이상', en: 'Tiger Spirit' },
  'types.tiger.desc': {
    ko: '타고난 리더십과 강렬한 카리스마의 소유자. 방에 들어서는 순간 모든 시선을 사로잡는 존재감을 가졌습니다. 날카로운 눈매와 각진 턱선이 특징입니다.',
    en: 'A natural-born leader radiating powerful energy. You command attention the moment you walk into a room. Characterized by sharp eyes and angular jawline.'
  },
  'types.fox.title': { ko: '여우상', en: 'Fox Spirit' },
  'types.fox.desc': {
    ko: '매혹적인 매력과 예리한 직감의 소유자. 사람의 마음을 꿰뚫어 보는 능력이 있으며, 항상 적절한 말을 찾아냅니다. 올라간 눈꼬리와 갸름한 얼굴형이 특징입니다.',
    en: 'Magnetic charm meets sharp intuition. You see through people effortlessly and always know the right thing to say. Characterized by upturned eyes and oval face.'
  },
  'types.magpie.title': { ko: '까치상', en: 'Magpie Spirit' },
  'types.magpie.desc': {
    ko: '최고의 소통가이자 분위기 메이커. 밝은 에너지와 재치로 어디서든 중심이 됩니다. 반짝이는 눈과 하트형 얼굴이 특징입니다.',
    en: 'The ultimate connector! Your bright energy and quick wit make you the life of every gathering. Characterized by sparkling eyes and heart-shaped face.'
  },
  'types.crane.title': { ko: '학상', en: 'Crane Spirit' },
  'types.crane.desc': {
    ko: '고요한 지혜가 빛나는 유형. 다른 사람들이 디테일에 빠질 때 큰 그림을 봅니다. 차분한 눈빛과 길고 세련된 얼굴형이 특징입니다.',
    en: 'Calm wisdom radiates from you. You see the bigger picture while others get lost in details. Characterized by a steady gaze and elongated, refined face.'
  },
  'types.turtle.title': { ko: '거북상', en: 'Turtle Spirit' },
  'types.turtle.desc': {
    ko: '모든 사람이 의지하는 든든한 존재. 꾸준하고 신뢰할 수 있는 성격으로 영원히 지속되는 기반을 만듭니다. 온화한 눈빛과 둥근 얼굴형이 특징입니다.',
    en: 'The rock everyone relies on. Your steady, dependable nature builds empires that last forever. Characterized by warm eyes and round face.'
  },
  'types.rabbit.title': { ko: '토끼상', en: 'Rabbit Spirit' },
  'types.rabbit.desc': {
    ko: '순수한 마음과 깊은 감수성의 소유자. 모든 것을 깊이 느끼며 주변 사람들에게 공감과 위로를 전합니다. 크고 부드러운 눈과 둥근 이목구비가 특징입니다.',
    en: 'Pure-hearted and deeply sensitive. You feel everything intensely and your empathy touches everyone around you. Characterized by large, gentle eyes and soft features.'
  },
  'types.dragon.title': { ko: '용상', en: 'Dragon Spirit' },
  'types.dragon.desc': {
    ko: '멈출 수 없는 야망과 타고난 재능의 소유자. 위대한 업적을 이루기 위해 태어났으며, 강한 골격과 관록 있는 이목구비가 특징입니다.',
    en: 'Unstoppable ambition meets raw talent. You were born to achieve greatness. Characterized by strong bone structure and commanding features.'
  },
  'types.deer.title': { ko: '사슴상', en: 'Deer Spirit' },
  'types.deer.desc': {
    ko: '부드러운 우아함과 조용한 힘의 소유자. 모든 사람을 안전하고 이해받는다고 느끼게 하는 차분한 아우라가 있습니다. 사슴 같은 부드러운 눈이 특징입니다.',
    en: 'Gentle grace meets quiet strength. You have a calming aura that makes everyone feel safe and understood. Characterized by soft, doe-like eyes.'
  },
  'types.phoenix.title': { ko: '봉황상', en: 'Phoenix Spirit' },
  'types.phoenix.desc': {
    ko: '예술적 열정으로 타오르는 진정한 크리에이터. 손대는 모든 것을 아름답게 변환시킵니다. 몽환적이고 표현력 있는 눈과 독특한 이목구비가 특징입니다.',
    en: 'A true creative soul blazing with artistic fire. You transform everything you touch into something beautiful. Characterized by dreamy, expressive eyes and distinctive features.'
  },

  // Knowledge Section
  'knowledge.title': { ko: '관상학이란? (觀相學)', en: 'Understanding Physiognomy (觀相學)' },
  'knowledge.intro': {
    ko: '관상학(觀相學, Physiognomy)은 동아시아에서 수천 년간 전해 내려온 전통 학문입니다. 한국에서는 \'관상\', 중국에서는 \'면상(面相)\', 일본에서는 \'인상(人相)\'이라 불리며, 얼굴의 이목구비와 윤곽을 통해 그 사람의 성격, 건강, 운명을 읽어내는 학문입니다.',
    en: 'Physiognomy (觀相學) is a traditional study passed down for thousands of years in East Asia. Known as "gwansang" in Korea, "mianxiang" in China, and "ninsō" in Japan, it reads personality, health, and destiny through facial features and contours.'
  },
  'knowledge.elements': { ko: '관상의 핵심 요소', en: 'Key Elements of Face Reading' },
  'knowledge.eyes.title': { ko: '&#x1F441;&#xFE0F; 눈 (Eyes)', en: '&#x1F441;&#xFE0F; Eyes' },
  'knowledge.eyes.desc': {
    ko: '관상학에서 눈은 \'마음의 창\'이라 불립니다. 눈의 크기, 모양, 간격, 눈꼬리의 방향 등을 통해 그 사람의 내면적 성격과 감정 표현 방식을 읽어냅니다. 큰 눈은 풍부한 감수성을, 날카로운 눈은 강한 의지력을 나타낸다고 합니다.',
    en: 'In physiognomy, eyes are called the "window to the soul." Size, shape, spacing, and direction of the eye corners reveal inner personality and emotional expression. Large eyes indicate rich sensitivity, while sharp eyes suggest strong willpower.'
  },
  'knowledge.nose.title': { ko: '&#x1F443; 코 (Nose)', en: '&#x1F443; Nose' },
  'knowledge.nose.desc': {
    ko: '코는 관상학에서 \'재물궁(財物宮)\'에 해당하며, 야망과 의지력을 나타냅니다. 콧대의 높이와 코끝의 모양을 통해 그 사람의 자존감, 리더십, 재물운 등을 판단합니다. 높은 콧대는 강한 자존심과 야망을 상징합니다.',
    en: 'The nose corresponds to the "Wealth Palace" in physiognomy, representing ambition and willpower. The bridge height and tip shape reveal self-esteem, leadership, and fortune. A high bridge symbolizes strong pride and ambition.'
  },
  'knowledge.lips.title': { ko: '&#x1F444; 입 (Lips)', en: '&#x1F444; Lips' },
  'knowledge.lips.desc': {
    ko: '입은 소통 능력과 대인관계를 나타내는 중요한 부위입니다. 입술의 두께, 모양, 입꼬리의 방향 등을 분석합니다. 도톰한 입술은 따뜻한 성격을, 얇은 입술은 논리적 사고를 나타낸다고 합니다.',
    en: 'Lips are a crucial indicator of communication skills and relationships. Thickness, shape, and corner direction are analyzed. Full lips indicate warmth, while thin lips suggest logical thinking.'
  },
  'knowledge.face.title': { ko: '&#x1F5FF; 얼굴형 (Face Shape)', en: '&#x1F5FF; Face Shape' },
  'knowledge.face.desc': {
    ko: '얼굴의 전체적인 윤곽은 그 사람의 기본적인 기질을 나타냅니다. 둥근 얼굴은 친근함과 사교성을, 각진 얼굴은 리더십과 결단력을, 갸름한 얼굴은 섬세함과 지성을 상징한다고 전해집니다.',
    en: 'The overall facial contour represents fundamental temperament. Round faces symbolize friendliness, angular faces indicate leadership and decisiveness, and oval faces represent delicacy and intelligence.'
  },
  'knowledge.disclaimer': {
    ko: '<strong>Disclaimer:</strong> "내 관상 동물상"은 순수한 엔터테인먼트 목적으로 제작되었습니다. 관상학은 과학적으로 검증된 학문이 아니며, 본 서비스의 분석 결과는 재미를 위한 것입니다. 실제 성격이나 운명을 판단하는 용도로 사용하지 마세요.',
    en: '<strong>Disclaimer:</strong> "My Face Reading" is created purely for entertainment purposes. Physiognomy is not a scientifically verified discipline, and results are meant for fun only. Do not use them for real personality or destiny judgments.'
  },

  // FAQ
  'faq.title': { ko: '자주 묻는 질문', en: 'Frequently Asked Questions' },
  'faq.q1': { ko: '이 서비스는 어떻게 작동하나요?', en: 'How does this service work?' },
  'faq.a1': {
    ko: '사용자가 업로드한 사진의 얼굴 특징(눈, 코, 입, 얼굴형)을 분석하여 9가지 동물상 중 가장 어울리는 유형을 매칭합니다. 각 동물상은 동양 관상학에서 영감을 받은 고유한 성격 프로필을 가지고 있습니다.',
    en: 'We analyze facial features (eyes, nose, lips, face shape) from your uploaded photo to match you with one of 9 animal spirit types. Each type has a unique personality profile inspired by Eastern physiognomy.'
  },
  'faq.q2': { ko: '업로드한 사진은 저장되나요?', en: 'Are uploaded photos stored?' },
  'faq.a2': {
    ko: '아니요. 업로드된 사진은 분석 목적으로만 사용되며, 브라우저 내에서만 처리됩니다. 서버에 저장되거나 제3자에게 전달되지 않습니다. 브라우저를 닫으면 사진 데이터는 완전히 삭제됩니다.',
    en: 'No. Uploaded photos are only used for analysis and processed entirely within your browser. They are never stored on servers or shared with third parties. Closing the browser completely deletes photo data.'
  },
  'faq.q3': { ko: '분석 결과는 정확한가요?', en: 'Are the results accurate?' },
  'faq.a3': {
    ko: '이 서비스는 엔터테인먼트 목적으로 제작되었습니다. 관상학 자체가 과학적으로 검증된 학문이 아니므로, 결과를 실제 성격 판단이나 중요한 결정에 사용하지 마세요. 친구들과 재미있게 즐기는 용도로 사용해 주세요.',
    en: 'This service is made for entertainment only. Since physiognomy itself is not scientifically verified, do not use results for real personality judgments or important decisions. Enjoy it for fun with friends!'
  },
  'faq.q4': { ko: '어떤 사진을 올려야 가장 좋은 결과가 나오나요?', en: 'What kind of photo works best?' },
  'faq.a4': {
    ko: '밝은 조명에서 촬영한 정면 얼굴 사진이 가장 좋습니다. 선글라스, 마스크 등 얼굴을 가리는 액세서리는 피해 주세요. 고화질 사진일수록 더 정확한 분석이 가능합니다.',
    en: 'A front-facing photo taken in bright lighting works best. Avoid sunglasses, masks, or other accessories that cover your face. Higher quality photos enable more accurate analysis.'
  },
  'faq.q5': { ko: '동물상은 몇 가지 종류가 있나요?', en: 'How many animal types are there?' },
  'faq.a5': {
    ko: '총 9가지 동물상이 있습니다: 호랑이상, 여우상, 까치상, 학상, 거북상, 토끼상, 용상, 사슴상, 봉황상. 각 유형은 고유한 성격 특성, 강점, 약점, 궁합 정보를 포함합니다.',
    en: 'There are 9 animal spirit types: Tiger, Fox, Magpie, Crane, Turtle, Rabbit, Dragon, Deer, and Phoenix. Each type includes unique personality traits, strengths, weaknesses, and compatibility info.'
  },
  'faq.q6': { ko: '결과를 공유할 수 있나요?', en: 'Can I share my results?' },
  'faq.a6': {
    ko: '네! 분석 결과 화면에서 \'결과 공유하기\' 버튼을 눌러 SNS나 메신저로 쉽게 공유할 수 있습니다. 친구들과 결과를 비교해 보세요.',
    en: 'Yes! Tap the "Share Result" button on the results screen to easily share via social media or messenger. Compare results with your friends!'
  },
  'faq.q7': { ko: '무료인가요?', en: 'Is it free?' },
  'faq.a7': {
    ko: '네, 이 서비스는 완전히 무료입니다. 횟수 제한 없이 자유롭게 이용할 수 있습니다.',
    en: 'Yes, this service is completely free. You can use it as many times as you like with no limits.'
  },

  // Footer
  'footer.brand': { ko: '내 관상 동물상', en: 'My Face Reading' },
  'footer.brand.desc': {
    ko: '동양 관상학으로 내 얼굴의 동물상을 알아보는 엔터테인먼트 서비스입니다.',
    en: 'An entertainment service that discovers your animal spirit through Eastern physiognomy.'
  },
  'footer.links': { ko: '링크', en: 'Links' },
  'footer.legal': { ko: '법적 고지', en: 'Legal' },
  'footer.contact': { ko: '문의', en: 'Contact' },
  'footer.contact.desc': {
    ko: '질문이나 피드백이 있으신가요?',
    en: 'Questions or feedback?'
  },
  'footer.privacy': { ko: '개인정보처리방침', en: 'Privacy Policy' },
  'footer.terms': { ko: '이용약관', en: 'Terms of Service' },
  'footer.copyright': {
    ko: '&copy; 2025 내 관상 동물상. All rights reserved. 본 서비스는 엔터테인먼트 목적으로 제공됩니다.',
    en: '&copy; 2025 My Face Reading. All rights reserved. This service is for entertainment purposes only.'
  },

  // Privacy page
  'privacy.title': { ko: 'Privacy Policy (개인정보처리방침)', en: 'Privacy Policy' },
  'privacy.date': { ko: '최종 업데이트: 2025년 1월', en: 'Last updated: January 2025' },
  'privacy.h1': { ko: '1. 소개', en: '1. Introduction' },
  'privacy.p1': {
    ko: '"내 관상 동물상" (이하 "서비스")은 사용자의 개인정보를 소중히 여기며, 관련 법령에 따라 개인정보를 보호하고 있습니다. 본 개인정보처리방침은 서비스가 어떤 정보를 수집하고 어떻게 사용하는지 설명합니다.',
    en: '"My Face Reading" (hereinafter "Service") values your privacy and protects personal information in accordance with applicable laws. This Privacy Policy explains what information we collect and how we use it.'
  },
  'privacy.h2': { ko: '2. 수집하는 정보', en: '2. Information We Collect' },
  'privacy.h2.1': { ko: '2.1 업로드된 사진', en: '2.1 Uploaded Photos' },
  'privacy.p2.1': {
    ko: '사용자가 얼굴 분석을 위해 업로드하는 사진은 <strong>브라우저 내에서만 처리</strong>됩니다. 사진은 서버에 전송되거나 저장되지 않으며, 브라우저를 닫으면 완전히 삭제됩니다.',
    en: 'Photos uploaded for face analysis are <strong>processed entirely within your browser</strong>. Photos are never transmitted to or stored on servers, and are completely deleted when you close the browser.'
  },
  'privacy.h2.2': { ko: '2.2 자동 수집 정보', en: '2.2 Automatically Collected Information' },
  'privacy.p2.2': {
    ko: '서비스 개선을 위해 다음과 같은 비식별 정보가 자동으로 수집될 수 있습니다:',
    en: 'The following non-identifying information may be automatically collected for service improvement:'
  },
  'privacy.li1': { ko: '브라우저 유형 및 버전', en: 'Browser type and version' },
  'privacy.li2': { ko: '운영 체제', en: 'Operating system' },
  'privacy.li3': { ko: '방문 일시', en: 'Date and time of visit' },
  'privacy.li4': { ko: '페이지 조회 수', en: 'Page views' },
  'privacy.li5': { ko: '참조 URL', en: 'Referring URL' },
  'privacy.h3': { ko: '3. 정보 사용 방법', en: '3. How We Use Information' },
  'privacy.p3': {
    ko: '수집된 정보는 다음 목적으로만 사용됩니다:',
    en: 'Collected information is used only for the following purposes:'
  },
  'privacy.li6': { ko: '얼굴 분석 서비스 제공', en: 'Providing face analysis service' },
  'privacy.li7': { ko: '서비스 품질 개선', en: 'Improving service quality' },
  'privacy.li8': { ko: '사용자 경험 최적화', en: 'Optimizing user experience' },
  'privacy.h4': { ko: '4. 제3자 서비스', en: '4. Third-Party Services' },
  'privacy.p4': {
    ko: '본 서비스는 Google AdSense를 사용하여 광고를 표시합니다. Google은 쿠키를 사용하여 사용자의 관심사에 기반한 광고를 표시할 수 있습니다. Google의 개인정보 처리에 대한 자세한 내용은 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google 개인정보처리방침</a>을 참조하세요.',
    en: 'This service uses Google AdSense to display ads. Google may use cookies to serve ads based on your interests. For more details, see the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a>.'
  },
  'privacy.h5': { ko: '5. 쿠키', en: '5. Cookies' },
  'privacy.p5': {
    ko: '본 서비스와 제3자 광고 서비스는 쿠키를 사용할 수 있습니다. 쿠키는 사용자의 브라우저 설정에서 관리할 수 있습니다.',
    en: 'This service and third-party advertising services may use cookies. Cookies can be managed through your browser settings.'
  },
  'privacy.h6': { ko: '6. 데이터 보안', en: '6. Data Security' },
  'privacy.p6': {
    ko: '사용자의 데이터 보호를 위해 업계 표준 보안 조치를 적용하고 있습니다. 사진 데이터는 서버에 저장되지 않으며, 모든 통신은 HTTPS를 통해 암호화됩니다.',
    en: 'We apply industry-standard security measures to protect your data. Photo data is not stored on servers, and all communications are encrypted via HTTPS.'
  },
  'privacy.h7': { ko: '7. 아동 개인정보', en: "7. Children's Privacy" },
  'privacy.p7': {
    ko: '본 서비스는 13세 미만의 아동을 대상으로 하지 않습니다. 13세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다.',
    en: 'This service is not intended for children under 13. We do not intentionally collect personal information from children under 13.'
  },
  'privacy.h8': { ko: '8. 방침 변경', en: '8. Changes to This Policy' },
  'privacy.p8': {
    ko: '본 개인정보처리방침은 필요에 따라 업데이트될 수 있습니다. 중요한 변경 사항이 있을 경우 서비스 내에서 공지합니다.',
    en: 'This Privacy Policy may be updated as needed. Significant changes will be announced within the service.'
  },
  'privacy.h9': { ko: '9. 문의', en: '9. Contact Us' },
  'privacy.p9': {
    ko: '개인정보 처리에 대한 문의사항이 있으시면 아래로 연락해 주세요.',
    en: 'If you have questions about privacy, please contact us below.'
  },

  // Terms page
  'terms.title': { ko: 'Terms of Service (이용약관)', en: 'Terms of Service' },
  'terms.date': { ko: '최종 업데이트: 2025년 1월', en: 'Last updated: January 2025' },
  'terms.h1': { ko: '1. 서비스 개요', en: '1. Service Overview' },
  'terms.p1': {
    ko: '"내 관상 동물상"(이하 "서비스")은 사용자가 업로드한 얼굴 사진을 분석하여 동물상을 매칭하는 엔터테인먼트 서비스입니다. 본 서비스를 이용함으로써 아래 약관에 동의하는 것으로 간주됩니다.',
    en: '"My Face Reading" (hereinafter "Service") is an entertainment service that analyzes uploaded face photos to match animal spirit types. By using this service, you agree to the following terms.'
  },
  'terms.h2': { ko: '2. 엔터테인먼트 목적', en: '2. Entertainment Purpose' },
  'terms.p2': {
    ko: '본 서비스의 모든 분석 결과는 <strong>순수한 엔터테인먼트 목적</strong>으로 제공됩니다. 관상학은 과학적으로 검증된 학문이 아니며, 분석 결과는 실제 성격, 운명, 건강 등을 정확하게 반영하지 않습니다. 중요한 의사결정에 본 서비스의 결과를 사용하지 마세요.',
    en: 'All analysis results are provided <strong>purely for entertainment purposes</strong>. Physiognomy is not scientifically verified, and results do not accurately reflect actual personality, destiny, or health. Do not use results for important decisions.'
  },
  'terms.h3': { ko: '3. 이용자 의무', en: '3. User Responsibilities' },
  'terms.li1': {
    ko: '본인의 사진 또는 동의를 받은 타인의 사진만 업로드해야 합니다.',
    en: 'Only upload your own photos or photos with the consent of others.'
  },
  'terms.li2': {
    ko: '불법적이거나 부적절한 이미지를 업로드하지 않아야 합니다.',
    en: 'Do not upload illegal or inappropriate images.'
  },
  'terms.li3': {
    ko: '서비스를 악용하거나 타인에게 피해를 주는 행위를 하지 않아야 합니다.',
    en: 'Do not misuse the service or cause harm to others.'
  },
  'terms.h4': { ko: '4. 지적 재산권', en: '4. Intellectual Property' },
  'terms.p4': {
    ko: '서비스의 디자인, 콘텐츠, 코드 등 모든 지적 재산은 "내 관상 동물상"에 귀속됩니다. 사전 서면 동의 없이 복제, 수정, 배포할 수 없습니다.',
    en: 'All intellectual property including design, content, and code belongs to "My Face Reading." No reproduction, modification, or distribution without prior written consent.'
  },
  'terms.h5': { ko: '5. 책임 제한', en: '5. Limitation of Liability' },
  'terms.p5': {
    ko: '서비스는 "있는 그대로" 제공되며, 명시적이든 묵시적이든 어떠한 보증도 하지 않습니다. 서비스 이용으로 인해 발생하는 직접적, 간접적 손해에 대해 책임을 지지 않습니다.',
    en: 'The service is provided "as is" without any warranties, express or implied. We are not liable for any direct or indirect damages arising from use of the service.'
  },
  'terms.h6': { ko: '6. 개인정보', en: '6. Privacy' },
  'terms.p6': {
    ko: '개인정보 처리에 관한 사항은 <a href="privacy.html">개인정보처리방침</a>을 참조하세요.',
    en: 'For privacy matters, please refer to our <a href="privacy.html">Privacy Policy</a>.'
  },
  'terms.h7': { ko: '7. 약관 변경', en: '7. Modifications' },
  'terms.p7': {
    ko: '본 약관은 필요에 따라 변경될 수 있으며, 변경 시 서비스 내에서 공지합니다. 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수 있습니다.',
    en: 'These terms may be changed as needed, with notice provided within the service. If you disagree with changes, you may discontinue use.'
  },
  'terms.h8': { ko: '8. 문의', en: '8. Contact' },
  'terms.p8': {
    ko: '이용약관에 대한 문의:',
    en: 'For questions about these terms:'
  },
};

// ── Detect default language ──
function getDefaultLang() {
  const saved = localStorage.getItem('lang');
  if (saved) return saved;
  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  return browserLang.startsWith('ko') ? 'ko' : 'en';
}

let currentLang = getDefaultLang();

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[key] && T[key][lang]) {
      el.innerHTML = T[key][lang];
    }
  });

  // Update toggle button text
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.textContent = lang === 'ko' ? 'EN' : 'KO';
  }

  // Update page title based on page
  if (document.querySelector('[data-page="index"]')) {
    document.title = lang === 'ko'
      ? '동양의 미로 너를 확인해봐 — 동양 관상 테스트'
      : 'See Yourself Through Eastern Beauty — Face Reading';
  } else if (document.querySelector('[data-page="privacy"]')) {
    document.title = lang === 'ko' ? '개인정보처리방침 - 내 관상 동물상' : 'Privacy Policy - My Face Reading';
  } else if (document.querySelector('[data-page="terms"]')) {
    document.title = lang === 'ko' ? '이용약관 - 내 관상 동물상' : 'Terms of Service - My Face Reading';
  } else if (document.querySelector('[data-page="article-physio"]')) {
    document.title = lang === 'ko'
      ? '관상학의 역사와 문화 | 내 관상 동물상'
      : 'History & Culture of Physiognomy | My Face Reading';
  } else if (document.querySelector('[data-page="article-guide"]')) {
    document.title = lang === 'ko'
      ? '9가지 동물상 완전 가이드 | 내 관상 동물상'
      : 'Complete Guide to 9 Animal Spirit Types | My Face Reading';
  } else if (document.querySelector('[data-page="article-tips"]')) {
    document.title = lang === 'ko'
      ? '관상 분석 잘 받는 법 | 내 관상 동물상'
      : 'How to Get the Best Face Reading | My Face Reading';
  }
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      setLang(currentLang === 'ko' ? 'en' : 'ko');
    });
  }
  setLang(currentLang);
});
