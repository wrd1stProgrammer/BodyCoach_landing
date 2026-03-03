import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import styles from './Navbar.module.css';

export default function Navbar() {
    const t = useTranslations('Index');

    return (
        <header className={styles.header}>
            <div className={`main-container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <img src="/app-icon.png" alt="BodyCoach Icon" className={styles.appIcon} />
                    BodyCoach
                </Link>
                <div className={styles.actions}>
                    <LanguageSwitcher />
                    <div className={styles.storeLinks}>
                        <a href="https://apps.apple.com/kr/app/bodycoach-ai-diet-workout-log/id6756229086?l=en-GB" target="_blank" rel="noopener noreferrer" className={styles.navStoreBtn}>
                            <img src="/appstore.png" alt="App Store" className={`${styles.navStoreBadge} ${styles.navAppleBadge}`} />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.bodycode" target="_blank" rel="noopener noreferrer" className={styles.navStoreBtn}>
                            <img src="/playstore.png" alt="Google Play" className={`${styles.navStoreBadge} ${styles.navGoogleBadge}`} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
