import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/home/Hero';
import CoachShowcase from '@/components/home/CoachShowcase';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import SocialProof from '@/components/home/SocialProof';
import FinalCTA from '@/components/home/FinalCTA';
import StructuredData from '@/components/seo/StructuredData';
import { getSeoHomeContent, type SeoLocale } from '@/lib/seo-content';
import {
    buildPageMetadata,
    buildSoftwareApplicationSchema,
    buildWebPageSchema,
    buildWebSiteSchema,
    isSeoLocale,
} from '@/lib/seo';

type HomePageProps = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
    const { locale } = await params;

    if (!isSeoLocale(locale)) {
        return {};
    }

    const seo = getSeoHomeContent(locale);

    return buildPageMetadata({
        locale,
        title: seo.metaTitle,
        description: seo.metaDescription,
        keywords: seo.metaKeywords,
    });
}

export default async function HomePage({ params }: HomePageProps) {
    const { locale } = await params;
    // Enable static rendering
    setRequestLocale(locale);

    const seoLocale: SeoLocale = isSeoLocale(locale) ? locale : 'en';
    const seo = getSeoHomeContent(seoLocale);
    const jsonLd = [
        buildWebSiteSchema(),
        buildWebPageSchema({
            locale: seoLocale,
            title: seo.metaTitle,
            description: seo.metaDescription,
        }),
        buildSoftwareApplicationSchema({
            locale: seoLocale,
            description: seo.metaDescription,
        }),
    ];

    return (
        <main>
            <StructuredData data={jsonLd} />
            <Hero />
            <CoachShowcase />
            <Features />
            <HowItWorks />
            <SocialProof />
            <FinalCTA />
        </main>
    );
}
