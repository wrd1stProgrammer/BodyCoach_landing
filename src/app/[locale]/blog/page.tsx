import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import BlogIndex from '@/components/blog/BlogIndex';
import StructuredData from '@/components/seo/StructuredData';
import { buildWebPageSchema, buildWebSiteSchema } from '@/lib/seo';
import { getBlogIndexCopy, getBlogLanguageAlternates, getBlogPosts, isBlogLocale, type BlogLocale } from '@/lib/blog-content';
import { getLocalizedUrl, siteConfig } from '@/lib/site';

type BlogIndexPageProps = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: BlogIndexPageProps): Promise<Metadata> {
    const { locale } = await params;
    if (!isBlogLocale(locale)) {
        return {};
    }

    const copy = getBlogIndexCopy(locale);
    const pathname = '/blog';
    const url = getLocalizedUrl(locale, pathname);

    return {
        metadataBase: new URL(siteConfig.url),
        title: copy.title,
        description: copy.description,
        alternates: {
            canonical: url,
            languages: getBlogLanguageAlternates(pathname),
        },
        openGraph: {
            type: 'website',
            siteName: siteConfig.name,
            url,
            title: copy.title,
            description: copy.description,
            images: [
                {
                    url: `${siteConfig.url}/opengraph-image.png`,
                    width: 1200,
                    height: 630,
                    alt: copy.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: copy.title,
            description: copy.description,
            images: [`${siteConfig.url}/opengraph-image.png`],
        },
    };
}

export default async function BlogIndexPage({ params }: BlogIndexPageProps) {
    const { locale } = await params;
    if (!isBlogLocale(locale)) {
        notFound();
    }

    setRequestLocale(locale);
    const copy = getBlogIndexCopy(locale);
    const posts = getBlogPosts(locale);
    const jsonLd = [
        buildWebSiteSchema(),
        buildWebPageSchema({
            locale,
            pathname: '/blog',
            title: copy.title,
            description: copy.description,
        }),
        {
            '@type': 'CollectionPage',
            name: copy.title,
            description: copy.description,
            url: getLocalizedUrl(locale, '/blog'),
        },
        {
            '@type': 'ItemList',
            itemListElement: posts.map((post, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: getLocalizedUrl(locale, `/blog/${post.slug}`),
                name: post.title,
            })),
        },
    ];

    return (
        <>
            <StructuredData data={jsonLd} />
            <BlogIndex locale={locale as BlogLocale} copy={copy} posts={posts} />
        </>
    );
}
