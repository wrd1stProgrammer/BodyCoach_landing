import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import SeoSurface from '@/components/seo/SeoSurface';
import StructuredData from '@/components/seo/StructuredData';
import { getSeoLandingPage, getSeoPageContent, type SeoLocale } from '@/lib/seo-content';
import {
    buildBreadcrumbSchema,
    buildFAQSchema,
    buildPageMetadata,
    buildSoftwareApplicationSchema,
    buildWebPageSchema,
} from '@/lib/seo';

type PageParams = {
    params: Promise<{ locale: SeoLocale }>;
};

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
    const { locale } = await params;
    const page = getSeoLandingPage(locale, 'healthy-routine');

    return buildPageMetadata({
        locale,
        pathname: '/healthy-routine',
        title: page.metaTitle,
        description: page.metaDescription,
        keywords: page.keywords,
    });
}

export default async function HealthyRoutinePage({ params }: PageParams) {
    const { locale } = await params;
    setRequestLocale(locale);

    const content = getSeoPageContent('healthy-routine', locale);
    const page = getSeoLandingPage(locale, 'healthy-routine');
    const jsonLd = [
        buildWebPageSchema({
            locale,
            pathname: '/healthy-routine',
            title: page.metaTitle,
            description: page.metaDescription,
        }),
        buildSoftwareApplicationSchema({
            locale,
            pathname: '/healthy-routine',
            description: page.metaDescription,
        }),
        buildBreadcrumbSchema({
            locale,
            slug: 'healthy-routine',
            title: page.title,
        }),
        buildFAQSchema(page.faq),
    ];

    return (
        <>
            <StructuredData data={jsonLd} />
            <SeoSurface locale={locale} content={content} />
        </>
    );
}
