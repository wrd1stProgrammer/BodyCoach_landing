"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import TrackedStoreLink from '@/components/analytics/TrackedStoreLink';
import { appStoreUrl, playStoreUrl } from '@/lib/site';
import styles from './StickyCTA.module.css';

export default function StickyCTA() {
    const t = useTranslations('StickyCTA');
    const pathname = usePathname();
    const isBlogPage = pathname?.includes('/blog');
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past the hero (~600px)
            setVisible(window.scrollY > 600);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {!isBlogPage && visible && (
                <motion.div
                    className={styles.stickyBar}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 25 }}
                >
                    <div className={styles.inner}>
                        <div className={styles.left}>
                            <img src="/app-icon.png" alt="BodyCoach" className={styles.icon} />
                            <div className={styles.textWrap}>
                                <span className={styles.appName}>BodyCoach</span>
                                <span className={styles.tagline}>{t('tagline')}</span>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <TrackedStoreLink
                                href={appStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.storeBtn}
                                platform="app_store"
                                location="StickyCTA"
                            >
                                <img src="/appstore.png" alt="App Store" className={`${styles.badge} ${styles.appleBadge}`} />
                            </TrackedStoreLink>
                            <TrackedStoreLink
                                href={playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.storeBtn}
                                platform="play_store"
                                location="StickyCTA"
                            >
                                <img src="/playstore.png" alt="Google Play" className={`${styles.badge} ${styles.googleBadge}`} />
                            </TrackedStoreLink>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
