import { setRequestLocale } from 'next-intl/server';
import styles from '../legal.module.css';

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <span className={styles.lastUpdated}>Last Updated: December 19, 2025</span>

            <div className={styles.content}>
                <h2>1. Introduction</h2>
                <p>Minsik Chae ("we," "our," or "us") operates the <strong>BodyCoach</strong> mobile application (the "App"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
                <p>By using the Service, you agree to the collection and use of information in accordance with this policy.</p>

                <h2>2. Information Collection and Use</h2>
                <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

                <strong>Types of Data Collected</strong>
                <ul>
                    <li><strong>Personal Information:</strong> While using our App, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This includes:
                        <ul>
                            <li><strong>Email Address</strong> (for account management and support)</li>
                        </ul>
                    </li>
                    <li><strong>Physical & Health Data (User Input):</strong> To provide the core features of BodyCoach (such as diet and exercise recommendations), we collect specific physical metadata that you voluntarily input into the App. This includes:
                        <ul>
                            <li><strong>Physical Metadata</strong> (e.g., height, weight, body composition, fitness goals, and other related metrics).</li>
                            <li>This data is used solely to generate personalized feedback and content within the App.</li>
                        </ul>
                    </li>
                </ul>

                <h2>3. Use of Data</h2>
                <p>BodyCoach uses the collected data for the various purposes:</p>
                <ul>
                    <li>To provide and maintain the Service.</li>
                    <li>To personalize your experience and deliver content relevant to your physical profile.</li>
                    <li>To notify you about changes to our Service.</li>
                    <li>To provide customer support.</li>
                    <li>To monitor the usage of the Service.</li>
                    <li>To detect, prevent, and address technical issues.</li>
                </ul>

                <h2>4. Data Retention</h2>
                <p>We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.</p>

                <h2>5. Disclosure of Data</h2>
                <p>We do not sell your personal data. We may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                <ul>
                    <li>Comply with a legal obligation.</li>
                    <li>Protect and defend the rights or property of Minsik Chae.</li>
                    <li>Prevent or investigate possible wrongdoing in connection with the Service.</li>
                    <li>Protect the personal safety of users of the Service or the public.</li>
                </ul>

                <h2>6. Security of Data</h2>
                <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

                <h2>7. Service Providers</h2>
                <p>We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

                <h2>8. Children's Privacy</h2>
                <p>Our Service does not address anyone under the age of 13 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your Children have provided us with Personal Data, please contact us.</p>

                <h2>9. Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

                <h2>10. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy or wish to request the deletion of your data, please contact us:</p>
                <ul>
                    <li><strong>By email:</strong> kicoa24@gmail.com</li>
                    <li><strong>Developer:</strong> Minsik Chae</li>
                </ul>
            </div>
        </main>
    );
}
