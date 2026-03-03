"use client";

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styles from './Features.module.css';

export default function Features() {
    const t = useTranslations('Features');
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            id: 0,
            title: t('feature1Title'),
            desc: t('feature1Desc'),
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                </svg>
            ),
            imageSrc: "/landing-coach.PNG",
        },
        {
            id: 1,
            title: t('feature2Title'),
            desc: t('feature2Desc'),
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
            ),
            imageSrc: "/landing-chat.PNG",
        },
        {
            id: 2,
            title: t('feature3Title'),
            desc: t('feature3Desc'),
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
            ),
            imageSrc: "/landing-report.PNG",
        },
        {
            id: 3,
            title: t('feature4Title'),
            desc: t('feature4Desc'),
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            ),
            imageSrc: "/landing-search.PNG",
        }
    ];

    return (
        <section className={styles.section}>
            <div className={`main-container ${styles.container}`}>

                <div className={styles.textContent}>
                    <div className={styles.badge}>{t('badge')}</div>
                    <h2 className={styles.title}>{t('title')}</h2>
                    <p className={styles.subtitle}>{t('subtitle')}</p>

                    <div className={styles.featureList}>
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                className={`${styles.featureBox} ${activeFeature === index ? styles.active : ''}`}
                                onClick={() => setActiveFeature(index)}
                            >
                                <div className={styles.featureIconWrap}>
                                    {feature.icon}
                                </div>
                                <div className={styles.featureTextWrap}>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <AnimatePresence>
                                        {activeFeature === index && (
                                            <motion.p
                                                className={styles.featureDesc}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {feature.desc}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.visualContent}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFeature}
                            className={styles.mockupContainer}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className={styles.phoneMockup}>
                                <img
                                    src={features[activeFeature].imageSrc}
                                    alt={features[activeFeature].title}
                                    className={styles.featureImage}
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
