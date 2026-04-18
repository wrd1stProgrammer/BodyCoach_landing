export const siteConfig = {
    name: 'BodyCoach',
    url: 'https://www.bodycoachai.app',
    defaultLocale: 'en',
    locales: ['en', 'ko', 'ja', 'zh', 'es', 'es-MX'],
} as const;

export const appStoreUrl = 'https://apps.apple.com/kr/app/bodycoach-ai-diet-workout-log/id6756229086?l=en-GB';
export const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.bodycode';

export function getLocalizedUrl(locale: string, pathname = ''): string {
    const normalizedPathname = pathname
        ? pathname.startsWith('/')
            ? pathname
            : `/${pathname}`
        : '';

    return `${siteConfig.url}/${locale}${normalizedPathname}`;
}
