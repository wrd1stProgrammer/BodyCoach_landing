import { Link } from '@/i18n/routing';
import type { SeoLocale } from '@/lib/seo-content';
import { getSeoHomeSectionContent } from '@/lib/seo-content';
import styles from './SeoSurface.module.css';

type HomeSeoSectionProps = {
    locale: SeoLocale;
};

export default function HomeSeoSection({ locale }: HomeSeoSectionProps) {
    const content = getSeoHomeSectionContent(locale);

    return (
        <section className={styles.section}>
            <div className={`main-container ${styles.sectionShell}`}>
                <div className={styles.sectionHeading}>
                    <p className={styles.kicker}>{content.badge}</p>
                    <h2 className={styles.sectionTitle}>{content.title}</h2>
                    <p className={styles.sectionDescription}>
                        {content.subtitle}
                    </p>
                </div>

                <div className={styles.relatedGrid}>
                    {content.previews.map((item) => (
                        <Link href={`/${item.slug}`} className={styles.relatedCard} key={item.slug}>
                            <span className={styles.relatedEyebrow}>{item.eyebrow}</span>
                            <h3 className={styles.relatedTitle}>{item.title}</h3>
                            <p className={styles.relatedDescription}>{item.description}</p>
                            <p className={styles.homeLinkLabel}>{content.linkLabel}</p>
                        </Link>
                    ))}
                </div>

                <div className={styles.sectionHeading}>
                    <p className={styles.kicker}>FAQ</p>
                    <h2 className={styles.sectionTitle}>{content.faqTitle}</h2>
                </div>

                <div className={styles.faqList}>
                    {content.faq.map((item) => (
                        <details className={styles.faqItem} key={item.question}>
                            <summary className={styles.faqQuestion}>{item.question}</summary>
                            <p className={styles.faqAnswer}>{item.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
