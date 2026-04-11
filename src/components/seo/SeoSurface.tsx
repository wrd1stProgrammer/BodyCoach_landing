import { Link } from '@/i18n/routing';
import type { SeoLocale, SeoPageContent } from '@/lib/seo-content';
import styles from './SeoSurface.module.css';

type SeoSurfaceProps = {
    locale: SeoLocale;
    content: SeoPageContent;
};

export default function SeoSurface({ locale, content }: SeoSurfaceProps) {
    return (
        <main className={styles.page} data-locale={locale}>
            <section className={styles.hero}>
                <div className={`main-container ${styles.heroGrid}`}>
                    <div className={styles.heroCopy}>
                        <p className={styles.badge}>{content.badge}</p>
                        <h1 className={styles.title}>{content.title}</h1>
                        <p className={styles.description}>{content.description}</p>

                        <div className={styles.actions}>
                            <a
                                href="https://apps.apple.com/kr/app/bodycoach-ai-diet-workout-log/id6756229086?l=en-GB"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.primaryButton}
                            >
                                {content.cta.primary}
                            </a>
                            <a
                                href="#seo-pages"
                                className={styles.secondaryButton}
                            >
                                {content.cta.secondary}
                            </a>
                        </div>

                        <p className={styles.note}>{content.cta.note}</p>
                    </div>

                    <aside className={styles.heroPanel} aria-label="SEO summary">
                        <div className={styles.panelHeader}>
                            <span className={styles.panelLabel}>{content.ui.panelLabel}</span>
                            <span className={styles.panelChip}>BodyCoach</span>
                        </div>
                        <p className={styles.panelSummary}>{content.summary}</p>
                        <div className={styles.metricGrid}>
                            {content.highlights.map((item) => (
                                <div className={styles.metricCard} key={item.label}>
                                    <span className={styles.metricLabel}>{item.label}</span>
                                    <strong className={styles.metricValue}>{item.value}</strong>
                                    <p className={styles.metricDetail}>{item.detail}</p>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </section>

            <section className={styles.section} id="seo-pages">
                <div className={`main-container ${styles.sectionShell}`}>
                    <div className={styles.sectionHeading}>
                        <p className={styles.kicker}>{content.ui.surfaceKicker}</p>
                        <h2 className={styles.sectionTitle}>{content.ui.surfaceTitle}</h2>
                        <p className={styles.sectionDescription}>{content.ui.surfaceDescription}</p>
                    </div>

                    <div className={styles.cardGrid}>
                        {content.sections.map((section) => (
                            <article className={styles.infoCard} key={section.title}>
                                <h3 className={styles.cardTitle}>{section.title}</h3>
                                <p className={styles.cardBody}>{section.body}</p>
                                <ul className={styles.bulletList}>
                                    {section.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={`main-container ${styles.sectionShell}`}>
                    <div className={styles.sectionHeading}>
                        <p className={styles.kicker}>{content.ui.faqKicker}</p>
                        <h2 className={styles.sectionTitle}>{content.ui.faqTitle}</h2>
                    </div>

                    <div className={styles.faqList}>
                        {content.faqs.map((faq) => (
                            <details className={styles.faqItem} key={faq.question}>
                                <summary className={styles.faqQuestion}>{faq.question}</summary>
                                <p className={styles.faqAnswer}>{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={`main-container ${styles.sectionShell}`}>
                    <div className={styles.sectionHeading}>
                        <p className={styles.kicker}>{content.ui.relatedKicker}</p>
                        <h2 className={styles.sectionTitle}>{content.ui.relatedTitle}</h2>
                        <p className={styles.sectionDescription}>{content.ui.relatedDescription}</p>
                    </div>

                    <div className={styles.relatedGrid}>
                        {content.related.map((item, index) => (
                            <Link href={`/${item.slug}`} className={styles.relatedCard} key={`${item.slug}-${index}`}>
                                <span className={styles.relatedEyebrow}>{item.eyebrow}</span>
                                <h3 className={styles.relatedTitle}>{item.title}</h3>
                                <p className={styles.relatedDescription}>{item.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
