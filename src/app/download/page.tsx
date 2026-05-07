'use client';

import { useEffect } from 'react';

/**
 * BodyCoachAI Redirect Page
 * Instant redirection to App Store or Play Store based on device OS.
 * Optimized for TikTok marketing links.
 */
export default function DownloadPage() {
    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();
        
        // App Store links
        const IOS_URL = "https://apps.apple.com/app/id6756229086";
        const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.bodycoach.ai";
        
        // Redirection logic
        if (/iphone|ipad|ipod/.test(ua)) {
            window.location.replace(IOS_URL);
        } else if (/android/.test(ua)) {
            window.location.replace(ANDROID_URL);
        } else {
            // Fallback for desktop: go to home page
            window.location.replace("/");
        }
    }, []);

    return (
        <div style={{ 
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center',
            textAlign: 'center',
            background: '#000',
            color: '#fff'
        }}>
            <p style={{ fontSize: '1rem', fontFamily: 'sans-serif' }}>Redirecting to Store...</p>
        </div>
    );
}
