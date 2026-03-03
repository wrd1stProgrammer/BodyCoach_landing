import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '../../styles/globals.css';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
    title: {
        template: '%s | BodyCoach',
        default: 'BodyCoach - Your Personal AI Diet, Fitness Coach & Calorie Tracker',
    },
    description: 'Track your meals, calories, and workouts. Your AI coach analyzes them and provides immediate, actionable feedback to build a sustainable routine.',
    keywords: ['AI Diet Coach', 'Calorie Tracker', 'Fitness App', 'Meal Logger', 'Macro Tracker', 'BodyCoach'],
    metadataBase: new URL('https://bodycoach.ai'), // Change to actual domain when you have one
    alternates: {
        languages: {
            'en': '/en',
            'ko': '/ko',
            'ja': '/ja',
            'zh': '/zh',
            'es': '/es',
            'es-MX': '/es-MX',
        },
    },
};

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
                <Analytics />
            </body>
        </html>
    );
}
