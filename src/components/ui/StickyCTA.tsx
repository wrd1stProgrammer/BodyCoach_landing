"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics';
import styles from './StickyCTA.module.css';

export default function StickyCTA() {
    const t = useTranslations('StickyCTA');
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
            {visible && (
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
                            <a
                                href="https://apps.apple.com/kr/app/bodycoach-ai-diet-workout-log/id6756229086?l=en-GB"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.storeBtn}
                                onClick={() => track('App_Store_Clicked', { location: 'StickyCTA' })}
                            >
                                <img src="/appstore.png" alt="App Store" className={`${styles.badge} ${styles.appleBadge}`} />
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.bodycode"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.storeBtn}
                                onClick={() => track('Google_Play_Clicked', { location: 'StickyCTA' })}
                            >
                                <img src="/playstore.png" alt="Google Play" className={`${styles.badge} ${styles.googleBadge}`} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
