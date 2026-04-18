import { getLocalizedUrl } from '@/lib/site';
import { blogPostsGroupA } from '@/lib/blog/posts/group-a';
import { blogPostsGroupB } from '@/lib/blog/posts/group-b';
import { blogPostsGroupC } from '@/lib/blog/posts/group-c';

export const blogLocales = ['en', 'ko', 'ja'] as const;
export type BlogLocale = (typeof blogLocales)[number];

export type BlogPostSlug = string;

export type BlogFaq = {
    question: string;
    answer: string;
};

type BlogSection = {
    title: string;
    paragraphs: string[];
    bullets?: string[];
};

type BlogPostTranslation = {
    category: string;
    kicker: string;
    title: string;
    description: string;
    excerpt: string;
    heroNote: string;
    audienceTitle: string;
    audience: string[];
    highlights: Array<{
        label: string;
        value: string;
        detail: string;
    }>;
    sections: BlogSection[];
    faqTitle: string;
    faq: BlogFaq[];
    ctaTitle: string;
    ctaCopy: string;
};

export type BlogIndexCopy = {
    badge: string;
    title: string;
    description: string;
    heroTitle: string;
    heroSubtitle: string;
    featuredLabel: string;
    latestLabel: string;
    clusterTitle: string;
    emptyTitle: string;
    emptyCopy: string;
    blogLabel: string;
    readArticle: string;
    starterKitTitle: string;
    starterKitCopy: string;
    starterKitBullets: string[];
    backToBlog: string;
    relatedReading: string;
    downloadCta: string;
    editorialTeam: string;
};

export type BlogPostDefinition = {
    slug: BlogPostSlug;
    pillar: 'ai-fitness-coach' | 'workout-feedback' | 'healthy-routine';
    cover: '/landing-coach.PNG' | '/landing-next-feedback.PNG' | '/landing-report.PNG' | '/landing-chat.PNG';
    publishedAt: string;
    readingTime: string;
    keywords: Record<BlogLocale, string[]>;
    related: BlogPostSlug[];
    translations: Record<BlogLocale, BlogPostTranslation>;
};

export type BlogPost = {
    slug: BlogPostSlug;
    pillar: BlogPostDefinition['pillar'];
    cover: BlogPostDefinition['cover'];
    publishedAt: string;
    readingTime: string;
    keywords: string[];
    related: BlogPostSlug[];
    category: string;
    kicker: string;
    title: string;
    description: string;
    excerpt: string;
    heroNote: string;
    audienceTitle: string;
    audience: string[];
    highlights: BlogPostTranslation['highlights'];
    sections: BlogSection[];
    faqTitle: string;
    faq: BlogFaq[];
    ctaTitle: string;
    ctaCopy: string;
};

const blogIndexCopy: Record<BlogLocale, BlogIndexCopy> = {
    en: {
        badge: 'Search-ready blog',
        title: 'BodyCoach blog articles built around real health questions',
        description:
            'These posts support our core SEO pages with narrower search intent: meal feedback, workout recovery, weight-loss troubleshooting, and habit building for busy schedules.',
        heroTitle: 'Our Blog',
        heroSubtitle: 'Simple guides on meal feedback, workout recovery, and healthy routines.',
        featuredLabel: 'Featured',
        latestLabel: 'Latest articles',
        clusterTitle: 'Cluster articles',
        emptyTitle: 'No articles yet',
        emptyCopy: 'Starter articles will appear here as soon as the first cluster pages are published.',
        blogLabel: 'Blog',
        readArticle: 'Read article',
        starterKitTitle: 'What this blog will be used for',
        starterKitCopy:
            'We are building this section to win narrower searches that sit one step below our main BodyCoach landing pages.',
        starterKitBullets: [
            'Answer one search intent per article instead of covering five ideas at once.',
            'Connect every article back to product moments like meal feedback, next-meal suggestions, and workout recovery.',
            'Use related posts and existing SEO landing pages to build internal linking depth.',
        ],
        backToBlog: 'Back to blog',
        relatedReading: 'Related reading',
        downloadCta: 'Download BodyCoach',
        editorialTeam: 'BodyCoach Editorial Team',
    },
    ko: {
        badge: '검색 대응 블로그',
        title: '실제 건강 질문을 기준으로 만든 BodyCoach 블로그',
        description:
            '이 글들은 핵심 SEO 페이지보다 더 좁은 검색 의도를 받습니다. 식사 피드백, 운동 후 회복, 체중 감량 정체, 바쁜 일상 루틴 같은 질문을 직접 다룹니다.',
        heroTitle: '블로그',
        heroSubtitle: '식사 피드백, 운동 후 회복, 건강한 루틴에 대한 실전 가이드.',
        featuredLabel: '추천 글',
        latestLabel: '최신 글',
        clusterTitle: '클러스터 글',
        emptyTitle: '아직 게시된 글이 없습니다',
        emptyCopy: '첫 번째 cluster 글이 발행되면 이 영역이 채워집니다.',
        blogLabel: '블로그',
        readArticle: '글 읽기',
        starterKitTitle: '이 블로그의 역할',
        starterKitCopy:
            '이 섹션은 메인 랜딩보다 더 구체적인 검색어를 받기 위해 만듭니다.',
        starterKitBullets: [
            '글 하나마다 검색 의도 하나만 잡습니다.',
            '모든 글은 식사 피드백, 다음 식단 추천, 운동 후 회복 같은 제품 순간으로 다시 연결합니다.',
            '관련 글과 기존 SEO 랜딩을 함께 묶어 내부 링크 깊이를 키웁니다.',
        ],
        backToBlog: '블로그로 돌아가기',
        relatedReading: '관련 글',
        downloadCta: 'BodyCoach 다운로드',
        editorialTeam: 'BodyCoach 에디토리얼 팀',
    },
    ja: {
        badge: '検索対応ブログ',
        title: '実際の悩みを起点にしたBodyCoachブログ',
        description:
            'このブログは主要SEOページより一段細かい検索意図を受けます。食事フィードバック、運動後の回復、減量停滞、忙しい人の習慣作りを直接扱います。',
        heroTitle: 'ブログ',
        heroSubtitle: '食事フィードバック、運動後の回復、健康習慣づくりの実践ガイド。',
        featuredLabel: '注目記事',
        latestLabel: '最新記事',
        clusterTitle: 'クラスタ記事',
        emptyTitle: 'まだ記事がありません',
        emptyCopy: '最初のクラスター記事が公開されると、ここに表示されます。',
        blogLabel: 'ブログ',
        readArticle: '記事を読む',
        starterKitTitle: 'このブログの役割',
        starterKitCopy:
            'このセクションは、メインのランディングページより具体的な検索を取りにいくために作ります。',
        starterKitBullets: [
            '1記事につき1つの検索意図だけを扱います。',
            'すべての記事を食事フィードバック、次の食事提案、運動後の回復といったプロダクト体験に戻します。',
            '関連記事と既存SEOページをつないで内部リンクの厚みを作ります。',
        ],
        backToBlog: 'ブログに戻る',
        relatedReading: '関連記事',
        downloadCta: 'BodyCoachをダウンロード',
        editorialTeam: 'BodyCoach 編集チーム',
    },
};

