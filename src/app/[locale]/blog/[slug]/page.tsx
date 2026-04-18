import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import BlogArticle from '@/components/blog/BlogArticle';
import StructuredData from '@/components/seo/StructuredData';
import { buildFAQSchema, buildWebPageSchema } from '@/lib/seo';
import {
    blogSlugs,
    getBlogIndexCopy,
    getBlogLanguageAlternates,
    getBlogPost,
    getRelatedBlogPosts,
    isBlogLocale,
    type BlogLocale,
} from '@/lib/blog-content';
import { getLocalizedUrl, siteConfig } from '@/lib/site';

type BlogArticlePageProps = {
    params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
    return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
    const { locale, slug } = await params;
    if (!isBlogLocale(locale)) {
        return {};
    }

    const post = getBlogPost(locale, slug);
    if (!post) {
        return {};
    }

    const pathname = `/blog/${post.slug}`;
    const url = getLocalizedUrl(locale, pathname);

    return {
        metadataBase: new URL(siteConfig.url),
        title: post.title,
        description: post.description,
        keywords: post.keywords,
        alternates: {
            canonical: url,
            languages: getBlogLanguageAlternates(pathname),
        },
        openGraph: {
            type: 'article',
            siteName: siteConfig.name,
            url,
            title: post.title,
            description: post.description,
            publishedTime: post.publishedAt,
            images: [
                {
                    url: `${siteConfig.url}${post.cover}`,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [`${siteConfig.url}${post.cover}`],
        },
    };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
    const { locale, slug } = await params;
    if (!isBlogLocale(locale)) {
        notFound();
    }

    setRequestLocale(locale);
    const post = getBlogPost(locale, slug);
    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedBlogPosts(locale, post.slug);
    const copy = getBlogIndexCopy(locale);
    const pathname = `/blog/${post.slug}`;
    const jsonLd = [
        buildWebPageSchema({
            locale,
            pathname,
            title: post.title,
            description: post.description,
        }),
        buildFAQSchema(post.faq),
        {
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            author: {
                '@type': 'Organization',
                name: copy.editorialTeam,
            },
            publisher: {
                '@type': 'Organization',
                name: siteConfig.name,
                logo: {
                    '@type': 'ImageObject',
                    url: `${siteConfig.url}/app-icon.png`,
                },
            },
            image: `${siteConfig.url}${post.cover}`,
            mainEntityOfPage: getLocalizedUrl(locale, pathname),
            keywords: post.keywords.join(', '),
            articleSection: post.category,
            inLanguage: locale,
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: siteConfig.name,
                    item: getLocalizedUrl(locale),
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: copy.blogLabel,
                    item: getLocalizedUrl(locale, '/blog'),
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: post.title,
                    item: getLocalizedUrl(locale, pathname),
                },
            ],
        },
    ];

    return (
        <>
            <StructuredData data={jsonLd} />
            <BlogArticle locale={locale as BlogLocale} post={post} relatedPosts={relatedPosts} />
        </>
    );
}
