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
    const page = getSeoLandingPage(locale, 'workout-feedback');

    return buildPageMetadata({
        locale,
        pathname: '/workout-feedback',
        title: page.metaTitle,
        description: page.metaDescription,
        keywords: page.keywords,
    });
}

export default async function WorkoutFeedbackPage({ params }: PageParams) {
    const { locale } = await params;
    setRequestLocale(locale);

    const content = getSeoPageContent('workout-feedback', locale);
    const page = getSeoLandingPage(locale, 'workout-feedback');
    const jsonLd = [
        buildWebPageSchema({
            locale,
            pathname: '/workout-feedback',
            title: page.metaTitle,
            description: page.metaDescription,
        }),
        buildSoftwareApplicationSchema({
            locale,
            pathname: '/workout-feedback',
            description: page.metaDescription,
        }),
        buildBreadcrumbSchema({
            locale,
            slug: 'workout-feedback',
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
