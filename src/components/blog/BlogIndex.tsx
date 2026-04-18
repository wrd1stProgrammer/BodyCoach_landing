import { Link } from '@/i18n/routing';
import type { BlogIndexCopy, BlogLocale, BlogPost } from '@/lib/blog-content';
import styles from './Blog.module.css';

type BlogIndexProps = {
    locale: BlogLocale;
    copy: BlogIndexCopy;
    posts: BlogPost[];
};

function formatDate(locale: BlogLocale, value: string) {
    return new Intl.DateTimeFormat(locale === 'ko' ? 'ko-KR' : locale === 'ja' ? 'ja-JP' : 'en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }).format(new Date(value));
}

export default function BlogIndex({ locale, copy, posts }: BlogIndexProps) {
    return (
        <main className={styles.page}>
            <section className={styles.indexIntro}>
                <div className={styles.centerColumn}>
                    <p className={styles.eyebrow}>{copy.blogLabel}</p>
                    <h1 className={styles.indexTitle}>{copy.heroTitle}</h1>
                    <p className={styles.indexSubtitle}>{copy.heroSubtitle}</p>
                </div>
            </section>

            <section className={styles.indexListSection}>
                <div className={styles.listColumn}>
                    {posts.length === 0 ? (
                        <div className={styles.emptyState}>
                            <h2>{copy.emptyTitle}</h2>
                            <p>{copy.emptyCopy}</p>
                        </div>
                    ) : (
                        <div className={styles.postList}>
                            {posts.map((post) => (
                                <article className={styles.postItem} key={post.slug}>
                                    <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                                        <h2 className={styles.postTitle}>{post.title}</h2>
                                        <div className={styles.postMetaRow}>
                                            <span className={styles.postDate}>{formatDate(locale, post.publishedAt)}</span>
                                            <span aria-hidden="true">·</span>
                                            <span className={styles.postDate}>{post.readingTime}</span>
                                        </div>
                                        <p className={styles.postExcerpt}>{post.excerpt}</p>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
