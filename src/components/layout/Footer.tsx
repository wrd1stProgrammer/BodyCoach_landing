"use client";

import { Link } from '@/i18n/routing';
import { track } from '@vercel/analytics';
import styles from './Footer.module.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`main-container ${styles.footerContainer}`}>

                {/* Brand & Download Column */}
                <div className={styles.brandColumn}>
                    <div className={styles.brand}>
                        <img src="/app-icon.png" alt="BodyCoach Icon" className={styles.appIcon} />
                        <span className={styles.logo}>BodyCoach</span>
                    </div>

                    <p className={styles.downloadText}>Download BodyCoach</p>

                    <div className={styles.storeButtons}>
                        <a href="https://apps.apple.com/kr/app/bodycoach-ai-diet-workout-log/id6756229086?l=en-GB" target="_blank" rel="noopener noreferrer" onClick={() => track('App_Store_Clicked', { location: 'Footer' })}>
                            <img src="/appstore.png" alt="Download on the App Store" className={`${styles.storeBadge} ${styles.appleBadge}`} />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.bodycode" target="_blank" rel="noopener noreferrer" onClick={() => track('Google_Play_Clicked', { location: 'Footer' })}>
                            <img src="/playstore.png" alt="Get it on Google Play" className={`${styles.storeBadge} ${styles.googleBadge}`} />
                        </a>
                    </div>
                </div>

                {/* Links Columns */}
                <div className={styles.linksColumns}>
                    <div className={styles.linkGroup}>
                        <h4>Legal</h4>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of use</Link>
                    </div>

                    <div className={styles.linkGroup}>
                        <h4>Company</h4>
                        <a href="mailto:kicoa24@gmail.com">Contact</a>
                    </div>
                </div>

            </div>

            {/* Bottom Bar: Copyright & Socials */}
            <div className={styles.bottomBarWrapper}>
                <div className={`main-container ${styles.bottomBar}`}>
                    <p>&copy; Copyright {year}, All rights reserved</p>

                    <div className={styles.socialLinks}>
                        <a href="https://www.instagram.com/bodycoach_ai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" onClick={() => track('Instagram_Clicked')}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="https://x.com/bodycode_" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" onClick={() => track('Twitter_X_Clicked')}>
                            <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
