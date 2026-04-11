import { routing } from '@/i18n/routing';

export type Locale = (typeof routing.locales)[number];
type BaseSeoLocale = 'en' | 'ko' | 'ja' | 'zh' | 'es';
export type SeoLocale = Locale;

export type SeoPageSlug = 'ai-fitness-coach' | 'workout-feedback' | 'healthy-routine';

export type SeoFaq = {
    question: string;
    answer: string;
};

type SeoLandingPageContent = {
    badge: string;
    title: string;
    description: string;
    cardSummary: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    benefits: string[];
    sections: Array<{
        title: string;
        body: string;
        bullets: string[];
    }>;
    faq: SeoFaq[];
};

type SeoUiCopy = {
    homeKicker: string;
    surfaceKicker: string;
    surfaceTitle: string;
    surfaceDescription: string;
    faqKicker: string;
    faqTitle: string;
    relatedKicker: string;
    relatedTitle: string;
    relatedDescription: string;
    panelLabel: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaNote: string;
    metricLabels: [string, string, string];
};

type SeoHomeContent = {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string[];
    badge: string;
    title: string;
    subtitle: string;
    faqTitle: string;
    linkLabel: string;
    faq: SeoFaq[];
};

export type SeoPageContent = {
    badge: string;
    title: string;
    description: string;
    summary: string;
    highlights: Array<{
        label: string;
        value: string;
        detail: string;
    }>;
    sections: Array<{
        title: string;
        body: string;
        bullets: string[];
    }>;
    faqs: SeoFaq[];
    related: Array<{
        slug: SeoPageSlug;
        eyebrow: string;
        title: string;
        description: string;
    }>;
    cta: {
        primary: string;
        secondary: string;
        note: string;
    };
    ui: Pick<
        SeoUiCopy,
        | 'surfaceKicker'
        | 'surfaceTitle'
        | 'surfaceDescription'
        | 'faqKicker'
        | 'faqTitle'
        | 'relatedKicker'
        | 'relatedTitle'
        | 'relatedDescription'
        | 'panelLabel'
    >;
};

export type SeoLandingPreview = {
    slug: SeoPageSlug;
    eyebrow: string;
    title: string;
    description: string;
};

export const seoLandingSlugs: SeoPageSlug[] = ['ai-fitness-coach', 'workout-feedback', 'healthy-routine'];

const seoUiCopy: Record<BaseSeoLocale, SeoUiCopy> = {
    en: {
        homeKicker: 'Search-ready guides',
        surfaceKicker: 'Search-ready content',
        surfaceTitle: 'Support pages that match specific search intent',
        surfaceDescription:
            'Each page expands the site around a clear topic while staying close to the existing BodyCoach visual style.',
        faqKicker: 'FAQ',
        faqTitle: 'Clear answers for people and search engines',
        relatedKicker: 'Internal links',
        relatedTitle: 'Close related topics without changing the core UI',
        relatedDescription: 'These links help visitors and crawlers move across closely related BodyCoach topics.',
        panelLabel: 'Search intent',
        ctaPrimary: 'Download BodyCoach',
        ctaSecondary: 'Explore sections',
        ctaNote: 'Use these pages to learn how BodyCoach fits your goals before downloading.',
        metricLabels: ['Focus', 'Feedback', 'Consistency'],
    },
    ko: {
        homeKicker: '검색 유입 가이드',
        surfaceKicker: '검색 대응 콘텐츠',
        surfaceTitle: '구체적인 검색 의도를 받쳐주는 지원 페이지',
        surfaceDescription:
            '각 페이지는 기존 BodyCoach의 시각 톤을 유지하면서도 더 명확한 주제로 검색엔진과 사용자를 연결합니다.',
        faqKicker: 'FAQ',
        faqTitle: '사람과 검색엔진 모두를 위한 명확한 답변',
        relatedKicker: '내부 링크',
        relatedTitle: '핵심 UI를 흔들지 않고 관련 주제를 촘촘히 연결',
        relatedDescription: '이 링크들은 방문자와 크롤러가 서로 가까운 BodyCoach 주제를 자연스럽게 이동하도록 돕습니다.',
        panelLabel: '검색 의도',
        ctaPrimary: 'BodyCoach 다운로드',
        ctaSecondary: '섹션 살펴보기',
        ctaNote: '앱을 받기 전에 BodyCoach가 내 목표에 어떻게 맞는지 이 페이지에서 먼저 확인할 수 있습니다.',
        metricLabels: ['핵심', '피드백', '지속성'],
    },
    ja: {
        homeKicker: '検索向けガイド',
        surfaceKicker: '検索対応コンテンツ',
        surfaceTitle: '具体的な検索意図に応える補助ページ',
        surfaceDescription:
            '各ページは既存のBodyCoachの見た目を保ちながら、より明確なテーマで検索エンジンとユーザーをつなぎます。',
        faqKicker: 'FAQ',
        faqTitle: '人にも検索エンジンにも分かりやすい回答',
        relatedKicker: '内部リンク',
        relatedTitle: 'コアUIを崩さず関連トピックをつなぐ',
        relatedDescription: 'これらのリンクで、訪問者もクローラーも近いテーマ間を自然に移動できます。',
        panelLabel: '検索意図',
        ctaPrimary: 'BodyCoachをダウンロード',
        ctaSecondary: 'セクションを見る',
        ctaNote: 'ダウンロード前に、BodyCoachが自分の目標にどう合うかをこのページで確認できます。',
        metricLabels: ['焦点', 'フィードバック', '継続'],
    },
    zh: {
        homeKicker: '搜索指南',
        surfaceKicker: '搜索内容',
        surfaceTitle: '覆盖更明确搜索意图的支持页面',
        surfaceDescription:
            '这些页面在保持 BodyCoach 现有视觉风格的同时，用更清晰的主题连接搜索引擎和真实用户。',
        faqKicker: 'FAQ',
        faqTitle: '给用户和搜索引擎都看得懂的答案',
        relatedKicker: '内部链接',
        relatedTitle: '在不破坏核心 UI 的前提下连接相关主题',
        relatedDescription: '这些链接帮助访客和爬虫在彼此接近的 BodyCoach 主题之间自然移动。',
        panelLabel: '搜索意图',
        ctaPrimary: '下载 BodyCoach',
        ctaSecondary: '查看内容',
        ctaNote: '下载前，你可以先通过这些页面确认 BodyCoach 是否适合你的目标。',
        metricLabels: ['重点', '反馈', '坚持'],
    },
    es: {
        homeKicker: 'Guías para búsqueda',
        surfaceKicker: 'Contenido para búsqueda',
        surfaceTitle: 'Páginas de apoyo para intenciones de búsqueda más específicas',
        surfaceDescription:
            'Cada página mantiene el tono visual actual de BodyCoach, pero amplía el sitio con temas más claros para usuarios y motores de búsqueda.',
        faqKicker: 'FAQ',
        faqTitle: 'Respuestas claras para personas y buscadores',
        relatedKicker: 'Enlaces internos',
        relatedTitle: 'Temas relacionados sin tocar la UI principal',
        relatedDescription: 'Estos enlaces ayudan a usuarios y rastreadores a moverse entre temas cercanos dentro de BodyCoach.',
        panelLabel: 'Intención de búsqueda',
        ctaPrimary: 'Descargar BodyCoach',
        ctaSecondary: 'Ver secciones',
        ctaNote: 'Antes de descargar la app, estas páginas te muestran cómo BodyCoach encaja con tu objetivo.',
        metricLabels: ['Enfoque', 'Feedback', 'Constancia'],
    },
};

