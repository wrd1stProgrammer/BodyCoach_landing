import type { Metadata } from 'next';
import { getSeoHomeContent, seoLandingSlugs, type SeoFaq, type SeoPageSlug } from '@/lib/seo-content';
import { appStoreUrl, getLocalizedUrl, playStoreUrl, siteConfig } from '@/lib/site';
import type { Locale } from '@/lib/seo-content';

export function isSeoLocale(locale: string): locale is Locale {
    return siteConfig.locales.some((value) => value === locale);
}

export function buildSiteMetadata(): Metadata {
    const home = getSeoHomeContent(siteConfig.defaultLocale);

    return {
        title: {
            template: '%s | BodyCoach',
            default: 'BodyCoach - Your Personal AI Diet, Fitness Coach & Calorie Tracker',
        },
        description: home.metaDescription,
        keywords: home.metaKeywords,
        metadataBase: new URL(siteConfig.url),
        openGraph: {
            siteName: siteConfig.name,
            images: [
                {
                    url: `${siteConfig.url}/opengraph-image.png`,
                    width: 1024,
                    height: 500,
                    alt: siteConfig.name,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            images: [`${siteConfig.url}/opengraph-image.png`],
        },
    };
}

export const seoLandingPages = seoLandingSlugs.map((slug) => ({
    slug,
    pathname: `/${slug}`,
}));

export function getLanguageAlternates(pathname = ''): Record<string, string> {
    const alternates = Object.fromEntries(
        siteConfig.locales.map((locale) => [locale, getLocalizedUrl(locale, pathname)])
    );

    alternates['x-default'] = getLocalizedUrl(siteConfig.defaultLocale, pathname);

    return alternates;
}

export function buildPageMetadata({
    locale,
    pathname = '',
    title,
    description,
    keywords,
}: {
    locale: Locale;
    pathname?: string;
    title: string;
    description: string;
    keywords: string[];
}): Metadata {
    const url = getLocalizedUrl(locale, pathname);

    return {
        metadataBase: new URL(siteConfig.url),
        title,
        description,
        keywords,
        alternates: {
            canonical: url,
            languages: getLanguageAlternates(pathname),
        },
        openGraph: {
            type: 'website',
            url,
            title,
            description,
            siteName: siteConfig.name,
            images: [
                {
                    url: `${siteConfig.url}/opengraph-image.png`,
                    width: 1024,
                    height: 500,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [`${siteConfig.url}/opengraph-image.png`],
        },
    };
}

export function buildJsonLdGraph(data: object[]) {
    return {
        '@context': 'https://schema.org',
        '@graph': data,
    };
}

export function buildWebSiteSchema() {
    return {
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
    };
}

export function buildWebPageSchema({
    locale,
    pathname = '',
    title,
    description,
}: {
    locale: Locale;
    pathname?: string;
    title: string;
    description: string;
}) {
    const url = getLocalizedUrl(locale, pathname);

    return {
        '@type': 'WebPage',
        name: title,
        description,
        url,
        inLanguage: locale,
        isPartOf: {
            '@type': 'WebSite',
            name: siteConfig.name,
            url: siteConfig.url,
        },
    };
}

export function buildSoftwareApplicationSchema({
    locale,
    pathname = '',
    description,
}: {
    locale: Locale;
    pathname?: string;
    description: string;
}) {
    return {
        '@type': 'SoftwareApplication',
        name: siteConfig.name,
        applicationCategory: 'HealthApplication',
        operatingSystem: 'iOS, Android',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        description,
        url: getLocalizedUrl(locale, pathname),
        image: `${siteConfig.url}/app-icon.png`,
        downloadUrl: appStoreUrl,
        sameAs: [appStoreUrl, playStoreUrl, 'https://www.instagram.com/bodycoach_ai/', 'https://x.com/bodycode_'],
    };
}

export function buildOrganizationSchema() {
    return {
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/app-icon.png`,
        sameAs: ['https://www.instagram.com/bodycoach_ai/', 'https://x.com/bodycode_'],
    };
}

export function buildFAQSchema(faq: SeoFaq[]) {
    return {
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };
}

export function buildBreadcrumbSchema({
    locale,
    slug,
    title,
}: {
    locale: Locale;
    slug: SeoPageSlug;
    title: string;
}) {
    return {
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
                name: title,
                item: getLocalizedUrl(locale, `/${slug}`),
            },
        ],
    };
}
