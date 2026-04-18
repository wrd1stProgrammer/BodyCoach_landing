import { Link } from '@/i18n/routing';
import TrackedStoreLink from '@/components/analytics/TrackedStoreLink';
import { getBlogIndexCopy, type BlogLocale, type BlogPost } from '@/lib/blog-content';
import { appStoreUrl } from '@/lib/site';
import styles from './Blog.module.css';

type BlogArticleProps = {
    locale: BlogLocale;
    post: BlogPost;
    relatedPosts: BlogPost[];
};

const pillarLinkCopy = {
    en: {
        'ai-fitness-coach': { href: '/ai-fitness-coach', label: 'See the AI Fitness Coach page' },
        'workout-feedback': { href: '/workout-feedback', label: 'See the Workout Feedback page' },
        'healthy-routine': { href: '/healthy-routine', label: 'See the Healthy Routine page' },
    },
    ko: {
        'ai-fitness-coach': { href: '/ai-fitness-coach', label: 'AI 피트니스 코치 페이지 보기' },
        'workout-feedback': { href: '/workout-feedback', label: '운동 피드백 페이지 보기' },
        'healthy-routine': { href: '/healthy-routine', label: '건강한 루틴 페이지 보기' },
    },
    ja: {
        'ai-fitness-coach': { href: '/ai-fitness-coach', label: 'AIフィットネスコーチページを見る' },
        'workout-feedback': { href: '/workout-feedback', label: 'ワークアウトフィードバックページを見る' },
        'healthy-routine': { href: '/healthy-routine', label: '健康習慣ページを見る' },
    },
} as const;

function formatDate(locale: BlogLocale, value: string) {
    return new Intl.DateTimeFormat(locale === 'ko' ? 'ko-KR' : locale === 'ja' ? 'ja-JP' : 'en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }).format(new Date(value));
}

export default function BlogArticle({ locale, post, relatedPosts }: BlogArticleProps) {
    const copy = getBlogIndexCopy(locale);
    const pillarLink = pillarLinkCopy[locale][post.pillar];

    return (
        <main className={styles.page}>
            <article className={styles.articlePage}>
                <header className={styles.articleHeader}>
                    <div className={styles.articleColumn}>
                        <Link href="/blog" className={styles.backLink}>
                            {copy.backToBlog}
                        </Link>
                        <div className={styles.articleMetaRow}>
                            <span>{post.category}</span>
                            <span aria-hidden="true">·</span>
                            <span>{formatDate(locale, post.publishedAt)}</span>
                            <span aria-hidden="true">·</span>
                            <span>{post.readingTime}</span>
                        </div>
                        <h1 className={styles.articleTitle}>{post.title}</h1>
                        <p className={styles.articleLead}>{post.description}</p>
                        <p className={styles.articleNote}>{post.heroNote}</p>
                    </div>
                </header>

                <section className={styles.articleContentSection}>
                    <div className={styles.articleColumn}>
                        <section className={styles.articleIntro}>
                            <h2 className={styles.articleIntroTitle}>{post.audienceTitle}</h2>
                            <ul className={styles.articleIntroList}>
                                {post.audience.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {post.sections.map((section) => (
                            <section key={section.title} className={styles.contentSection}>
                                <h2 className={styles.contentTitle}>{section.title}</h2>
                                {section.paragraphs.map((paragraph) => (
                                    <p key={paragraph} className={styles.contentParagraph}>{paragraph}</p>
                                ))}
                                {section.bullets?.length ? (
                                    <ul className={styles.bulletList}>
                                        {section.bullets.map((bullet) => (
                                            <li key={bullet}>{bullet}</li>
                                        ))}
                                    </ul>
                                ) : null}
                            </section>
                        ))}

                        <section className={styles.faqSection}>
                            <h2 className={styles.contentTitle}>{post.faqTitle}</h2>
                            <div className={styles.faqList}>
                                {post.faq.map((item) => (
                                    <details className={styles.faqItem} key={item.question}>
                                        <summary className={styles.faqQuestion}>{item.question}</summary>
                                        <p className={styles.faqAnswer}>{item.answer}</p>
                                    </details>
                                ))}
                            </div>
                        </section>

                        <section className={styles.articleFooter}>
                            <h2 className={styles.articleFooterTitle}>{post.ctaTitle}</h2>
                            <p className={styles.articleFooterCopy}>{post.ctaCopy}</p>
                            <div className={styles.buttonRow}>
                                <TrackedStoreLink
                                    href={appStoreUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.primaryButton}
                                    platform="app_store"
                                    location="BlogArticleCTA"
                                >
                                    {copy.downloadCta}
                                </TrackedStoreLink>
                                <Link href={pillarLink.href} className={styles.secondaryTextLink}>
                                    {pillarLink.label}
                                </Link>
                            </div>
                        </section>

                        {relatedPosts.length ? (
                            <section className={styles.relatedSection}>
                                <h2 className={styles.contentTitle}>{copy.relatedReading}</h2>
                                <div className={styles.relatedList}>
                                    {relatedPosts.map((item) => (
                                        <Link key={item.slug} href={`/blog/${item.slug}`} className={styles.relatedLink}>
                                            <strong className={styles.relatedTitle}>{item.title}</strong>
                                            <span className={styles.relatedMeta}>{formatDate(locale, item.publishedAt)}</span>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        ) : null}
                    </div>
                </section>
            </article>
        </main>
    );
}
