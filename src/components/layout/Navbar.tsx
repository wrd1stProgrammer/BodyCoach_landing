"use client";

import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import TrackedStoreLink from '@/components/analytics/TrackedStoreLink';
import { appStoreUrl, playStoreUrl } from '@/lib/site';
import { isBlogLocale } from '@/lib/blog-content';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import styles from './Navbar.module.css';

export default function Navbar({ locale }: { locale: string }) {
    const pathname = usePathname();
    const isBlogPage = pathname?.includes('/blog');

    return (
        <header className={`${styles.header} ${isBlogPage ? styles.blogHeader : ''}`}>
            <div className={`main-container ${styles.navContainer}`}>
                <div className={styles.brandGroup}>
                    <Link href="/" className={styles.logo}>
                        <img src="/app-icon.png" alt="BodyCoach Icon" className={styles.appIcon} />
                        BodyCoach
                    </Link>
                    {isBlogLocale(locale) ? (
                        <Link href="/blog" className={styles.navLink}>
                            Blog
                        </Link>
                    ) : (
                        <Link href="/blog" locale="en" className={styles.navLink}>
                            Blog
                        </Link>
                    )}
                </div>
                <div className={styles.actions}>
                    <LanguageSwitcher tone={isBlogPage ? 'editorial' : 'default'} />
                    <div className={styles.storeLinks}>
                        <TrackedStoreLink href={appStoreUrl} target="_blank" rel="noopener noreferrer" className={styles.navStoreBtn} platform="app_store" location="Navbar">
                            <img src="/appstore.png" alt="App Store" className={`${styles.navStoreBadge} ${styles.navAppleBadge}`} />
                        </TrackedStoreLink>
                        <TrackedStoreLink href={playStoreUrl} target="_blank" rel="noopener noreferrer" className={styles.navStoreBtn} platform="play_store" location="Navbar">
                            <img src="/playstore.png" alt="Google Play" className={`${styles.navStoreBadge} ${styles.navGoogleBadge}`} />
                        </TrackedStoreLink>
                    </div>
                </div>
            </div>
        </header>
    );
}