const seoHomeContent: Record<BaseSeoLocale, SeoHomeContent> = {
    en: {
        metaTitle: 'AI Fitness Coach App for Workout Feedback and Healthy Routines',
        metaDescription:
            'BodyCoach helps you track meals and workouts, get AI workout feedback, and build a healthy routine you can actually keep.',
        metaKeywords: ['AI fitness coach', 'workout feedback app', 'healthy routine app', 'meal tracking coach', 'fitness feedback'],
        badge: 'Search-ready guides',
        title: 'Explore how BodyCoach supports AI coaching, workout feedback, and healthy routines',
        subtitle:
            'These pages explain how BodyCoach turns meal logs, workout tracking, and daily check-ins into practical coaching feedback.',
        faqTitle: 'Frequently asked questions',
        linkLabel: 'Read guide',
        faq: [
            {
                question: 'What does an AI fitness coach actually do?',
                answer:
                    'BodyCoach reviews the meals and workouts you log, then turns that information into practical guidance you can use the same day.',
            },
            {
                question: 'Can BodyCoach help with workout feedback?',
                answer:
                    'Yes. It helps you review what you trained, how consistent you have been, and what to adjust next instead of only storing workout history.',
            },
            {
                question: 'Is BodyCoach only for weight loss?',
                answer:
                    'No. The app is useful for fat loss, muscle gain, maintenance, and general habit building because the feedback adapts to your goal.',
            },
            {
                question: 'How does BodyCoach help build a healthy routine?',
                answer:
                    'It reduces friction around logging, gives you faster feedback, and makes it easier to stay consistent with meals, workouts, and recovery.',
            },
        ],
    },
    ko: {
        metaTitle: 'AI 피트니스 코치 앱 | 운동 피드백과 건강 루틴 관리',
        metaDescription:
            'BodyCoach는 식단과 운동을 기록하고, AI 운동 피드백을 받으며, 꾸준히 유지할 수 있는 건강 루틴을 만들 수 있도록 돕습니다.',
        metaKeywords: ['AI 피트니스 코치', '운동 피드백', '건강 루틴', '식단 기록', 'AI 건강 코치'],
        badge: '검색 유입 가이드',
        title: 'BodyCoach가 AI 코칭, 운동 피드백, 건강 루틴을 어떻게 돕는지 살펴보세요',
        subtitle:
            '아래 페이지에서는 BodyCoach가 식단 기록, 운동 추적, 일상 체크인을 실제로 실행 가능한 코칭 피드백으로 바꾸는 방식을 설명합니다.',
        faqTitle: '자주 묻는 질문',
        linkLabel: '가이드 보기',
        faq: [
            {
                question: 'AI 피트니스 코치는 실제로 무엇을 해주나요?',
                answer:
                    'BodyCoach는 사용자가 기록한 식단과 운동을 바탕으로 그날 바로 적용할 수 있는 피드백과 다음 행동을 제안합니다.',
            },
            {
                question: '운동 피드백도 받을 수 있나요?',
                answer:
                    '네. 단순히 운동 기록을 저장하는 것이 아니라, 최근 운동 흐름과 꾸준함을 보고 다음에 무엇을 조정해야 할지 안내합니다.',
            },
            {
                question: '체중 감량용 앱인가요?',
                answer:
                    '아닙니다. 감량뿐 아니라 근육 증가, 유지, 건강 습관 형성에도 활용할 수 있으며 목표에 맞춰 피드백이 달라집니다.',
            },
            {
                question: '건강 루틴 형성에는 어떻게 도움이 되나요?',
                answer:
                    '기록 부담을 줄이고 빠른 피드백을 제공해 식단, 운동, 회복을 더 꾸준히 이어가도록 도와줍니다.',
            },
        ],
    },
    ja: {
        metaTitle: 'AIフィットネスコーチアプリ | ワークアウトのフィードバックと健康習慣',
        metaDescription:
            'BodyCoachは食事と運動の記録をもとに、AIによるワークアウトのフィードバックと続けやすい健康習慣づくりをサポートします。',
        metaKeywords: ['AIフィットネスコーチ', 'ワークアウト フィードバック', '健康習慣 アプリ', '食事記録', 'AIコーチ'],
        badge: '検索向けガイド',
        title: 'BodyCoachがAIコーチング、運動フィードバック、健康習慣をどう支えるかを見る',
        subtitle:
            '以下のページでは、食事記録、運動ログ、日々のチェックを、実行しやすいコーチングフィードバックへ変える方法を紹介します。',
        faqTitle: 'よくある質問',
        linkLabel: 'ガイドを見る',
        faq: [
            {
                question: 'AIフィットネスコーチは何をしてくれますか？',
                answer:
                    'BodyCoachは記録した食事と運動を見て、その日に実行できる具体的なフィードバックと次の行動を提案します。',
            },
            {
                question: 'ワークアウトのフィードバックも受けられますか？',
                answer:
                    'はい。単に履歴を残すだけでなく、最近のトレーニング内容や継続状況をもとに次の調整点を示します。',
            },
            {
                question: '減量専用のアプリですか？',
                answer:
                    'いいえ。減量だけでなく、筋力アップ、維持、健康的な習慣づくりにも使え、目標に合わせてフィードバックが変わります。',
            },
            {
                question: '健康的なルーティンづくりにどう役立ちますか？',
                answer:
                    '記録の手間を減らし、素早いフィードバックを返すことで、食事、運動、回復を継続しやすくします。',
            },
        ],
    },
    zh: {
        metaTitle: 'AI 健身教练应用 | 运动反馈与健康习惯管理',
        metaDescription:
            'BodyCoach 帮助你记录饮食和训练，获得 AI 运动反馈，并建立能够长期坚持的健康习惯。',
        metaKeywords: ['AI 健身教练', '运动反馈', '健康习惯', '饮食记录', 'AI 健康教练'],
        badge: '搜索指南',
        title: '了解 BodyCoach 如何支持 AI 教练、运动反馈和健康习惯',
        subtitle:
            '这些页面会说明 BodyCoach 如何把饮食记录、训练追踪和每日打卡转化为真正可执行的教练反馈。',
        faqTitle: '常见问题',
        linkLabel: '查看指南',
        faq: [
            {
                question: 'AI 健身教练到底能做什么？',
                answer:
                    'BodyCoach 会根据你记录的饮食和训练内容，给出当天就能执行的实际建议和下一步行动。',
            },
            {
                question: '它能提供运动反馈吗？',
                answer:
                    '可以。它不仅保存训练记录，还会结合你的训练连续性和最近表现，告诉你下一步该如何调整。',
            },
            {
                question: '这只是减肥应用吗？',
                answer:
                    '不是。无论是减脂、增肌、维持状态还是建立更健康的生活习惯，BodyCoach 都可以根据目标调整反馈。',
            },
            {
                question: '它如何帮助建立健康习惯？',
                answer:
                    '它降低记录门槛、提供更快反馈，让你更容易持续完成饮食、训练和恢复。',
            },
        ],
    },
    es: {
        metaTitle: 'App de entrenador fitness con IA | Feedback de entrenamiento y rutina saludable',
        metaDescription:
            'BodyCoach te ayuda a registrar comidas y entrenamientos, recibir feedback de entrenamiento con IA y construir una rutina saludable que sí puedas mantener.',
        metaKeywords: ['entrenador fitness con IA', 'feedback de entrenamiento', 'rutina saludable', 'registro de comidas', 'coach de fitness'],
        badge: 'Guías para búsqueda',
        title: 'Descubre cómo BodyCoach apoya el coaching con IA, el feedback de entrenamiento y las rutinas saludables',
        subtitle:
            'Estas páginas explican cómo BodyCoach convierte el registro de comidas, el seguimiento del ejercicio y los check-ins diarios en feedback útil y accionable.',
        faqTitle: 'Preguntas frecuentes',
        linkLabel: 'Leer guía',
        faq: [
            {
                question: '¿Qué hace realmente un entrenador fitness con IA?',
                answer:
                    'BodyCoach revisa las comidas y entrenamientos que registras y los convierte en recomendaciones prácticas que puedes aplicar el mismo día.',
            },
            {
                question: '¿Puede ayudarme con feedback de entrenamiento?',
                answer:
                    'Sí. No solo guarda tu historial, también te ayuda a revisar tu constancia, tus sesiones recientes y qué deberías ajustar después.',
            },
            {
                question: '¿Es solo para bajar de peso?',
                answer:
                    'No. También sirve para ganar músculo, mantener hábitos saludables o seguir una rutina más consistente según tu objetivo.',
            },
            {
                question: '¿Cómo me ayuda a construir una rutina saludable?',
                answer:
                    'Reduce la fricción al registrar, entrega feedback más rápido y facilita la constancia con comidas, entrenamientos y recuperación.',
            },
        ],
    },
};

