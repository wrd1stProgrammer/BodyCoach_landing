"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
    const t = useTranslations('HowItWorks');

    const steps = [
        {
            number: '01',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
            ),
            title: t('step1Title'),
            desc: t('step1Desc'),
        },
        {
            number: '02',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            ),
            title: t('step2Title'),
            desc: t('step2Desc'),
        },
        {
            number: '03',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
            ),
            title: t('step3Title'),
            desc: t('step3Desc'),
        },
    ];

    return (
        <section className={styles.section}>
            <div className={`main-container ${styles.container}`}>
                <div className={styles.header}>
                    <div className={styles.badge}>{t('badge')}</div>
                    <h2 className={styles.title}>{t('title')}</h2>
                    <p className={styles.subtitle}>{t('subtitle')}</p>
                </div>

                <div className={styles.stepsGrid}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className={styles.stepCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div className={styles.stepNumber}>{step.number}</div>
                            <div className={styles.stepIconWrap}>
                                {step.icon}
                            </div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>

                            {/* Connector arrow between steps */}
                            {index < steps.length - 1 && (
                                <div className={styles.connector}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
