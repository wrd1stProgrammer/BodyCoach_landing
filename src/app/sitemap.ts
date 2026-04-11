import type { MetadataRoute } from 'next';
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

    return routing.locales.flatMap((locale) =>
        sitemapPaths.map(({ pathname, changeFrequency, priority }) => ({
            url: getLocalizedUrl(locale, pathname),
            lastModified,
            changeFrequency,
            priority,
        }))
    );
}