const seoPages: Record<SeoPageSlug, Record<BaseSeoLocale, SeoLandingPageContent>> = {
    'ai-fitness-coach': {
        en: {
            badge: 'AI fitness coaching',
            title: 'What an AI fitness coach should actually help you do',
            description:
                'A useful AI fitness coach should do more than count calories. It should connect your meals, workouts, and daily habits so you can make better decisions quickly.',
            cardSummary: 'Understand how AI coaching can turn meal logs, workout tracking, and daily check-ins into practical guidance.',
            metaTitle: 'AI Fitness Coach App for Meal, Workout, and Routine Feedback',
            metaDescription:
                'See how BodyCoach works as an AI fitness coach for meal tracking, workout review, and daily routine support.',
            keywords: ['AI fitness coach', 'AI workout coach', 'meal and workout tracker', 'fitness coaching app'],
            benefits: [
                'Review meals and workouts in one place',
                'Get fast feedback you can actually follow',
                'Build consistency instead of relying on random plans',
            ],
            sections: [
                {
                    title: 'Why BodyCoach works well as an AI fitness coach',
                    body:
                        'BodyCoach is designed for people who want less guesswork. You log what you ate, what you trained, and how your routine is going. The app turns that into specific coaching feedback.',
                    bullets: [
                        'Track meals with photos or text',
                        'Log training and routine consistency',
                        'Get feedback that adapts to your goal',
                    ],
                },
                {
                    title: 'Who benefits most from AI coaching',
                    body:
                        'AI coaching is especially useful when you want quick accountability between workouts and meals without waiting for a human check-in.',
                    bullets: [
                        'Beginners who need clearer next steps',
                        'Busy people who want faster guidance',
                        'Users rebuilding healthy habits after a break',
                    ],
                },
            ],
            faq: [
                {
                    question: 'Can an AI fitness coach replace a personal trainer?',
                    answer:
                        'It does not replace hands-on coaching in every situation, but it can give daily feedback, accountability, and routine support between sessions.',
                },
                {
                    question: 'Is AI coaching useful if I already know how to train?',
                    answer:
                        'Yes. Many experienced users still need consistency, better meal review, and a faster way to check whether they are staying aligned with their goal.',
                },
                {
                    question: 'Does BodyCoach cover meals and workouts together?',
                    answer:
                        'Yes. That combination is what makes the feedback more practical because recovery, food choices, and training load affect each other.',
                },
            ],
        },
        ko: {
            badge: 'AI 피트니스 코칭',
            title: 'AI 피트니스 코치가 실제로 도와줘야 하는 것',
            description:
                '좋은 AI 피트니스 코치는 칼로리만 세는 도구가 아닙니다. 식단, 운동, 일상 습관을 함께 연결해 더 빠르게 올바른 선택을 할 수 있게 도와줘야 합니다.',
            cardSummary: 'AI 코칭이 식단 기록, 운동 추적, 일상 체크인을 어떻게 실질적인 가이드로 바꾸는지 확인해보세요.',
            metaTitle: 'AI 피트니스 코치 앱 | 식단, 운동, 루틴 피드백',
            metaDescription:
                'BodyCoach가 식단 기록, 운동 리뷰, 건강 루틴 관리에 어떻게 활용되는 AI 피트니스 코치 앱인지 살펴보세요.',
            keywords: ['AI 피트니스 코치', 'AI 운동 코치', '식단 운동 기록', '피트니스 코칭 앱'],
            benefits: [
                '식단과 운동을 한곳에서 함께 검토',
                '바로 적용할 수 있는 빠른 피드백',
                '임시 계획이 아닌 꾸준한 루틴 형성',
            ],
            sections: [
                {
                    title: 'BodyCoach가 AI 피트니스 코치로 잘 맞는 이유',
                    body:
                        'BodyCoach는 추측을 줄이고 싶은 사람을 위해 만들어졌습니다. 무엇을 먹었는지, 어떤 운동을 했는지, 루틴이 어떤 상태인지 기록하면 앱이 이를 코칭 피드백으로 바꿔줍니다.',
                    bullets: [
                        '사진이나 텍스트로 식단 기록',
                        '운동과 루틴의 꾸준함 추적',
                        '목표에 맞춰 달라지는 피드백 제공',
                    ],
                },
                {
                    title: 'AI 코칭이 특히 유용한 사람',
                    body:
                        '운동과 식단 사이에서 빠른 점검과 피드백이 필요한 사람에게 AI 코칭은 특히 유용합니다. 사람 코치의 체크인을 기다리지 않아도 됩니다.',
                    bullets: [
                        '다음 행동이 막막한 초보자',
                        '짧고 빠른 가이드가 필요한 바쁜 사용자',
                        '쉬다가 다시 건강 습관을 되찾는 사용자',
                    ],
                },
            ],
            faq: [
                {
                    question: 'AI 피트니스 코치가 PT를 완전히 대체하나요?',
                    answer:
                        '모든 상황에서 대체하는 것은 아니지만, 매일의 피드백과 책임감, 루틴 점검 측면에서는 매우 유용한 보조 역할을 합니다.',
                },
                {
                    question: '운동을 이미 잘 아는 사람에게도 도움이 되나요?',
                    answer:
                        '네. 경험이 있어도 꾸준함, 식단 점검, 목표와의 정렬 여부를 빠르게 확인하는 데 큰 도움이 됩니다.',
                },
                {
                    question: '식단과 운동을 함께 다루나요?',
                    answer:
                        '네. 회복, 음식 선택, 운동 강도는 서로 영향을 주기 때문에 함께 다뤄야 더 실용적인 피드백이 나옵니다.',
                },
            ],
        },
        ja: {
            badge: 'AIフィットネスコーチング',
            title: 'AIフィットネスコーチが本当に助けるべきこと',
            description:
                '役立つAIフィットネスコーチは、カロリーを数えるだけでは不十分です。食事、運動、日々の習慣をつなげて、より早く良い判断ができるようにする必要があります。',
            cardSummary: 'AIコーチングが食事記録、運動ログ、日々のチェックをどう実用的なガイドへ変えるかを確認できます。',
            metaTitle: 'AIフィットネスコーチアプリ | 食事・運動・習慣のフィードバック',
            metaDescription:
                'BodyCoachが食事記録、ワークアウトの見直し、健康習慣のサポートにどう使えるAIフィットネスコーチアプリかを紹介します。',
            keywords: ['AIフィットネスコーチ', 'AIワークアウトコーチ', '食事と運動の記録', 'フィットネスコーチングアプリ'],
            benefits: [
                '食事と運動を一か所で見直せる',
                'すぐ実行できるフィードバックを得られる',
                '場当たり的な計画ではなく継続を作れる',
            ],
            sections: [
                {
                    title: 'BodyCoachがAIフィットネスコーチとして合う理由',
                    body:
                        'BodyCoachは迷いを減らしたい人向けに作られています。食べたもの、行ったトレーニング、ルーティンの状況を記録すると、アプリがそれを具体的なコーチングへ変換します。',
                    bullets: [
                        '写真またはテキストで食事を記録',
                        'トレーニングと継続性を追跡',
                        '目標に応じて変わるフィードバック',
                    ],
                },
                {
                    title: 'AIコーチングが特に役立つ人',
                    body:
                        '運動と食事のあいだで、すばやい確認や後押しがほしい人にAIコーチングは向いています。人のコーチの連絡を待つ必要がありません。',
                    bullets: [
                        '次の一歩を明確にしたい初心者',
                        '短時間で助言を得たい忙しい人',
                        '休止後に健康習慣を取り戻したい人',
                    ],
                },
            ],
            faq: [
                {
                    question: 'AIフィットネスコーチはパーソナルトレーナーの代わりになりますか？',
                    answer:
                        'すべてを置き換えるわけではありませんが、日々のフィードバック、習慣化、セルフチェックには非常に役立ちます。',
                },
                {
                    question: 'すでにトレーニング知識があっても役立ちますか？',
                    answer:
                        'はい。経験者でも、継続、食事の確認、目標とのズレをすばやく見直す用途で十分に価値があります。',
                },
                {
                    question: '食事と運動を一緒に見てくれますか？',
                    answer:
                        'はい。回復、食事内容、運動負荷は互いに影響するため、まとめて見ることでより実用的なフィードバックになります。',
                },
            ],
        },
        zh: {
            badge: 'AI 健身教练',
            title: 'AI 健身教练真正应该帮你做什么',
            description:
                '一个有用的 AI 健身教练不应该只会计算卡路里。它应该把饮食、训练和日常习惯连接起来，让你更快做出更好的决定。',
            cardSummary: '了解 AI 教练如何把饮食记录、训练追踪和每日打卡转化为实际可执行的建议。',
            metaTitle: 'AI 健身教练应用 | 饮食、训练与习惯反馈',
            metaDescription:
                '查看 BodyCoach 如何作为 AI 健身教练，帮助你完成饮食记录、训练复盘和健康习惯支持。',
            keywords: ['AI 健身教练', 'AI 训练教练', '饮食和训练记录', '健身教练应用'],
            benefits: [
                '在同一个地方查看饮食和训练',
                '获得可以马上执行的反馈',
                '建立持续性而不是零散计划',
            ],
            sections: [
                {
                    title: '为什么 BodyCoach 适合作为 AI 健身教练',
                    body:
                        'BodyCoach 为想减少试错的人设计。你只需要记录吃了什么、练了什么、近期习惯如何，应用就会把这些信息变成具体反馈。',
                    bullets: [
                        '用照片或文字记录饮食',
                        '追踪训练和习惯连续性',
                        '根据目标提供不同反馈',
                    ],
                },
                {
                    title: '哪些人最适合 AI 教练',
                    body:
                        '如果你希望在每次饮食和训练之间获得更快的监督与提醒，而不是等待真人教练回复，AI 教练会很有价值。',
                    bullets: [
                        '需要明确下一步的新手',
                        '想更快获得指导的忙碌用户',
                        '重新建立健康习惯的人',
                    ],
                },
            ],
            faq: [
                {
                    question: 'AI 健身教练能完全替代私教吗？',
                    answer:
                        '并不能在所有场景下替代，但在日常反馈、监督和习惯维持方面，它是非常有价值的补充。',
                },
                {
                    question: '如果我已经懂训练，它还有用吗？',
                    answer:
                        '有用。即使是有经验的用户，也常常需要更高频的饮食回顾、习惯检查和目标对齐。',
                },
                {
                    question: '它会同时看饮食和训练吗？',
                    answer:
                        '会。恢复、饮食选择和训练负荷会互相影响，结合起来分析才能给出更有用的反馈。',
                },
            ],
        },
        es: {
            badge: 'Coaching fitness con IA',
            title: 'Lo que un entrenador fitness con IA realmente debería ayudarte a hacer',
            description:
                'Un entrenador fitness con IA útil debe hacer más que contar calorías. Debe conectar tus comidas, entrenamientos y hábitos diarios para ayudarte a decidir mejor y más rápido.',
            cardSummary: 'Entiende cómo el coaching con IA puede convertir tus registros de comidas y entrenamiento en orientación realmente útil.',
            metaTitle: 'App de entrenador fitness con IA | Feedback de comidas, entrenamiento y rutina',
            metaDescription:
                'Descubre cómo BodyCoach funciona como un entrenador fitness con IA para revisar comidas, entrenamientos y hábitos diarios.',
            keywords: ['entrenador fitness con IA', 'coach de entrenamiento con IA', 'registro de comidas y ejercicio', 'app de coaching fitness'],
            benefits: [
                'Revisar comidas y entrenamientos en un solo lugar',
                'Recibir feedback rápido que sí puedas aplicar',
                'Construir constancia en lugar de seguir planes aleatorios',
            ],
            sections: [
                {
                    title: 'Por qué BodyCoach funciona bien como entrenador fitness con IA',
                    body:
                        'BodyCoach está pensado para personas que quieren menos improvisación. Registras lo que comes, lo que entrenas y cómo va tu rutina, y la app lo convierte en feedback concreto.',
                    bullets: [
                        'Registrar comidas con fotos o texto',
                        'Seguir entrenamientos y constancia',
                        'Recibir feedback adaptado a tu objetivo',
                    ],
                },
                {
                    title: 'Quién aprovecha más el coaching con IA',
                    body:
                        'El coaching con IA es especialmente útil si quieres más acompañamiento entre entrenamientos y comidas sin esperar una revisión humana.',
                    bullets: [
                        'Principiantes que necesitan pasos claros',
                        'Personas ocupadas que quieren guía rápida',
                        'Usuarios que están reconstruyendo hábitos saludables',
                    ],
                },
            ],
            faq: [
                {
                    question: '¿Un entrenador fitness con IA puede sustituir a un entrenador personal?',
                    answer:
                        'No en todos los casos, pero sí puede aportar feedback diario, responsabilidad y apoyo constante entre sesiones.',
                },
                {
                    question: '¿Sirve aunque ya sepa entrenar?',
                    answer:
                        'Sí. Incluso usuarios con experiencia siguen necesitando constancia, revisión de comidas y una forma rápida de comprobar si van alineados con su meta.',
                },
                {
                    question: '¿BodyCoach revisa comidas y entrenamientos juntos?',
                    answer:
                        'Sí. Esa combinación hace que el feedback sea más útil porque la recuperación, la alimentación y la carga de entrenamiento están conectadas.',
                },
            ],
        },
    },
    'workout-feedback': {
        en: {
            badge: 'Workout feedback',
            title: 'Better workout feedback starts after you log the session',
            description:
                'Workout feedback is most useful when it helps you understand what to repeat, what to adjust, and how your training fits the rest of your routine.',
            cardSummary: 'See how logged workouts, habit tracking, and recovery context create more useful training feedback.',
            metaTitle: 'Workout Feedback App That Turns Logged Sessions Into Action',
            metaDescription:
                'Learn how BodyCoach gives workout feedback after you log training sessions, habits, and progress.',
            keywords: ['workout feedback', 'training feedback app', 'exercise feedback app', 'log workouts and review progress'],
            benefits: [
                'Turn workout logs into next-step guidance',
                'Track consistency instead of isolated sessions',
                'Connect training with meals and recovery',
            ],
            sections: [
                {
                    title: 'Why workout feedback matters',
                    body:
                        'A workout log is useful, but feedback is what helps you improve. BodyCoach looks at what you completed and helps you see whether your current pattern supports your goal.',
                    bullets: [
                        'Spot gaps in training consistency',
                        'Review recent progress without overthinking',
                        'Use your logged data to guide the next session',
                    ],
                },
                {
                    title: 'What strong feedback should include',
                    body:
                        'Good workout feedback should consider frequency, routine quality, and how your training aligns with sleep, recovery, and nutrition rather than only the workout itself.',
                    bullets: [
                        'Context around recovery and energy',
                        'A realistic next adjustment',
                        'A simple way to stay accountable',
                    ],
                },
            ],
            faq: [
                {
                    question: 'Is workout feedback only for advanced athletes?',
                    answer:
                        'No. Beginners often benefit even more because feedback helps them understand whether they are training often enough and what to improve next.',
                },
                {
                    question: 'Can BodyCoach help if my training is inconsistent?',
                    answer:
                        'Yes. One of the biggest benefits is seeing your pattern clearly and receiving feedback that helps you rebuild consistency.',
                },
                {
                    question: 'Does workout feedback work better with meal tracking too?',
                    answer:
                        'Usually yes. Training quality, recovery, and nutrition are connected, so feedback is stronger when those signals are reviewed together.',
                },
            ],
        },
        ko: {
            badge: '운동 피드백',
            title: '좋은 운동 피드백은 기록 이후부터 시작됩니다',
            description:
                '운동 피드백은 무엇을 계속하고, 무엇을 조정해야 하며, 현재 훈련이 전체 루틴과 어떻게 연결되는지를 알려줄 때 가장 유용합니다.',
            cardSummary: '운동 기록, 습관 추적, 회복 맥락이 어떻게 더 유용한 훈련 피드백을 만드는지 확인해보세요.',
            metaTitle: '운동 피드백 앱 | 기록한 운동을 다음 행동으로 연결',
            metaDescription:
                'BodyCoach가 기록된 운동, 습관, 진행 상황을 바탕으로 어떻게 실질적인 운동 피드백을 제공하는지 알아보세요.',
            keywords: ['운동 피드백', '트레이닝 피드백 앱', '운동 기록 앱', 'AI 운동 분석'],
            benefits: [
                '운동 로그를 다음 행동으로 연결',
                '하루치가 아닌 꾸준함을 추적',
                '운동, 식단, 회복을 함께 연결',
            ],
            sections: [
                {
                    title: '운동 피드백이 중요한 이유',
                    body:
                        '운동 기록만으로도 의미는 있지만, 개선을 만드는 것은 피드백입니다. BodyCoach는 사용자가 완료한 운동을 보고 현재 패턴이 목표와 맞는지 판단할 수 있게 돕습니다.',
                    bullets: [
                        '운동 꾸준함의 빈틈 파악',
                        '복잡하지 않게 최근 진행 상황 검토',
                        '기록된 데이터를 다음 운동에 반영',
                    ],
                },
                {
                    title: '좋은 운동 피드백이 포함해야 할 것',
                    body:
                        '좋은 운동 피드백은 운동 한 번만 보는 것이 아니라 빈도, 루틴의 질, 수면, 회복, 영양과의 연결까지 함께 고려해야 합니다.',
                    bullets: [
                        '회복과 에너지 상태에 대한 맥락',
                        '현실적인 다음 조정 포인트',
                        '지속적인 책임감을 유지하는 방식',
                    ],
                },
            ],
            faq: [
                {
                    question: '운동 피드백은 상급자에게만 필요한가요?',
                    answer:
                        '아닙니다. 초보자일수록 얼마나 자주 운동해야 하는지, 다음에 무엇을 개선해야 하는지 파악하는 데 큰 도움이 됩니다.',
                },
                {
                    question: '운동이 들쑥날쑥해도 도움이 되나요?',
                    answer:
                        '네. 오히려 흐름을 명확히 보여주고, 다시 꾸준함을 회복하도록 도와주는 점이 큰 장점입니다.',
                },
                {
                    question: '식단 기록까지 함께 하면 더 좋나요?',
                    answer:
                        '대체로 그렇습니다. 훈련의 질, 회복, 영양은 서로 연결되어 있어서 함께 볼수록 피드백이 더 강해집니다.',
                },
            ],
        },
        ja: {
            badge: 'ワークアウトのフィードバック',
            title: 'より良いワークアウトのフィードバックは、記録した後に始まる',
            description:
                '運動のフィードバックは、何を続けるべきか、何を調整するべきか、そして今のトレーニングが日々の習慣にどうつながっているかを示してくれる時に最も役立ちます。',
            cardSummary: 'ワークアウトの記録、習慣の追跡、回復の文脈がどう有用なフィードバックを生むかを確認できます。',
            metaTitle: 'ワークアウトのフィードバックアプリ | 記録した運動を次の行動へ',
            metaDescription:
                'BodyCoachが記録したトレーニング、習慣、進捗をもとにどう運動フィードバックを返すのかを紹介します。',
            keywords: ['ワークアウト フィードバック', 'トレーニング フィードバック', '運動記録 アプリ', 'AI トレーニング分析'],
            benefits: [
                'ワークアウト記録を次の行動へ変える',
                '単発ではなく継続性を追跡する',
                'トレーニングと食事と回復をつなげる',
            ],
            sections: [
                {
                    title: 'なぜワークアウトのフィードバックが重要か',
                    body:
                        '記録だけでも価値はありますが、改善を生むのはフィードバックです。BodyCoachは完了した内容を見て、今のパターンが目標に合っているかを分かりやすくします。',
                    bullets: [
                        '継続性の不足を見つける',
                        '直近の進捗をシンプルに振り返る',
                        '記録データを次回の運動へつなげる',
                    ],
                },
                {
                    title: '良いフィードバックに必要な要素',
                    body:
                        '良いワークアウトのフィードバックは運動単体だけでなく、頻度、ルーティンの質、睡眠、回復、栄養とのつながりまで考える必要があります。',
                    bullets: [
                        '回復とエネルギーの文脈',
                        '現実的な次の調整点',
                        '継続を支えるシンプルな仕組み',
                    ],
                },
            ],
            faq: [
                {
                    question: '運動フィードバックは上級者向けですか？',
                    answer:
                        'いいえ。初心者ほど、十分な頻度で運動できているか、次に何を改善するべきかを理解するのに役立ちます。',
                },
                {
                    question: 'トレーニングが不安定でも役立ちますか？',
                    answer:
                        'はい。自分のパターンを可視化し、再び継続性を作るための後押しになる点が大きな利点です。',
                },
                {
                    question: '食事記録も合わせると効果的ですか？',
                    answer:
                        '多くの場合そうです。トレーニングの質、回復、栄養はつながっているため、一緒に見る方がフィードバックは強くなります。',
                },
            ],
        },
        zh: {
            badge: '运动反馈',
            title: '更好的运动反馈，始于你完成记录之后',
            description:
                '当运动反馈能够告诉你什么该继续、什么该调整，以及训练如何融入整体生活习惯时，它才真正有价值。',
            cardSummary: '看看训练记录、习惯追踪和恢复背景如何带来更有用的运动反馈。',
            metaTitle: '运动反馈应用 | 把训练记录变成下一步行动',
            metaDescription:
                '了解 BodyCoach 如何在你记录训练、习惯和进展后提供更实用的运动反馈。',
            keywords: ['运动反馈', '训练反馈应用', '运动记录应用', 'AI 训练分析'],
            benefits: [
                '把训练日志转化为下一步建议',
                '追踪持续性而不是单次训练',
                '把训练与饮食和恢复结合起来',
            ],
            sections: [
                {
                    title: '为什么运动反馈很重要',
                    body:
                        '记录训练当然有价值，但真正推动进步的是反馈。BodyCoach 会结合你完成的内容，帮助你判断现在的训练模式是否支持目标。',
                    bullets: [
                        '发现训练持续性上的缺口',
                        '更轻松地回顾近期进展',
                        '用记录数据指导下一次训练',
                    ],
                },
                {
                    title: '好的反馈应该包含什么',
                    body:
                        '好的运动反馈不只看某一堂训练，而是同时考虑频率、训练质量，以及它和睡眠、恢复、营养之间的关系。',
                    bullets: [
                        '恢复和精力状态的背景',
                        '现实可行的下一步调整',
                        '更容易坚持的监督方式',
                    ],
                },
            ],
            faq: [
                {
                    question: '运动反馈只适合高级训练者吗？',
                    answer:
                        '不是。新手往往更需要反馈来理解自己练得够不够、下一步最该改进什么。',
                },
                {
                    question: '如果我的训练不稳定，它还能帮到我吗？',
                    answer:
                        '可以。它最大的价值之一就是让你更清楚地看到自己的模式，并帮助你重新建立稳定性。',
                },
                {
                    question: '如果同时记录饮食，反馈会更好吗？',
                    answer:
                        '通常会更好。训练质量、恢复和营养彼此相关，一起看会让反馈更完整。',
                },
            ],
        },
        es: {
            badge: 'Feedback de entrenamiento',
            title: 'El mejor feedback de entrenamiento empieza después de registrar la sesión',
            description:
                'El feedback de entrenamiento es más útil cuando te ayuda a entender qué repetir, qué ajustar y cómo encaja tu entrenamiento con el resto de tu rutina.',
            cardSummary: 'Descubre cómo los entrenamientos registrados, los hábitos y la recuperación generan un feedback más útil.',
            metaTitle: 'App de feedback de entrenamiento | Convierte tus sesiones registradas en acción',
            metaDescription:
                'Aprende cómo BodyCoach entrega feedback de entrenamiento a partir de tus sesiones registradas, hábitos y progreso.',
            keywords: ['feedback de entrenamiento', 'app de feedback de ejercicio', 'registro de entrenamientos', 'análisis de entrenamiento con IA'],
            benefits: [
                'Convertir registros de entrenamiento en siguientes pasos',
                'Seguir la constancia y no solo sesiones aisladas',
                'Conectar entrenamiento con comida y recuperación',
            ],
            sections: [
                {
                    title: 'Por qué importa el feedback de entrenamiento',
                    body:
                        'Registrar tus sesiones sirve, pero lo que realmente ayuda a mejorar es el feedback. BodyCoach revisa lo que completaste y te ayuda a ver si tu patrón actual apoya tu meta.',
                    bullets: [
                        'Detectar huecos en tu constancia',
                        'Revisar tu progreso reciente sin complicarte',
                        'Usar tus registros para planear la siguiente sesión',
                    ],
                },
                {
                    title: 'Qué debería incluir un buen feedback',
                    body:
                        'El buen feedback no mira solo una sesión. También considera frecuencia, calidad de la rutina y cómo se relaciona con sueño, recuperación y nutrición.',
                    bullets: [
                        'Contexto sobre recuperación y energía',
                        'Un ajuste siguiente realista',
                        'Una forma simple de mantenerte responsable',
                    ],
                },
            ],
            faq: [
                {
                    question: '¿El feedback de entrenamiento es solo para atletas avanzados?',
                    answer:
                        'No. Las personas que empiezan suelen beneficiarse incluso más porque entienden mejor si están entrenando con suficiente frecuencia y qué deben mejorar.',
                },
                {
                    question: '¿BodyCoach me sirve si entreno de forma inconsistente?',
                    answer:
                        'Sí. Uno de sus mayores beneficios es ayudarte a ver tu patrón con claridad y reconstruir constancia paso a paso.',
                },
                {
                    question: '¿El feedback mejora si también registro mis comidas?',
                    answer:
                        'Normalmente sí. La calidad del entrenamiento, la recuperación y la nutrición están conectadas, así que revisar esas señales juntas es mejor.',
                },
            ],
        },
    },
    'healthy-routine': {
        en: {
            badge: 'Healthy routines',
            title: 'A healthy routine is easier to keep when feedback is built in',
            description:
                'Healthy routines usually fail because they are too hard to maintain. BodyCoach helps by making logging easier and feedback faster, so your routine becomes easier to repeat.',
            cardSummary: 'Learn how BodyCoach supports healthy routines through simpler tracking, better accountability, and faster feedback.',
            metaTitle: 'Healthy Routine App for Consistent Meals, Exercise, and Habit Tracking',
            metaDescription:
                'See how BodyCoach helps you build a healthy routine with meal tracking, exercise logging, and AI feedback.',
            keywords: ['healthy routine app', 'habit building app', 'meal and exercise routine', 'AI health routine coach'],
            benefits: [
                'Make meal and exercise tracking easier to repeat',
                'Get accountability without overcomplicating the process',
                'Keep your routine connected to real daily behavior',
            ],
            sections: [
                {
                    title: 'Why routines break down',
                    body:
                        'Most routines fail when the system is too demanding. If logging takes too long or feedback arrives too late, consistency drops. BodyCoach helps reduce that friction.',
                    bullets: [
                        'Lower effort to record meals and workouts',
                        'Faster feedback after each check-in',
                        'A clearer view of what is realistic for your week',
                    ],
                },
                {
                    title: 'What makes a routine sustainable',
                    body:
                        'A sustainable routine is not just strict. It is clear, repeatable, and connected to your everyday schedule. The more useful the feedback loop is, the easier it is to continue.',
                    bullets: [
                        'Small actions you can repeat daily',
                        'A routine that matches your real schedule',
                        'Simple feedback that helps you stay on track',
                    ],
                },
            ],
            faq: [
                {
                    question: 'Can BodyCoach help if I keep restarting my routine?',
                    answer:
                        'Yes. It is useful for rebuilding momentum because it focuses on easier logging, faster feedback, and realistic next actions.',
                },
                {
                    question: 'Do I need to track everything perfectly?',
                    answer:
                        'No. The goal is not perfect data. The goal is enough consistent information to spot patterns and make better decisions.',
                },
                {
                    question: 'Does a healthy routine include both meals and exercise?',
                    answer:
                        'Usually yes. The strongest routines connect food, movement, and recovery instead of treating them as separate habits.',
                },
            ],
        },
        ko: {
            badge: '건강 루틴',
            title: '피드백이 내장되면 건강 루틴은 훨씬 오래 유지됩니다',
            description:
                '건강 루틴이 무너지는 가장 큰 이유는 유지하기 어렵기 때문입니다. BodyCoach는 기록을 더 쉽게 만들고 피드백을 더 빠르게 제공해 루틴을 반복하기 쉬운 형태로 바꿉니다.',
            cardSummary: '더 쉬운 기록, 더 나은 책임감, 더 빠른 피드백으로 건강 루틴을 만드는 방법을 알아보세요.',
            metaTitle: '건강 루틴 앱 | 식단, 운동, 습관을 꾸준히 관리',
            metaDescription:
                'BodyCoach가 식단 기록, 운동 로그, AI 피드백을 통해 어떻게 건강 루틴 형성을 돕는지 확인해보세요.',
            keywords: ['건강 루틴', '습관 형성 앱', '식단 운동 루틴', 'AI 건강 루틴 코치'],
            benefits: [
                '식단과 운동 기록을 더 쉽게 반복',
                '과한 관리 없이도 책임감을 유지',
                '실제 일상과 연결된 루틴 구축',
            ],
            sections: [
                {
                    title: '루틴이 무너지는 이유',
                    body:
                        '대부분의 루틴은 시스템이 너무 버거울 때 무너집니다. 기록이 오래 걸리거나 피드백이 늦으면 꾸준함이 떨어집니다. BodyCoach는 그 마찰을 줄이는 데 초점을 맞춥니다.',
                    bullets: [
                        '식단과 운동 기록의 부담 감소',
                        '체크인 후 더 빠른 피드백 제공',
                        '내 주간 일정에 맞는 현실적 루틴 파악',
                    ],
                },
                {
                    title: '지속 가능한 루틴의 조건',
                    body:
                        '지속 가능한 루틴은 단지 엄격한 루틴이 아닙니다. 반복 가능하고, 이해하기 쉽고, 실제 일상과 연결되어 있어야 합니다. 피드백 루프가 유용할수록 계속 이어가기 쉬워집니다.',
                    bullets: [
                        '매일 반복 가능한 작은 행동',
                        '실제 스케줄에 맞는 루틴',
                        '방향을 잡아주는 간단한 피드백',
                    ],
                },
            ],
            faq: [
                {
                    question: '항상 루틴을 다시 시작하게 되는데 도움될까요?',
                    answer:
                        '네. BodyCoach는 기록 부담을 줄이고 다음 행동을 명확하게 보여줘서 다시 흐름을 만드는 데 특히 도움이 됩니다.',
                },
                {
                    question: '모든 것을 완벽하게 기록해야 하나요?',
                    answer:
                        '아닙니다. 목표는 완벽한 데이터가 아니라, 패턴을 볼 수 있을 만큼 꾸준한 정보를 쌓는 것입니다.',
                },
                {
                    question: '건강 루틴에는 식단과 운동이 모두 포함돼야 하나요?',
                    answer:
                        '대부분 그렇습니다. 식사, 움직임, 회복을 따로 보지 않고 함께 연결할 때 더 강한 루틴이 만들어집니다.',
                },
            ],
        },
        ja: {
            badge: '健康ルーティン',
            title: 'フィードバックが組み込まれると、健康習慣は続けやすくなる',
            description:
                '健康習慣が続かない大きな理由は、維持が難しいからです。BodyCoachは記録を簡単にし、フィードバックを早く返すことで、ルーティンを繰り返しやすくします。',
            cardSummary: 'より簡単な記録、より良い継続支援、より早いフィードバックで健康習慣を支える方法を紹介します。',
            metaTitle: '健康ルーティンアプリ | 食事・運動・習慣を継続しやすくする',
            metaDescription:
                'BodyCoachが食事記録、運動ログ、AIフィードバックで健康ルーティンづくりをどう支えるかを見てみましょう。',
            keywords: ['健康ルーティン アプリ', '習慣化 アプリ', '食事と運動の習慣', 'AI ヘルスコーチ'],
            benefits: [
                '食事と運動の記録を続けやすくする',
                '過剰に複雑化せず継続を支える',
                '日常の行動に結びついたルーティンを作る',
            ],
            sections: [
                {
                    title: 'ルーティンが崩れる理由',
                    body:
                        '多くのルーティンは仕組みが重すぎると崩れます。記録に時間がかかり、フィードバックが遅いと、継続しにくくなります。BodyCoachはその摩擦を減らします。',
                    bullets: [
                        '食事と運動の記録負担を下げる',
                        'チェック後すぐにフィードバックを得る',
                        '自分の週に現実的な流れを見つける',
                    ],
                },
                {
                    title: '続けやすいルーティンの条件',
                    body:
                        '持続可能なルーティンは厳しいだけではありません。分かりやすく、繰り返しやすく、日常の予定に合っていることが重要です。フィードバックが役立つほど続けやすくなります。',
                    bullets: [
                        '毎日繰り返せる小さな行動',
                        '現実のスケジュールに合う設計',
                        '軌道修正しやすいシンプルなフィードバック',
                    ],
                },
            ],
            faq: [
                {
                    question: '何度もルーティンをやり直してしまいます。役立ちますか？',
                    answer:
                        'はい。記録の負担を減らし、次の行動を分かりやすく示すため、勢いを取り戻すのに向いています。',
                },
                {
                    question: 'すべてを完璧に記録する必要がありますか？',
                    answer:
                        'いいえ。完璧なデータよりも、パターンを見つけられる程度の継続した記録の方が重要です。',
                },
                {
                    question: '健康ルーティンには食事と運動の両方が必要ですか？',
                    answer:
                        '多くの場合そうです。食事、運動、回復を別々ではなく一つの流れとして見る方が、より強い習慣になります。',
                },
            ],
        },
        zh: {
            badge: '健康习惯',
            title: '当反馈被纳入系统，健康习惯就更容易坚持',
            description:
                '健康习惯之所以常常失败，通常不是因为目标不够好，而是因为太难维持。BodyCoach 让记录更轻松、反馈更及时，因此更容易持续。',
            cardSummary: '了解 BodyCoach 如何通过更简单的记录、更强的监督和更快的反馈来支持健康习惯。',
            metaTitle: '健康习惯应用 | 持续记录饮食、训练与日常习惯',
            metaDescription:
                '看看 BodyCoach 如何通过饮食记录、运动日志和 AI 反馈帮助你建立可持续的健康习惯。',
            keywords: ['健康习惯 应用', '习惯养成 应用', '饮食与运动习惯', 'AI 健康教练'],
            benefits: [
                '让饮食和训练记录更容易坚持',
                '不用复杂流程也能保持监督',
                '建立和真实生活相连的习惯',
            ],
            sections: [
                {
                    title: '为什么习惯会中断',
                    body:
                        '大多数习惯之所以中断，是因为系统本身太难执行。如果记录太耗时、反馈太慢，持续性就会下降。BodyCoach 的作用就是降低这种摩擦。',
                    bullets: [
                        '减少记录饮食和训练的负担',
                        '每次打卡后更快得到反馈',
                        '更清楚地看到一周内真正可持续的节奏',
                    ],
                },
                {
                    title: '什么样的习惯更容易长期坚持',
                    body:
                        '可持续的习惯不只是严格，而是清晰、可重复，并且适合你的日常安排。反馈回路越实用，就越容易继续下去。',
                    bullets: [
                        '每天都能重复的小动作',
                        '适合真实日程的安排',
                        '帮助你保持方向的简单反馈',
                    ],
                },
            ],
            faq: [
                {
                    question: '如果我总是重新开始，BodyCoach 有帮助吗？',
                    answer:
                        '有。它特别适合帮助你重新建立节奏，因为它降低记录门槛，并把下一步行动说得更清楚。',
                },
                {
                    question: '我需要把所有事情都记录得很完美吗？',
                    answer:
                        '不需要。重点不是完美数据，而是足够稳定的信息，让你能看到自己的模式并做出更好的选择。',
                },
                {
                    question: '健康习惯必须同时包含饮食和运动吗？',
                    answer:
                        '通常是的。把饮食、运动和恢复放在一起看，而不是拆成彼此独立的习惯，效果会更好。',
                },
            ],
        },
        es: {
            badge: 'Rutina saludable',
            title: 'Una rutina saludable es más fácil de mantener cuando el feedback está integrado',
            description:
                'Las rutinas saludables suelen fallar porque son difíciles de sostener. BodyCoach facilita el registro y acelera el feedback para que tu rutina sea más fácil de repetir.',
            cardSummary: 'Conoce cómo BodyCoach apoya rutinas saludables con seguimiento simple, mejor responsabilidad y feedback más rápido.',
            metaTitle: 'App de rutina saludable | Seguimiento constante de comidas, ejercicio y hábitos',
            metaDescription:
                'Descubre cómo BodyCoach te ayuda a construir una rutina saludable con registro de comidas, ejercicio y feedback con IA.',
            keywords: ['rutina saludable app', 'app para hábitos saludables', 'rutina de comida y ejercicio', 'coach de salud con IA'],
            benefits: [
                'Hacer más fácil repetir el registro de comidas y ejercicio',
                'Mantener responsabilidad sin complicar el proceso',
                'Conectar tu rutina con tu comportamiento diario real',
            ],
            sections: [
                {
                    title: 'Por qué las rutinas se rompen',
                    body:
                        'La mayoría de las rutinas fallan cuando el sistema exige demasiado. Si registrar lleva mucho tiempo o el feedback llega tarde, la constancia cae. BodyCoach ayuda a reducir esa fricción.',
                    bullets: [
                        'Menor esfuerzo para registrar comidas y ejercicio',
                        'Feedback más rápido después de cada check-in',
                        'Una visión más clara de lo que sí es realista en tu semana',
                    ],
                },
                {
                    title: 'Qué hace sostenible a una rutina',
                    body:
                        'Una rutina sostenible no solo es estricta. También es clara, repetible y compatible con tu agenda diaria. Cuanto más útil sea el circuito de feedback, más fácil será continuar.',
                    bullets: [
                        'Acciones pequeñas que puedes repetir cada día',
                        'Una rutina que sí encaja en tu horario real',
                        'Feedback simple para mantener el rumbo',
                    ],
                },
            ],
            faq: [
                {
                    question: '¿BodyCoach puede ayudarme si siempre vuelvo a empezar?',
                    answer:
                        'Sí. Es especialmente útil para recuperar impulso porque reduce la fricción al registrar y aclara cuál es el siguiente paso realista.',
                },
                {
                    question: '¿Necesito registrar todo de forma perfecta?',
                    answer:
                        'No. El objetivo no es tener datos perfectos, sino información constante suficiente para detectar patrones y decidir mejor.',
                },
                {
                    question: '¿Una rutina saludable incluye comida y ejercicio?',
                    answer:
                        'Normalmente sí. Las mejores rutinas conectan alimentación, movimiento y recuperación en lugar de tratarlos como hábitos separados.',
                },
            ],
        },
    },
};

