import type { MetadataRoute } from 'next';
import { getBlogPathsForSitemap } from '@/lib/blog-content';
import { getLocalizedUrl } from '@/lib/site';
import { seoLandingPages } from '@/lib/seo';
import { routing } from '@/i18n/routing';

const sitemapPaths = [
    { pathname: '', changeFrequency: 'weekly', priority: 1 },
    ...seoLandingPages.map((page) => ({
        pathname: page.pathname,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    })),
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    const blogPaths = getBlogPathsForSitemap().map(({ locale, pathname, lastModified: blogLastModified }) => ({
        url: getLocalizedUrl(locale, pathname),
        lastModified: new Date(blogLastModified),
        changeFrequency: 'weekly' as const,
        priority: pathname === '/blog' ? 0.9 : 0.7,
    }));

    return [
        ...routing.locales.flatMap((locale) =>
        sitemapPaths.map(({ pathname, changeFrequency, priority }) => ({
            url: getLocalizedUrl(locale, pathname),
            lastModified,
            changeFrequency,
            priority,
        }))
        ),
        ...blogPaths,
    ];
}