const baseBlogPosts: BlogPostDefinition[] = [
    {
        slug: 'ai-meal-feedback-guide',
        pillar: 'ai-fitness-coach',
        cover: '/landing-coach.PNG',
        publishedAt: '2026-04-18',
        readingTime: '6 min read',
        keywords: {
            en: ['ai meal feedback', 'meal feedback app', 'food photo logging', 'ai fitness coach'],
            ko: ['AI 식사 피드백', '식사 피드백 앱', '식단 사진 기록', 'AI 피트니스 코치'],
            ja: ['AI食事フィードバック', '食事フィードバックアプリ', '食事写真記録', 'AIフィットネスコーチ'],
        },
        related: ['what-to-eat-after-a-workout', 'why-youre-not-losing-weight-even-if-you-log-meals'],
        translations: {
            en: {
                category: 'Meal feedback',
                kicker: 'AI coaching',
                title: 'How AI Meal Feedback Makes Food Tracking More Useful',
                description:
                    'Logging meals is only half the job. This guide explains how AI meal feedback helps you understand what to change next and why that matters for consistency.',
                excerpt:
                    'Food tracking becomes more useful when it tells you what to adjust after each meal, not just what you ate.',
                heroNote:
                    'The strongest nutrition apps do not stop at logging. They explain what the meal means for the rest of your day.',
                audienceTitle: 'This article is for you if',
                audience: [
                    'You already log meals but still feel unsure what to change next.',
                    'You want feedback that fits real meals, not just perfect meal prep.',
                    'You are trying to build consistency instead of restarting every week.',
                ],
                highlights: [
                    { label: 'Use case', value: 'After each meal', detail: 'Best used right after logging so the next action stays obvious.' },
                    { label: 'Focus', value: 'What to change next', detail: 'Good feedback points to the next meal, not just the meal you finished.' },
                    { label: 'BodyCoach fit', value: 'Photo + coach response', detail: 'Logging and interpretation happen in one flow.' },
                ],
                sections: [
                    {
                        title: 'Meal logs become weak when they stay descriptive',
                        paragraphs: [
                            'Many food logs are accurate enough to count calories or macros, but they still leave the user doing the hard part alone. You see protein, carbs, and fat, but you still have to decide what to eat next, what to reduce, and whether the meal actually matched your goal.',
                            'That gap matters. People rarely stop tracking because logging is technically impossible. They stop because the log does not create a clear next step. If the app only describes the meal, the user still has to interpret the meaning.',
                        ],
                    },
                    {
                        title: 'Good AI meal feedback should answer three practical questions',
                        paragraphs: [
                            'The best feedback is not vague motivation. It should tell you what the meal did well, what it may have pushed off target, and what the next meal should compensate for.',
                            'That kind of response is more useful than generic calorie totals because it turns one isolated log into a full-day decision.',
                        ],
                        bullets: [
                            'Did this meal support the goal I said I care about?',
                            'What is the biggest nutrition tradeoff in this meal?',
                            'What should the next meal look like if I want the day to stay on plan?',
                        ],
                    },
                    {
                        title: 'Photo logging works best when feedback follows immediately',
                        paragraphs: [
                            'A meal photo is fast, but speed is not the real win. The real win is that the user can capture context before motivation fades. Immediate interpretation is what turns speed into adherence.',
                            'If you log a meal in ten seconds and receive useful coaching while the meal is still fresh in your mind, you are far more likely to make a better decision at the next meal. That is especially true for eating out, social meals, and busy workdays.',
                        ],
                    },
                    {
                        title: 'Why this matters for BodyCoach',
                        paragraphs: [
                            'BodyCoach is strongest when it behaves less like a passive database and more like a coach that reacts to the meal you just had. The combination of meal photo logging, AI coach commentary, and next-meal direction is what separates feedback from simple tracking.',
                            'For SEO, this also gives us a clearer position. We are not trying to rank for every calorie term. We are better positioned to rank for questions around meal feedback, AI coaching, and useful interpretation after logging.',
                        ],
                    },
                ],
                faqTitle: 'FAQ',
                faq: [
                    {
                        question: 'Is AI meal feedback better than manual food logging alone?',
                        answer: 'It is better when it adds interpretation. Logging alone records information. Feedback helps translate that information into the next action.',
                    },
                    {
                        question: 'Do I still need perfect accuracy to benefit from feedback?',
                        answer: 'No. Precise food weighing can help in some situations, but many users improve by getting consistent direction from their meal patterns rather than chasing perfect logs.',
                    },
                    {
                        question: 'What makes meal feedback feel useful instead of generic?',
                        answer: 'Useful feedback references your goal, the tradeoffs inside the meal, and the most practical next step for the rest of the day.',
                    },
                ],
                ctaTitle: 'Turn meal logging into coaching',
                ctaCopy:
                    'Use BodyCoach when you want meal photos, nutrition context, and a coach response in the same flow instead of three separate tools.',
            },
            ko: {
                category: '식사 피드백',
                kicker: 'AI 코칭',
                title: 'AI 식사 피드백이 식단 기록보다 중요한 이유',
                description:
                    '식단 기록은 절반만 끝난 일입니다. 이 글은 AI 식사 피드백이 왜 다음 행동을 더 분명하게 만들어주는지 설명합니다.',
                excerpt:
                    '식단 기록은 숫자를 남기는 것보다, 다음 끼니를 어떻게 바꿀지 알려줄 때 훨씬 유용해집니다.',
                heroNote:
                    '좋은 영양 앱은 기록에서 멈추지 않습니다. 방금 먹은 식사가 오늘 흐름에 어떤 의미인지까지 풀어줘야 합니다.',
                audienceTitle: '이런 사람에게 맞습니다',
                audience: [
                    '식단은 기록하는데 다음에 뭘 바꿔야 할지 늘 헷갈리는 사람',
                    '완벽한 식단표보다 현실 식사에 맞는 피드백이 필요한 사람',
                    '매주 다시 시작하는 대신 꾸준함을 만들고 싶은 사람',
                ],
                highlights: [
                    { label: '쓰는 순간', value: '식사 직후', detail: '기록 직후 피드백이 붙어야 다음 행동이 선명해집니다.' },
                    { label: '핵심 역할', value: '다음 끼니 방향', detail: '방금 먹은 것 설명보다 다음에 뭘 바꿀지가 더 중요합니다.' },
                    { label: 'BodyCoach 포인트', value: '사진 + 코치 코멘트', detail: '기록과 해석이 같은 흐름 안에서 끝납니다.' },
                ],
                sections: [
                    {
                        title: '기록만 남는 식단 앱은 결국 해석을 사용자에게 떠넘깁니다',
                        paragraphs: [
                            '많은 식단 앱은 칼로리나 탄단지 숫자는 잘 보여줍니다. 하지만 그 숫자가 오늘 목표에 맞는지, 다음 끼니에서 무엇을 줄이거나 보완해야 하는지는 결국 사용자가 직접 판단해야 합니다.',
                            '여기서 피로가 생깁니다. 사람들은 기록이 귀찮아서만 떠나는 게 아닙니다. 기록 이후에 다음 행동이 분명하지 않아서 멈추는 경우가 많습니다.',
                        ],
                    },
                    {
                        title: '좋은 AI 식사 피드백은 세 가지를 바로 답해야 합니다',
                        paragraphs: [
                            '유용한 피드백은 막연한 응원이 아니라, 이 식사가 잘한 점과 어긋난 점, 그리고 다음 끼니에서 무엇을 조정해야 하는지를 바로 말해줘야 합니다.',
                            '그래야 한 번의 기록이 그 끼니로 끝나지 않고 하루 전체 흐름으로 이어집니다.',
                        ],
                        bullets: [
                            '이 식사는 현재 목표와 얼마나 맞는가',
                            '이 식사의 가장 큰 영양적 트레이드오프는 무엇인가',
                            '오늘 흐름을 지키려면 다음 끼니는 어떤 방향이어야 하는가',
                        ],
                    },
                    {
                        title: '사진 기록의 강점은 속도가 아니라 즉시성입니다',
                        paragraphs: [
                            '식사 사진 기록은 빠르다는 점이 좋습니다. 하지만 더 중요한 건 동기와 맥락이 살아 있을 때 기록하고 바로 해석할 수 있다는 점입니다.',
                            '외식, 회식, 바쁜 점심 같은 상황에서는 특히 그렇습니다. 기록 직후에 코치 피드백이 붙으면 다음 끼니를 훨씬 덜 흔들리게 잡을 수 있습니다.',
                        ],
                    },
                    {
                        title: 'BodyCoach가 강한 지점도 바로 여기입니다',
                        paragraphs: [
                            'BodyCoach는 단순한 음식 데이터베이스보다, 방금 먹은 식사에 반응하는 코치처럼 움직일 때 가장 강합니다. 식사 사진 기록, AI 코치 코멘트, 다음 식단 추천이 한 흐름 안에 있는 점이 차이입니다.',
                            'SEO 관점에서도 이 포지션이 분명합니다. 모든 칼로리 키워드를 다 잡기보다, 식사 피드백과 AI 코칭 이후의 해석이라는 질문에서 더 선명하게 이길 수 있습니다.',
                        ],
                    },
                ],
                faqTitle: '자주 묻는 질문',
                faq: [
                    {
                        question: 'AI 식사 피드백이 그냥 기록만 하는 것보다 왜 더 좋나요?',
                        answer: '기록은 정보를 남기고, 피드백은 다음 행동을 만듭니다. 둘의 차이는 실행 가능성입니다.',
                    },
                    {
                        question: '정확하게 음식 무게를 재지 않아도 피드백이 도움이 되나요?',
                        answer: '네. 정밀 계량이 필요한 상황도 있지만, 많은 사람은 패턴을 보고 다음 행동을 조정하는 것만으로도 충분히 개선됩니다.',
                    },
                    {
                        question: '유용한 식사 피드백과 뻔한 피드백의 차이는 뭔가요?',
                        answer: '현재 목표를 기준으로 식사의 의미를 해석하고, 바로 다음 끼니에서 바꿀 점까지 말해주면 유용한 피드백입니다.',
                    },
                ],
                ctaTitle: '기록을 코칭으로 바꾸세요',
                ctaCopy:
                    'BodyCoach는 식사 사진, 영양 맥락, 코치 반응을 한 흐름으로 묶어 기록보다 더 실행 가능한 피드백을 제공합니다.',
            },
            ja: {
                category: '食事フィードバック',
                kicker: 'AIコーチング',
                title: 'AI食事フィードバックで食事記録がもっと役立つ理由',
                description:
                    '食事記録は半分しか終わっていません。このガイドでは、AI食事フィードバックが次の行動をどう明確にするかを解説します。',
                excerpt:
                    '食事記録は、食べたものを残すだけでなく、次の一食をどう変えるかまで示してくれると一気に実用的になります。',
                heroNote:
                    '強い栄養アプリは、記録で終わりません。その食事が今日の流れにどう影響するかまで説明する必要があります。',
                audienceTitle: 'こんな人に向いています',
                audience: [
                    '記録はしているのに、次に何を変えるべきか迷う人',
                    '完璧な食事管理より、現実の食事に合うフィードバックが欲しい人',
                    '毎週やり直すのではなく、継続できる流れを作りたい人',
                ],
                highlights: [
                    { label: '使う場面', value: '食後すぐ', detail: '記録直後に返ってくるから、次の判断がぶれにくいです。' },
                    { label: '役割', value: '次の食事の方向', detail: '食べた内容の説明より、次にどう整えるかが大切です。' },
                    { label: 'BodyCoach', value: '写真 + コーチ反応', detail: '記録と解釈が同じ流れで完結します。' },
                ],
                sections: [
                    {
                        title: '記録だけでは意味づけが足りません',
                        paragraphs: [
                            '多くの食事管理アプリはカロリーやPFCを見せてくれますが、その数値が今日の目標に合っていたのか、次の食事で何を調整すべきかまではユーザー自身が考えなければなりません。',
                            'ここで負担が生まれます。人が記録をやめる理由は、面倒だからだけではありません。記録後の次の行動が見えないからです。',
                        ],
                    },
                    {
                        title: '良いAI食事フィードバックは三つの問いに答えるべきです',
                        paragraphs: [
                            '役に立つフィードバックは、単なる励ましではありません。その食事の良かった点、ずれた点、そして次の食事でどう整えるべきかを短く明確に返す必要があります。',
                            'それがあると、一回の記録がその食事で終わらず、一日の流れに変わります。',
                        ],
                        bullets: [
                            'この食事は今の目標にどれくらい合っているか',
                            'この食事の一番大きな栄養上のトレードオフは何か',
                            '次の一食はどんな方向に寄せるべきか',
                        ],
                    },
                    {
                        title: '写真記録の価値は速さより即時性です',
                        paragraphs: [
                            '写真で記録できること自体も便利ですが、本当の価値は、モチベーションと文脈が残っているうちに記録と解釈が終わることです。',
                            '外食や忙しい仕事の日ほど、その差は大きくなります。食後すぐにコーチの反応が返ると、次の一食を整えやすくなります。',
                        ],
                    },
                    {
                        title: 'BodyCoachが強いのもこの部分です',
                        paragraphs: [
                            'BodyCoachは、食事データベースとしてよりも、今食べた内容に反応するコーチとして機能するときに強さが出ます。写真記録、AIコーチのコメント、次の食事提案が一つの流れにあるからです。',
                            'SEOでもこの立ち位置は明確です。一般的なカロリー用語を広く拾うより、食事フィードバックやAIコーチングの検索意図で強い記事を積み上げる方が合っています。',
                        ],
                    },
                ],
                faqTitle: 'よくある質問',
                faq: [
                    {
                        question: 'AI食事フィードバックは、ただ記録するだけより本当に役立ちますか？',
                        answer: 'はい。記録は情報を残しますが、フィードバックは次の行動を作ります。差は実行しやすさです。',
                    },
                    {
                        question: '食べ物の重さを毎回正確に測らなくても意味はありますか？',
                        answer: 'あります。厳密な計量が必要な場面もありますが、多くの人は食事の流れを整えるだけでも十分改善できます。',
                    },
                    {
                        question: '役に立つ食事フィードバックの条件は何ですか？',
                        answer: '現在の目標を基準に食事の意味を説明し、次の一食でどう調整するかまで示してくれることです。',
                    },
                ],
                ctaTitle: '記録だけで終わらせない',
                ctaCopy:
                    'BodyCoachは、写真での食事記録にコーチの解釈と次の行動を重ねて、記録をコーチングに変えます。',
            },
        },
    },
    {
        slug: 'what-to-eat-after-a-workout',
        pillar: 'workout-feedback',
        cover: '/landing-report.PNG',
        publishedAt: '2026-04-17',
        readingTime: '7 min read',
        keywords: {
            en: ['what to eat after a workout', 'post workout meal', 'recovery meal guide', 'workout recovery nutrition'],
            ko: ['운동 후 뭐 먹어야 하나', '운동 후 식사', '회복 식단', '운동 후 영양'],
            ja: ['筋トレ後 何を食べる', '運動後の食事', '回復食', '運動後の栄養'],
        },
        related: ['ai-meal-feedback-guide', 'healthy-routine-for-busy-people'],
        translations: {
            en: {
                category: 'Workout recovery',
                kicker: 'Recovery nutrition',
                title: 'What to Eat After a Workout Without Overthinking It',
                description:
                    'Post-workout meals do not need to be complicated. This guide explains how to think about recovery meals in a practical, repeatable way.',
                excerpt:
                    'You do not need a perfect recovery shake or a bodybuilder meal plan. You need a simple way to cover recovery, hunger, and the rest of your day.',
                heroNote:
                    'A useful recovery meal supports the training session you finished and the routine you need to keep tomorrow.',
                audienceTitle: 'This article is for you if',
                audience: [
                    'You finish workouts and then guess your recovery meal.',
                    'You want simple rules instead of extreme sports-nutrition advice.',
                    'You need meals that work on workdays, not only in ideal conditions.',
                ],
                highlights: [
                    { label: 'Best framing', value: 'Recovery first', detail: 'Start with what the session asked from you, then match the meal.' },
                    { label: 'Decision order', value: 'Protein, carbs, then context', detail: 'Use a simple order instead of trying to optimize every gram.' },
                    { label: 'BodyCoach fit', value: 'Next meal guidance', detail: 'Recovery feedback works better when it feeds into the rest of the day.' },
                ],
                sections: [
                    {
                        title: 'Your post-workout meal depends on what the workout actually demanded',
                        paragraphs: [
                            'A hard lower-body strength session, an easy walk, and a long run do not create the same recovery needs. That sounds obvious, but many meal decisions ignore it and rely on fixed rules that do not match the session.',
                            'A better question than “What is the best post-workout meal?” is “What does this session ask me to recover from?” That keeps the meal tied to the work you actually did.',
                        ],
                    },
                    {
                        title: 'Use a simple recovery framework instead of chasing perfect macros',
                        paragraphs: [
                            'Most people do better when they simplify the decision. Start with protein for recovery, add carbs based on session intensity and timing, then use vegetables, fluids, and meal size based on what the rest of your day looks like.',
                            'This creates a meal that is easier to repeat and more realistic than trying to build the perfect “fitness meal” from scratch every time.',
                        ],
                        bullets: [
                            'Protein to support recovery and appetite control',
                            'Carbs when the session was demanding or another session is coming soon',
                            'Meal size based on hunger, schedule, and the next eating opportunity',
                        ],
                    },
                    {
                        title: 'Timing matters, but less than people think',
                        paragraphs: [
                            'If you trained hard and will not eat for several hours, it helps to eat sooner. If you already ate near your training session and a proper meal is coming soon, there is usually less reason to panic about a narrow timing window.',
                            'The bigger mistake for most people is not missing a mythical anabolic window. It is finishing a workout, getting busy, and then making a random food decision later because there was no plan.',
                        ],
                    },
                    {
                        title: 'Why BodyCoach can be useful here',
                        paragraphs: [
                            'Recovery meals are a good example of why workout feedback and meal feedback should talk to each other. The right answer depends on the workout, the meal you already had, and what the rest of the day needs.',
                            'That is where BodyCoach can create a better loop: you log the session, log the meal, and get a next-meal suggestion that reflects both instead of treating nutrition and training as separate worlds.',
                        ],
                    },
                ],
                faqTitle: 'FAQ',
                faq: [
                    {
                        question: 'Do I need protein immediately after every workout?',
                        answer: 'Not always immediately, but it helps to cover protein within your normal meal flow, especially after harder sessions or when your next meal is far away.',
                    },
                    {
                        question: 'Should I always eat carbs after training?',
                        answer: 'Not always. Carbs become more useful when the training was demanding, your goal needs better performance recovery, or another session is coming soon.',
                    },
                    {
                        question: 'What is the biggest mistake after a workout?',
                        answer: 'For most people, it is having no decision rule at all and defaulting to whatever is easiest once hunger spikes later.',
                    },
                ],
                ctaTitle: 'Link your workout to your next meal',
                ctaCopy:
                    'BodyCoach helps you connect workout feedback, meal logs, and next-meal recommendations so recovery does not stay guesswork.',
            },
            ko: {
                category: '운동 후 회복',
                kicker: '회복 영양',
                title: '운동 후 뭐 먹어야 할까: 복잡하게 생각하지 않는 회복 식사 기준',
                description:
                    '운동 후 식사는 어렵게 만들 필요가 없습니다. 이 글은 회복 식사를 현실적으로 반복 가능한 기준으로 정리합니다.',
                excerpt:
                    '완벽한 헬스 식단이 아니라, 운동 강도와 하루 흐름에 맞는 단순한 기준이 필요합니다.',
                heroNote:
                    '좋은 운동 후 식사는 방금 끝낸 운동을 회복시키면서 내일도 이어갈 수 있는 루틴을 만들어야 합니다.',
                audienceTitle: '이런 사람에게 맞습니다',
                audience: [
                    '운동 끝나고 매번 뭘 먹을지 즉흥적으로 정하는 사람',
                    '극단적인 스포츠 영양 정보보다 현실 기준이 필요한 사람',
                    '평일 일정 안에서도 반복 가능한 식사 기준이 필요한 사람',
                ],
                highlights: [
                    { label: '생각 순서', value: '회복부터 보기', detail: '무슨 운동을 했는지 먼저 보고 식사를 맞추는 게 좋습니다.' },
                    { label: '판단 기준', value: '단백질, 탄수화물, 맥락', detail: '모든 그램을 맞추기보다 우선순서를 단순하게 둡니다.' },
                    { label: 'BodyCoach 포인트', value: '다음 식사 연결', detail: '운동 피드백과 식사 피드백이 이어질 때 회복 판단이 쉬워집니다.' },
                ],
                sections: [
                    {
                        title: '운동 후 식사는 운동 종류를 먼저 봐야 합니다',
                        paragraphs: [
                            '하체 근력 운동, 가벼운 산책, 긴 유산소 운동은 회복에 필요한 식사 방향이 다릅니다. 그런데 많은 사람은 이 차이를 무시한 채 늘 같은 운동 후 식단을 찾습니다.',
                            '그래서 질문을 바꾸는 게 좋습니다. “운동 후 뭐가 최고지?”보다 “방금 한 운동이 무엇을 회복시켜야 하지?”가 더 실용적입니다.',
                        ],
                    },
                    {
                        title: '완벽한 매크로보다 반복 가능한 틀을 먼저 만드세요',
                        paragraphs: [
                            '대부분의 사람은 판단을 단순하게 할수록 더 오래 갑니다. 단백질을 먼저 생각하고, 운동 강도와 다음 일정에 따라 탄수화물을 더하고, 채소와 수분, 식사량은 하루 흐름에 맞추면 됩니다.',
                            '이 방식은 매번 이상적인 헬스 식단을 새로 짜는 것보다 훨씬 현실적이고 반복하기 쉽습니다.',
                        ],
                        bullets: [
                            '회복과 포만감을 위한 단백질',
                            '운동 강도나 다음 운동 일정에 따라 조절하는 탄수화물',
                            '허기, 일정, 다음 식사까지 시간을 반영한 식사량',
                        ],
                    },
                    {
                        title: '타이밍은 중요하지만, 사람들이 생각하는 방식과는 다릅니다',
                        paragraphs: [
                            '강도가 높았고 다음 식사까지 시간이 길다면 빨리 먹는 편이 좋습니다. 반대로 운동 전후로 이미 식사를 했고 곧 정상 식사를 할 예정이라면, 극단적으로 몇 분 단위 창을 신경 쓸 필요는 적습니다.',
                            '대부분의 사람에게 더 큰 문제는 근손실 타이밍이 아니라, 운동 후 일정에 밀려 아무 기준 없이 나중에 허기질 때 아무거나 먹게 되는 흐름입니다.',
                        ],
                    },
                    {
                        title: 'BodyCoach가 유용한 이유도 여기 있습니다',
                        paragraphs: [
                            '운동 후 식사는 운동 기록과 식사 기록이 같이 봐야 더 정확해집니다. 어떤 운동을 했는지, 이미 무엇을 먹었는지, 하루 목표가 무엇인지가 모두 영향을 줍니다.',
                            'BodyCoach는 운동 피드백과 식사 피드백, 다음 식단 추천을 하나의 흐름으로 연결해주기 때문에 회복 식사를 훨씬 덜 감으로 결정하게 해줍니다.',
                        ],
                    },
                ],
                faqTitle: '자주 묻는 질문',
                faq: [
                    {
                        question: '운동 끝나자마자 단백질을 바로 먹어야 하나요?',
                        answer: '항상 즉시는 아닙니다. 다만 강도가 높은 운동을 했거나 다음 식사까지 시간이 길다면, 정상 식사 흐름 안에서 단백질을 빨리 챙기는 편이 좋습니다.',
                    },
                    {
                        question: '운동 후에는 무조건 탄수화물을 먹어야 하나요?',
                        answer: '항상 그런 것은 아닙니다. 운동 강도가 높거나 곧 다음 운동이 있거나 퍼포먼스 회복이 중요할수록 탄수화물의 필요성이 커집니다.',
                    },
                    {
                        question: '운동 후 식사에서 가장 흔한 실수는 뭔가요?',
                        answer: '식단 기준이 없어서 허기질 때 가장 쉬운 음식으로 흘러가는 것입니다.',
                    },
                ],
                ctaTitle: '운동 기록과 다음 식사를 연결하세요',
                ctaCopy:
                    'BodyCoach는 운동 피드백, 식사 기록, 다음 식단 추천을 한 흐름으로 묶어 회복 식사를 덜 감으로 선택하게 도와줍니다.',
            },
            ja: {
                category: '運動後の回復',
                kicker: '回復栄養',
                title: '筋トレ後に何を食べるべきかをシンプルに考える',
                description:
                    '運動後の食事は複雑にする必要はありません。このガイドでは、回復食を現実的で続けやすい形で考える方法を整理します。',
                excerpt:
                    '完璧な筋トレ飯より、運動内容と一日の流れに合うシンプルな判断基準の方が役に立ちます。',
                heroNote:
                    '良い運動後の食事は、今終えたトレーニングを回復させながら、明日も続けられる流れを作るものです。',
                audienceTitle: 'こんな人に向いています',
                audience: [
                    '運動後に毎回何を食べるか迷う人',
                    '極端なスポーツ栄養ではなく現実的な基準が欲しい人',
                    '忙しい日でも回せる回復食の考え方が欲しい人',
                ],
                highlights: [
                    { label: '考え方', value: '回復を先に見る', detail: '何を鍛えたかを先に見て、食事を合わせます。' },
                    { label: '順番', value: 'たんぱく質、炭水化物、文脈', detail: '毎回最適化しすぎず、判断順を固定します。' },
                    { label: 'BodyCoach', value: '次の食事までつなぐ', detail: '運動と食事のフィードバックがつながると判断が楽になります。' },
                ],
                sections: [
                    {
                        title: '運動後の食事は、まず運動内容を見るべきです',
                        paragraphs: [
                            '下半身の高強度トレーニング、軽い散歩、長めの有酸素では、必要な回復の方向が違います。それなのに、いつも同じ運動後メニューを探してしまう人は多いです。',
                            'だからこそ質問を変える方が実用的です。「何を食べるのが正解か」より、「このセッションは何を回復させる必要があるか」を先に見るべきです。',
                        ],
                    },
                    {
                        title: '完璧なマクロより、繰り返せる型を持つ方が強いです',
                        paragraphs: [
                            '多くの人は、判断を単純化した方が継続できます。まずたんぱく質を確保し、運動強度や次の予定に応じて炭水化物を調整し、野菜や水分、食事量は一日の流れに合わせます。',
                            'この型があると、毎回ゼロから完璧な筋トレ飯を作ろうとするよりずっと続きます。',
                        ],
                        bullets: [
                            '回復と満腹感を支えるたんぱく質',
                            '運動強度や次のセッションに応じた炭水化物',
                            '空腹感、予定、次の食事までの時間に合わせた量',
                        ],
                    },
                    {
                        title: 'タイミングは大切ですが、思われているほど神経質ではなくて大丈夫です',
                        paragraphs: [
                            '強度が高く、次の食事まで時間が空くなら早めに食べる方が良いです。一方で、トレーニング前後にすでに食べていて、すぐ次の食事があるなら、数分単位の窓を気にしすぎる必要はあまりありません。',
                            '多くの人にとって本当の問題は、いわゆるタイミングを逃すことではなく、運動後に忙しくなって計画なしに後で適当な食事になってしまうことです。',
                        ],
                    },
                    {
                        title: 'BodyCoachがここで役立つ理由',
                        paragraphs: [
                            '回復食は、運動記録と食事記録を別々に見るより、まとめて見た方が正確です。何を鍛えたか、すでに何を食べたか、残りの一日をどう整えたいかが全部関係するからです。',
                            'BodyCoachは、運動フィードバック、食事ログ、次の食事提案を一つの流れにまとめるので、運動後の食事を感覚だけで決めにくくしてくれます。',
                        ],
                    },
                ],
                faqTitle: 'よくある質問',
                faq: [
                    {
                        question: '運動が終わった直後に必ずたんぱく質を取るべきですか？',
                        answer: '必ず直後ではありませんが、強度が高かったり次の食事まで時間が空くなら、通常の食事の流れの中で早めに取る方が役立ちます。',
                    },
                    {
                        question: '運動後は毎回炭水化物を入れるべきですか？',
                        answer: '常にではありません。強度が高い日や、次のセッションが近い日ほど炭水化物の価値が上がります。',
                    },
                    {
                        question: '運動後の食事で一番多い失敗は何ですか？',
                        answer: '判断基準がないまま後で強い空腹に流されて、最も手軽な食事を選んでしまうことです。',
                    },
                ],
                ctaTitle: 'トレーニングと次の食事をつなげる',
                ctaCopy:
                    'BodyCoachは、運動フィードバック、食事ログ、次の食事提案をつないで、回復食の判断をもっと実用的にします。',
            },
        },
    },
    {
        slug: 'why-youre-not-losing-weight-even-if-you-log-meals',
        pillar: 'healthy-routine',
        cover: '/landing-next-feedback.PNG',
        publishedAt: '2026-04-16',
        readingTime: '8 min read',
        keywords: {
            en: ['not losing weight while tracking calories', 'why am i not losing weight', 'meal logging plateau', 'weight loss troubleshooting'],
            ko: ['식단 기록하는데 살이 안 빠지는 이유', '체중이 안 빠지는 이유', '식단 기록 정체기', '감량 정체'],
            ja: ['食事を記録しているのに痩せない', '体重が落ちない理由', '食事記録 停滞', '減量 停滞'],
        },
        related: ['ai-meal-feedback-guide', 'healthy-routine-for-busy-people'],
        translations: {
            en: {
                category: 'Troubleshooting',
                kicker: 'Weight-loss plateau',
                title: 'Why You May Not Be Losing Weight Even If You Log Every Meal',
                description:
                    'Consistent logging does not always produce visible progress right away. This guide breaks down common reasons weight loss stalls even when tracking looks disciplined.',
                excerpt:
                    'Meal logging helps, but it does not solve portion drift, weekend inconsistency, low movement, or hidden compensation by itself.',
                heroNote:
                    'The question is rarely “Am I tracking?” It is usually “What part of the day or week keeps escaping the system?”',
                audienceTitle: 'This article is for you if',
                audience: [
                    'You track weekdays well but feel confused by the scale.',
                    'You want to know where calorie logging commonly breaks down in real life.',
                    'You are trying to fix the routine instead of chasing a crash reset.',
                ],
                highlights: [
                    { label: 'Common gap', value: 'Logging without interpretation', detail: 'A log can look complete while the weekly pattern still leaks.' },
                    { label: 'Hidden issue', value: 'Weekends and liquid calories', detail: 'The missing calories are often not dramatic, just repeated.' },
                    { label: 'BodyCoach fit', value: 'Pattern-based coaching', detail: 'Feedback helps you spot where the routine drifts before motivation drops.' },
                ],
                sections: [
                    {
                        title: 'Logging is useful, but it is not the whole system',
                        paragraphs: [
                            'People often treat tracking as the whole plan. In reality, tracking is the visibility layer. It shows what happened, but it does not automatically prevent a pattern from repeating.',
                            'That distinction matters when progress feels stalled. If weight is not moving, the issue is usually not that logging is pointless. It is that a different part of the routine is overpowering what the log is trying to show you.',
                        ],
                    },
                    {
                        title: 'The most common breakdowns are small, repeated, and easy to rationalize',
                        paragraphs: [
                            'A few restaurant meals, liquid calories, bite-and-taste moments while cooking, or looser weekends can easily erase a careful weekday deficit. None of these feels dramatic alone, which is why people often overlook them.',
                            'Another common issue is that activity drops when dieting fatigue rises. The log still shows disciplined meals, but your total daily movement quietly falls, making the result weaker than expected.',
                        ],
                        bullets: [
                            'Portion drift after the first few consistent weeks',
                            'Loose meals on weekends that are never fully logged',
                            'Compensation through snacks, drinks, or “healthy” extras',
                            'Lower movement and recovery habits when stress rises',
                        ],
                    },
                    {
                        title: 'Look at weekly patterns before blaming one meal or one weigh-in',
                        paragraphs: [
                            'A single meal rarely explains a real plateau. Weekly structure does. If your scale, energy, and hunger are all confusing, zoom out first. Look for recurring situations instead of hunting for one “bad” meal.',
                            'For many people, the better question is not “What did I eat wrong yesterday?” but “What kind of day keeps knocking me off routine?” That is usually where the answer lives.',
                        ],
                    },
                    {
                        title: 'This is where feedback beats raw logging',
                        paragraphs: [
                            'Feedback helps because it does more than collect entries. It points to patterns, tradeoffs, and next decisions. That is valuable when you need the routine to tighten, not when you need another app that only stores data.',
                            'BodyCoach is better positioned when it helps you identify the kind of meal or day that keeps breaking consistency, then gives you a simpler next step. That is how logging becomes useful again when progress feels flat.',
                        ],
                    },
                ],
                faqTitle: 'FAQ',
                faq: [
                    {
                        question: 'Can you track food accurately and still not lose weight?',
                        answer: 'Yes. Weight loss depends on the full weekly pattern, not just accurate entries in isolation. Activity, consistency, and how often untracked meals appear all matter.',
                    },
                    {
                        question: 'Should I track even more strictly if progress stalls?',
                        answer: 'Sometimes, but not always. First look for repeated situations that are missing from the system. Stricter logging alone may not solve a routine problem.',
                    },
                    {
                        question: 'What should I check first during a plateau?',
                        answer: 'Check recurring high-friction moments: weekends, eating out, drinks, snack grazing, and days where movement drops more than expected.',
                    },
                ],
                ctaTitle: 'Find the part of the week that keeps slipping',
                ctaCopy:
                    'BodyCoach helps turn meal logs into pattern-aware coaching so you can see what actually breaks your routine before motivation disappears.',
            },
            ko: {
                category: '문제 해결',
                kicker: '감량 정체',
                title: '식단을 다 기록하는데도 체중이 안 빠지는 이유',
                description:
                    '꾸준히 기록한다고 해서 바로 체중 변화가 보이는 것은 아닙니다. 이 글은 기록을 하고 있는데도 감량이 막히는 흔한 이유를 정리합니다.',
                excerpt:
                    '식단 기록 자체는 도움이 되지만, 주말 패턴, 음료, 활동량 감소, 작은 보정 식사까지 자동으로 해결해주지는 않습니다.',
                heroNote:
                    '핵심 질문은 “기록했나?”보다 “하루나 일주일 중 어디가 계속 시스템 밖으로 새고 있나?”에 가깝습니다.',
                audienceTitle: '이런 사람에게 맞습니다',
                audience: [
                    '평일에는 잘 기록하는데 체중계 결과가 답답한 사람',
                    '현실에서 식단 기록이 어디서 무너지는지 알고 싶은 사람',
                    '급한 리셋보다 루틴 자체를 고치고 싶은 사람',
                ],
                highlights: [
                    { label: '자주 생기는 문제', value: '기록은 있는데 해석이 없음', detail: '기록은 성실해 보여도 주간 패턴은 계속 샐 수 있습니다.' },
                    { label: '숨은 원인', value: '주말과 음료', detail: '빠지는 칼로리는 극단적인 한 끼보다 반복되는 작은 누수일 때가 많습니다.' },
                    { label: 'BodyCoach 포인트', value: '패턴 기반 피드백', detail: '동기 떨어지기 전에 어디서 흐름이 무너지는지 보기 쉬워집니다.' },
                ],
                sections: [
                    {
                        title: '기록은 플랜 전체가 아니라 가시성 층입니다',
                        paragraphs: [
                            '많은 사람은 기록 자체를 다이어트 플랜의 전부처럼 다룹니다. 하지만 기록은 어디까지나 보이게 만드는 층입니다. 무슨 일이 있었는지 보여주지만, 같은 패턴이 반복되는 것을 자동으로 막아주지는 않습니다.',
                            '그래서 체중이 정체될 때 기록이 무의미하다고 결론 내리기 쉽지만, 실제 문제는 다른 루틴 요소가 기록의 효과를 덮어버리고 있는 경우가 많습니다.',
                        ],
                    },
                    {
                        title: '가장 흔한 문제는 작고 반복되고 합리화하기 쉽습니다',
                        paragraphs: [
                            '외식 몇 번, 술이나 음료, 요리하면서 집어먹는 작은 칼로리, 느슨한 주말 식사만으로도 평일의 적자가 쉽게 지워질 수 있습니다. 하나하나는 별일 아닌 것처럼 느껴지기 때문에 더 놓치기 쉽습니다.',
                            '또 다른 흔한 패턴은 다이어트 피로가 쌓이면서 활동량이 은근히 줄어드는 것입니다. 식사는 기록돼도 총 움직임이 떨어지면 결과가 생각보다 약하게 나옵니다.',
                        ],
                        bullets: [
                            '익숙해진 뒤 생기는 섭취량의 미세한 증가',
                            '주말 외식이나 간식을 대충 넘기는 기록',
                            '음료, 소스, 건강식 추가분 같은 보정 칼로리',
                            '스트레스가 높을수록 줄어드는 활동량과 회복 습관',
                        ],
                    },
                    {
                        title: '한 끼보다 주간 패턴을 먼저 보세요',
                        paragraphs: [
                            '실제 정체기의 원인은 특정 한 끼인 경우보다 주간 구조인 경우가 훨씬 많습니다. 체중과 컨디션, 허기가 모두 애매하면 먼저 전체 패턴을 보세요.',
                            '많은 경우 더 좋은 질문은 “어제 뭘 잘못 먹었지?”가 아니라 “어떤 날의 패턴이 계속 나를 루틴 밖으로 밀어내지?”입니다.',
                        ],
                    },
                    {
                        title: '그래서 원시 기록보다 피드백이 더 유용합니다',
                        paragraphs: [
                            '피드백은 입력값을 모으는 데서 끝나지 않고, 반복 패턴과 트레이드오프, 다음 행동을 보여줍니다. 정체기에는 바로 그 해석이 필요합니다.',
                            'BodyCoach는 어느 종류의 식사나 하루가 꾸준함을 깨는지 보여주고, 그 다음 한 단계만 단순하게 제안할 때 가장 강합니다. 그래야 기록이 다시 실행 가능한 도구가 됩니다.',
                        ],
                    },
                ],
                faqTitle: '자주 묻는 질문',
                faq: [
                    {
                        question: '음식을 정확히 기록하는데도 체중이 안 빠질 수 있나요?',
                        answer: '네. 체중 변화는 한두 번의 정확한 기록보다 주간 패턴, 활동량, 기록되지 않는 식사의 빈도에 더 큰 영향을 받습니다.',
                    },
                    {
                        question: '정체기가 오면 더 빡빡하게 기록해야 하나요?',
                        answer: '경우에 따라 다르지만, 먼저 어떤 상황이 계속 시스템 밖으로 빠지는지 보는 것이 우선입니다. 루틴 문제를 기록 강도만으로 해결하지 못하는 경우가 많습니다.',
                    },
                    {
                        question: '정체기에서 가장 먼저 확인해야 할 것은 뭔가요?',
                        answer: '주말, 외식, 음료, 주워먹는 간식, 활동량이 줄어드는 날처럼 반복적으로 흐트러지는 지점을 먼저 보세요.',
                    },
                ],
                ctaTitle: '주간 흐름에서 새는 지점을 찾으세요',
                ctaCopy:
                    'BodyCoach는 식단 기록을 패턴 기반 피드백으로 바꿔, 꾸준함을 깨는 순간을 더 빨리 보이게 도와줍니다.',
            },
            ja: {
                category: '問題解決',
                kicker: '減量停滞',
                title: '食事を全部記録しているのに体重が落ちない理由',
                description:
                    'きちんと記録していても、すぐに体重変化が出るとは限りません。このガイドでは、記録しているのに減量が止まるよくある理由を整理します。',
                excerpt:
                    '食事記録は役立ちますが、週末の崩れ、飲み物、活動量の低下、小さな食べ足しまで自動で直してくれるわけではありません。',
                heroNote:
                    '本当の問いは「記録しているか」ではなく、「どの時間帯や曜日が毎週システムから漏れているか」です。',
                audienceTitle: 'こんな人に向いています',
                audience: [
                    '平日は記録できているのに体重が動かない人',
                    '現実の生活でどこから崩れているのか知りたい人',
                    'また最初からやり直すのではなく、習慣を修正したい人',
                ],
                highlights: [
                    { label: 'よくある穴', value: '記録はあるが解釈がない', detail: '記録が真面目でも、週の流れはまだ漏れます。' },
                    { label: '隠れ要因', value: '週末と飲み物', detail: '大きな失敗より、小さな反復の方が効いてきます。' },
                    { label: 'BodyCoach', value: 'パターンを見るコーチング', detail: 'モチベーションが落ちる前に崩れ方を見つけやすくなります。' },
                ],
                sections: [
                    {
                        title: '記録はプラン全体ではなく、見える化の層です',
                        paragraphs: [
                            '多くの人は記録そのものを減量プランの全部のように考えます。ですが実際には、記録は起きたことを見えるようにする層であって、同じ崩れ方を自動で止めてくれるわけではありません。',
                            'だから停滞したときに「記録は意味がない」と感じやすいのですが、実際には別の習慣要素が記録の効果を上書きしていることが多いです。',
                        ],
                    },
                    {
                        title: 'よくある崩れは小さく、繰り返され、見逃されやすいです',
                        paragraphs: [
                            '外食、飲み物、料理中のつまみ食い、少しゆるい週末だけでも、平日の赤字は簡単に相殺されます。どれも単体では大きく見えないため、なおさら見落とされやすいです。',
                            'もう一つのよくある流れは、食事管理の疲れと一緒に活動量が静かに落ちることです。食事は記録されていても、総消費が下がれば結果は鈍くなります。',
                        ],
                        bullets: [
                            '慣れてきた頃に起こる量のズレ',
                            '週末の外食や間食をざっくり済ませること',
                            '飲み物、ソース、健康的なおやつの追加分',
                            'ストレス時に落ちやすい活動量と回復行動',
                        ],
                    },
                    {
                        title: '一食より、週の構造を先に見てください',
                        paragraphs: [
                            '本当の停滞は、一食の失敗より週の構造から生まれることが多いです。体重、空腹、エネルギー感が全部あいまいなら、まずは全体を見ましょう。',
                            '多くの場合、良い問いは「昨日何を間違えたか」ではなく、「どんな日のパターンが毎回流れを崩すのか」です。',
                        ],
                    },
                    {
                        title: 'だからこそ、生の記録よりフィードバックが効きます',
                        paragraphs: [
                            'フィードバックは入力値を集めるだけでなく、繰り返しのパターン、トレードオフ、次の行動を示します。停滞期に必要なのはその解釈です。',
                            'BodyCoachは、どの種類の食事やどんな日が継続を壊しているのかを見せ、次の一歩をシンプルにしてくれるときに強さが出ます。',
                        ],
                    },
                ],
                faqTitle: 'よくある質問',
                faq: [
                    {
                        question: '食事を正確に記録していても痩せないことはありますか？',
                        answer: 'あります。体重変化は単発の正確な記録ではなく、週単位の流れ、活動量、未記録の食事頻度などに大きく左右されます。',
                    },
                    {
                        question: '停滞したらもっと厳密に記録すべきですか？',
                        answer: '場合によります。まずは何が毎週システムから漏れているかを見つけることが先です。習慣の問題は記録の厳しさだけでは直らないことがあります。',
                    },
                    {
                        question: '停滞期に最初に見るべきポイントは何ですか？',
                        answer: '週末、外食、飲み物、つまみ食い、活動量が落ちる日など、繰り返し崩れる場面を先に確認してください。',
                    },
                ],
                ctaTitle: '毎週崩れる場所を見つける',
                ctaCopy:
                    'BodyCoachは食事記録をパターンベースのコーチングに変えて、継続を壊す瞬間を早めに見つけやすくします。',
            },
        },
    },
    {
        slug: 'healthy-routine-for-busy-people',
        pillar: 'healthy-routine',
        cover: '/landing-chat.PNG',
        publishedAt: '2026-04-15',
        readingTime: '6 min read',
        keywords: {
            en: ['healthy routine for busy people', 'healthy routine app', 'how to build healthy habits', 'busy schedule health'],
            ko: ['바쁜 사람 건강 루틴', '건강 루틴 만들기', '바쁜 일정 식단', '건강 습관'],
            ja: ['忙しい人の健康ルーティン', '健康習慣の作り方', '忙しい日の食事管理', '健康ルーティンアプリ'],
        },
        related: ['what-to-eat-after-a-workout', 'ai-meal-feedback-guide'],
        translations: {
            en: {
                category: 'Habit building',
                kicker: 'Busy routine',
                title: 'How to Build a Healthy Routine When Life Is Busy',
                description:
                    'A healthy routine should survive real workdays, travel, and uneven energy. This guide focuses on repeatable anchors instead of idealized plans.',
                excerpt:
                    'Busy people do not need a perfect schedule. They need a few defaults that still work when motivation is low and the day moves fast.',
                heroNote:
                    'A routine becomes real when it still works on the messy day, not only on the calm one.',
                audienceTitle: 'This article is for you if',
                audience: [
                    'You start strong on Monday and lose the rhythm by midweek.',
                    'You need a health routine that fits work, commuting, and social meals.',
                    'You want a plan that feels maintainable without micromanaging every hour.',
                ],
                highlights: [
                    { label: 'Core idea', value: 'Default decisions', detail: 'Healthy routines improve when repeated choices become easier to make.' },
                    { label: 'Best anchor', value: 'Meals and movement', detail: 'Start with two anchors you can keep even on crowded days.' },
                    { label: 'BodyCoach fit', value: 'Next-step coaching', detail: 'Small course corrections keep the week from collapsing.' },
                ],
                sections: [
                    {
                        title: 'Healthy routines fail when they depend on ideal days',
                        paragraphs: [
                            'A plan that only works on empty-calendar days is not a routine. It is a best-case scenario. Real routines must survive rushed mornings, delayed lunches, poor sleep, and the random meals that come with work or family life.',
                            'That means the goal is not to control every hour. The goal is to reduce decision fatigue when the day becomes noisy.',
                        ],
                    },
                    {
                        title: 'Start with repeatable anchors, not a fully optimized system',
                        paragraphs: [
                            'The strongest routines usually start with two or three anchors: a default breakfast, a backup lunch plan, a walking block, a grocery list you can repeat, or a simple way to decide the next meal.',
                            'These anchors matter because they lower the cost of doing the healthy thing. You are not relying on willpower every time.',
                        ],
                        bullets: [
                            'One default meal you can repeat on busy mornings',
                            'One backup option for lunch or dinner when plans change',
                            'One movement anchor that keeps you from having a zero-activity day',
                        ],
                    },
                    {
                        title: 'The best routine is the one that recovers quickly after disruption',
                        paragraphs: [
                            'Busy schedules do not reward perfection. They reward recovery speed. Missing one meal plan or one workout is rarely the issue. Letting that turn into three off-plan days is the bigger problem.',
                            'That is why next-step thinking matters. A routine stays alive when the next decision is easy, even after the day goes sideways.',
                        ],
                    },
                    {
                        title: 'Why BodyCoach fits this use case',
                        paragraphs: [
                            'BodyCoach works well for busy people when it reduces thinking load. Logging a meal, getting fast context, and receiving a next-meal suggestion is more useful than collecting data you will interpret later when you are tired.',
                            'This is also a strong SEO lane for us. Instead of generic “healthy lifestyle” content, we can own the narrower problem of building a sustainable routine under real-world time pressure.',
                        ],
                    },
                ],
                faqTitle: 'FAQ',
                faq: [
                    {
                        question: 'What is the best first step for a busy person?',
                        answer: 'Start with one repeatable meal and one movement anchor. The first goal is stability, not complexity.',
                    },
                    {
                        question: 'Do healthy routines require meal prep every day?',
                        answer: 'No. They require defaults. Meal prep can help, but so can a reliable backup plan and a short list of repeat meals.',
                    },
                    {
                        question: 'How do you stay consistent after a chaotic day?',
                        answer: 'Make the next decision simple. The routine survives when recovery is fast, not when the day is perfect.',
                    },
                ],
                ctaTitle: 'Build a routine that survives the busy day',
                ctaCopy:
                    'BodyCoach helps you log quickly, understand the meal, and decide the next step before the day gets away from you.',
            },
            ko: {
                category: '습관 만들기',
                kicker: '바쁜 루틴',
                title: '바쁜 일정 속에서도 건강 루틴을 만드는 방법',
                description:
                    '건강 루틴은 이상적인 하루가 아니라 실제 평일을 버텨야 합니다. 이 글은 완벽한 계획보다 반복 가능한 기준에 집중합니다.',
                excerpt:
                    '바쁜 사람에게 필요한 건 완벽한 스케줄이 아니라, 동기가 낮고 일정이 꼬여도 작동하는 몇 가지 기본값입니다.',
                heroNote:
                    '루틴은 한가한 날에 잘 되는 계획이 아니라, 정신없는 날에도 무너지지 않는 구조여야 합니다.',
                audienceTitle: '이런 사람에게 맞습니다',
                audience: [
                    '월요일엔 잘하다가 수요일쯤 흐름이 무너지는 사람',
                    '업무, 이동, 외식 사이에서도 유지할 건강 루틴이 필요한 사람',
                    '시간 단위 통제보다 지속 가능한 기준이 필요한 사람',
                ],
                highlights: [
                    { label: '핵심 아이디어', value: '기본값 만들기', detail: '반복되는 선택이 쉬워질수록 루틴은 오래 갑니다.' },
                    { label: '시작 포인트', value: '식사와 움직임 앵커', detail: '바쁜 날에도 지킬 수 있는 두 가지부터 잡는 게 좋습니다.' },
                    { label: 'BodyCoach 포인트', value: '다음 행동 코칭', detail: '작은 보정이 쌓여야 한 주 전체가 무너지지 않습니다.' },
                ],
                sections: [
                    {
                        title: '이상적인 날에만 작동하는 계획은 루틴이 아닙니다',
                        paragraphs: [
                            '캘린더가 비고 컨디션이 좋은 날에만 돌아가는 계획은 현실 루틴이 아닙니다. 실제 루틴은 늦잠, 밀린 점심, 수면 부족, 갑작스러운 외식 같은 상황을 버텨야 합니다.',
                            '그래서 목표는 하루를 완벽하게 통제하는 것이 아니라, 시끄러운 일정 속에서 의사결정 피로를 줄이는 것입니다.',
                        ],
                    },
                    {
                        title: '처음부터 완벽한 시스템보다 반복 가능한 앵커를 먼저 만드세요',
                        paragraphs: [
                            '강한 루틴은 보통 두세 개의 앵커에서 시작합니다. 반복 가능한 아침 식사, 바뀌어도 대체 가능한 점심 옵션, 짧은 걷기 루틴, 다시 쓰는 장보기 목록, 다음 끼니를 정하는 단순한 규칙 같은 것들입니다.',
                            '이 앵커가 중요한 이유는 건강한 선택의 비용을 낮춰주기 때문입니다. 매번 의지력으로 버티지 않아도 됩니다.',
                        ],
                        bullets: [
                            '바쁜 아침에도 반복 가능한 기본 식사 하나',
                            '일정이 꼬여도 선택 가능한 백업 점심 또는 저녁 하나',
                            '완전한 무활동일을 막아주는 움직임 앵커 하나',
                        ],
                    },
                    {
                        title: '바쁜 사람 루틴은 완벽함보다 복구 속도가 중요합니다',
                        paragraphs: [
                            '현실 일정에서는 한 번 식단이 어긋나거나 운동을 빼먹는 일이 핵심 문제가 아닙니다. 그 한 번이 3일 연속 무너짐으로 이어지는 것이 더 큰 문제입니다.',
                            '그래서 다음 행동이 쉬워야 합니다. 하루가 꼬였어도 다음 선택이 단순하면 루틴은 살아 있습니다.',
                        ],
                    },
                    {
                        title: 'BodyCoach가 이 상황에 맞는 이유',
                        paragraphs: [
                            'BodyCoach는 생각 부담을 줄여줄 때 가장 잘 맞습니다. 식사를 빠르게 기록하고, 바로 해석하고, 다음 식단 추천까지 받으면 피곤한 밤에 따로 분석할 필요가 줄어듭니다.',
                            'SEO 측면에서도 이건 강한 방향입니다. 추상적인 건강 습관보다, 바쁜 일정 속에서도 유지되는 루틴이라는 더 구체적인 질문을 잡는 편이 BodyCoach와 잘 맞습니다.',
                        ],
                    },
                ],
                faqTitle: '자주 묻는 질문',
                faq: [
                    {
                        question: '바쁜 사람이 건강 루틴을 시작할 때 가장 먼저 해야 할 일은 뭔가요?',
                        answer: '반복 가능한 기본 식사 하나와 움직임 앵커 하나부터 시작하세요. 처음 목표는 복잡함이 아니라 안정성입니다.',
                    },
                    {
                        question: '건강 루틴을 위해 매일 도시락이나 meal prep이 필수인가요?',
                        answer: '아닙니다. 핵심은 기본값입니다. meal prep이 도움이 될 수 있지만, 믿을 수 있는 백업 식사와 반복 메뉴만 있어도 충분합니다.',
                    },
                    {
                        question: '하루가 완전히 꼬였을 때 어떻게 다시 루틴으로 돌아오나요?',
                        answer: '다음 선택을 단순하게 만들면 됩니다. 루틴은 완벽한 하루보다 빠른 복구에서 유지됩니다.',
                    },
                ],
                ctaTitle: '바쁜 날에도 버티는 루틴을 만드세요',
                ctaCopy:
                    'BodyCoach는 빠른 기록, 식사 해석, 다음 행동 제안으로 하루가 정신없어지기 전에 흐름을 다시 잡게 도와줍니다.',
            },
            ja: {
                category: '習慣づくり',
                kicker: '忙しいルーティン',
                title: '忙しい毎日でも健康ルーティンを作る方法',
                description:
                    '健康ルーティンは理想的な日ではなく、現実の平日を生き残る必要があります。このガイドは完璧な計画より、繰り返せる基準に集中します。',
                excerpt:
                    '忙しい人に必要なのは完璧なスケジュールではなく、やる気が低い日や予定が崩れた日でも動く基本値です。',
                heroNote:
                    'ルーティンは余裕のある日だけ回る計画ではなく、乱れた日でも壊れにくい構造であるべきです。',
                audienceTitle: 'こんな人に向いています',
                audience: [
                    '月曜は順調でも週の途中で崩れやすい人',
                    '仕事、移動、外食の中でも続く健康習慣が欲しい人',
                    '時間単位の管理より、続けられる基準を求めている人',
                ],
                highlights: [
                    { label: '考え方', value: 'デフォルトを作る', detail: '繰り返しの選択が楽になるほど、ルーティンは強くなります。' },
                    { label: '始め方', value: '食事と動きのアンカー', detail: '忙しい日でも残せる二つから始めるのが現実的です。' },
                    { label: 'BodyCoach', value: '次の行動を軽くする', detail: '小さな軌道修正が週全体の崩れを防ぎます。' },
                ],
                sections: [
                    {
                        title: '理想の日にしか回らない計画はルーティンではありません',
                        paragraphs: [
                            '予定が空いていて体調も良い日にしか機能しない計画は、現実のルーティンではありません。実際のルーティンは、寝不足、遅い昼食、急な外食、仕事の波をまたいでも残る必要があります。',
                            'そのため、目標は一日を完全にコントロールすることではなく、忙しい日でも判断疲れを減らすことです。',
                        ],
                    },
                    {
                        title: '最初から最適化しすぎず、繰り返せるアンカーを作ってください',
                        paragraphs: [
                            '強いルーティンは、たいてい二つか三つのアンカーから始まります。定番の朝食、予定変更に耐える昼食の予備案、短い散歩、繰り返せる買い物リスト、次の食事を決める単純な基準などです。',
                            'こうしたアンカーは、健康的な選択をするためのコストを下げます。毎回意志力に頼らなくて済みます。',
                        ],
                        bullets: [
                            '忙しい朝でも再現しやすい定番食',
                            '予定が崩れても選べる昼食や夕食の予備案',
                            '完全なゼロ活動日を防ぐ動きのアンカー',
                        ],
                    },
                    {
                        title: '忙しい人のルーティンは、完璧さより復帰の速さが重要です',
                        paragraphs: [
                            '現実の生活では、一回の食事ミスやトレーニング欠席そのものが本質的な問題ではありません。それがそのまま数日連続の崩れに変わることの方が大きな問題です。',
                            'だからこそ、次の一歩が簡単であることが重要です。日が崩れても次の判断が軽ければ、ルーティンはまだ生きています。',
                        ],
                    },
                    {
                        title: 'BodyCoachがこの状況に合う理由',
                        paragraphs: [
                            'BodyCoachは、考える負担を減らせるときに忙しい人と相性が良いです。食事を素早く記録し、その意味を理解し、次の食事の方向まで受け取れれば、疲れた夜にあとで分析し直す必要が減ります。',
                            'SEOでもこれは強い方向です。抽象的な健康習慣ではなく、忙しい日でも続くルーティンという、より具体的な検索意図を取りにいけます。',
                        ],
                    },
                ],
                faqTitle: 'よくある質問',
                faq: [
                    {
                        question: '忙しい人が最初に作るべき習慣は何ですか？',
                        answer: '繰り返せる定番食一つと、動きのアンカー一つから始めてください。最初の目標は安定です。',
                    },
                    {
                        question: '健康ルーティンには毎日の作り置きが必要ですか？',
                        answer: '必須ではありません。大切なのはデフォルトです。作り置きの代わりに、信頼できる予備案や繰り返しメニューでも十分機能します。',
                    },
                    {
                        question: '一日が崩れたあと、どうやって戻せばいいですか？',
                        answer: '次の判断を簡単にすることです。ルーティンは完璧な日ではなく、速い復帰で保たれます。',
                    },
                ],
                ctaTitle: '忙しい日でも壊れにくいルーティンへ',
                ctaCopy:
                    'BodyCoachは、素早い記録、食事の解釈、次の行動提案で、日が崩れる前に流れを戻しやすくします。',
            },
        },
    },
];

