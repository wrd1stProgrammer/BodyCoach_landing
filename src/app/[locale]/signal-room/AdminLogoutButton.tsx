'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SignalRoom.module.css';

export default function AdminLogoutButton() {
    const router = useRouter();
    const [pending, setPending] = useState(false);

    const handleLogout = async () => {
        setPending(true);
        try {
            await fetch('/api/admin/logout', {
                method: 'POST',
            });
            router.refresh();
        } finally {
            setPending(false);
        }
    };

    return (
        <button type="button" className={styles.ghostButton} onClick={handleLogout} disabled={pending}>
            {pending ? '잠금 중' : '잠그기'}
        </button>
    );
}
