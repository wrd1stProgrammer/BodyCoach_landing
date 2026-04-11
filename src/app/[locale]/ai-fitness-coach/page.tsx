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
    const page = getSeoLandingPage(locale, 'ai-fitness-coach');

    return buildPageMetadata({
        locale,
        pathname: '/ai-fitness-coach',
        title: page.metaTitle,
        description: page.metaDescription,
        keywords: page.keywords,
    });
}

export default async function AiFitnessCoachPage({ params }: PageParams) {
    const { locale } = await params;
    setRequestLocale(locale);

    const content = getSeoPageContent('ai-fitness-coach', locale);
    const page = getSeoLandingPage(locale, 'ai-fitness-coach');
    const jsonLd = [
        buildWebPageSchema({
            locale,
            pathname: '/ai-fitness-coach',
            title: page.metaTitle,
            description: page.metaDescription,
        }),
        buildSoftwareApplicationSchema({
            locale,
            pathname: '/ai-fitness-coach',
            description: page.metaDescription,
        }),
        buildBreadcrumbSchema({
            locale,
            slug: 'ai-fitness-coach',
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