const blogPosts: BlogPostDefinition[] = [
    ...baseBlogPosts,
    ...blogPostsGroupA,
    ...blogPostsGroupB,
    ...blogPostsGroupC,
];

function validateBlogPosts(posts: BlogPostDefinition[]) {
    const slugSet = new Set<string>();

    posts.forEach((post) => {
        if (slugSet.has(post.slug)) {
            throw new Error(`Duplicate blog slug detected: ${post.slug}`);
        }

        slugSet.add(post.slug);
    });

    posts.forEach((post) => {
        post.related.forEach((relatedSlug) => {
            if (!slugSet.has(relatedSlug)) {
                throw new Error(`Blog post "${post.slug}" references missing related slug "${relatedSlug}"`);
            }
        });
    });
}

validateBlogPosts(blogPosts);

export const blogSlugs = blogPosts.map((post) => post.slug);

export function isBlogLocale(locale: string): locale is BlogLocale {
    return blogLocales.includes(locale as BlogLocale);
}

export function getBlogLocale(locale: string): BlogLocale {
    return isBlogLocale(locale) ? locale : 'en';
}

export function getBlogIndexCopy(locale: string) {
    return blogIndexCopy[getBlogLocale(locale)];
}

function mapPost(definition: BlogPostDefinition, locale: BlogLocale): BlogPost {
    const content = definition.translations[locale];

    return {
        slug: definition.slug,
        pillar: definition.pillar,
        cover: definition.cover,
        publishedAt: definition.publishedAt,
        readingTime: definition.readingTime,
        keywords: definition.keywords[locale],
        related: definition.related,
        ...content,
    };
}