function resolveSeoLocale(locale: Locale): BaseSeoLocale {
    if (locale === 'es-MX') {
        return 'es';
    }

    return locale as BaseSeoLocale;
}

export function getSeoHomeContent(locale: Locale): SeoHomeContent {
    return seoHomeContent[resolveSeoLocale(locale)];
}

export function getSeoLandingPage(locale: Locale, slug: SeoPageSlug): SeoLandingPageContent {
    return seoPages[slug][resolveSeoLocale(locale)];
}

export function getSeoLandingPreviews(locale: Locale): SeoLandingPreview[] {
    return seoLandingSlugs.map((slug) => {
        const page = getSeoLandingPage(locale, slug);

        return {
            slug,
            eyebrow: page.badge,
            title: page.title,
            description: page.cardSummary,
        };
    });
}

export function getSeoPageContent(slug: SeoPageSlug, locale: Locale): SeoPageContent {
    const page = getSeoLandingPage(locale, slug);
    const ui = seoUiCopy[resolveSeoLocale(locale)];
    const related = getSeoLandingPreviews(locale).filter((item) => item.slug !== slug);

    return {
        badge: page.badge,
        title: page.title,
        description: page.description,
        summary: page.cardSummary,
        highlights: page.benefits.map((benefit, index) => ({
            label: ui.metricLabels[index] ?? ui.metricLabels[ui.metricLabels.length - 1],
            value: benefit,
            detail: page.sections[index % page.sections.length]?.bullets[0] ?? benefit,
        })),
        sections: page.sections,
        faqs: page.faq,
        related,
        cta: {
            primary: ui.ctaPrimary,
            secondary: ui.ctaSecondary,
            note: ui.ctaNote,
        },
        ui: {
            surfaceKicker: ui.surfaceKicker,
            surfaceTitle: ui.surfaceTitle,
            surfaceDescription: ui.surfaceDescription,
            faqKicker: ui.faqKicker,
            faqTitle: ui.faqTitle,
            relatedKicker: ui.relatedKicker,
            relatedTitle: ui.relatedTitle,
            relatedDescription: ui.relatedDescription,
            panelLabel: ui.panelLabel,
        },
    };
}

export function getSeoHomeSectionContent(locale: Locale) {
    const home = getSeoHomeContent(locale);

    return {
        badge: home.badge,
        title: home.title,
        subtitle: home.subtitle,
        faqTitle: home.faqTitle,
        linkLabel: home.linkLabel,
        faq: home.faq,
        previews: getSeoLandingPreviews(locale),
    };
}
