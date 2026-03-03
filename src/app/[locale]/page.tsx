import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/home/Hero';
import CoachShowcase from '@/components/home/CoachShowcase';
import Features from '@/components/home/Features';
import SocialProof from '@/components/home/SocialProof';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    // Enable static rendering
    setRequestLocale(locale);

    return (
        <main>
            <Hero />
            <CoachShowcase />
            <Features />
            <SocialProof />
        </main>
    );
}