export function getBlogPosts(locale: string) {
    const normalizedLocale = getBlogLocale(locale);

    return [...blogPosts]
        .sort((left, right) => right.publishedAt.localeCompare(left.publishedAt))
        .map((post) => mapPost(post, normalizedLocale));
}

export function getBlogPost(locale: string, slug: string) {
    const normalizedLocale = getBlogLocale(locale);
    const definition = blogPosts.find((post) => post.slug === slug);

    if (!definition) {
        return null;
    }

    return mapPost(definition, normalizedLocale);
}

export function getRelatedBlogPosts(locale: string, currentSlug: BlogPostSlug) {
    const post = getBlogPost(locale, currentSlug);
    if (!post) {
        return [];
    }

    return post.related
        .map((slug) => getBlogPost(locale, slug))
        .filter((item): item is BlogPost => item !== null);
}

export function getBlogLanguageAlternates(pathname: string) {
    const alternates = Object.fromEntries(
        blogLocales.map((locale) => [locale, getLocalizedUrl(locale, pathname)])
    );

    alternates['x-default'] = getLocalizedUrl('en', pathname);
    return alternates;
}

export function getBlogPathsForSitemap() {
    return blogLocales.flatMap((locale) => {
        const basePath = { locale, pathname: '/blog' };
        const articlePaths = blogPosts.map((post) => ({
            locale,
            pathname: `/blog/${post.slug}`,
            lastModified: post.publishedAt,
        }));

        return [
            { ...basePath, lastModified: blogPosts[0]?.publishedAt || new Date().toISOString().slice(0, 10) },
            ...articlePaths,
        ];
    });
}
