'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SignalRoom.module.css';

export default function AdminLogin() {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }),
            });

            if (!response.ok) {
                const payload = await response.json().catch(() => ({ error: '로그인에 실패했습니다.' }));
                setError(payload.error || '로그인에 실패했습니다.');
                return;
            }

            router.refresh();
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className={styles.lockShell}>
            <div className={styles.lockCard}>
                <div className={styles.lockBadge}>Private Signal Room</div>
                <h1 className={styles.lockTitle}>유입 성과 대시보드</h1>
                <p className={styles.lockCopy}>
                    Threads 댓글별 유입, 자연 유입, 외부 유입, 그리고 스토어 클릭 전환을 한 화면에서 확인할 수 있습니다.
                </p>

                <form className={styles.lockForm} onSubmit={handleSubmit}>
                    <label className={styles.fieldLabel} htmlFor="admin-password">관리자 비밀번호</label>
                    <input
                        id="admin-password"
                        type="password"
                        className={styles.passwordInput}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="비밀번호를 입력하세요"
                        autoComplete="current-password"
                    />
                    <button type="submit" className={styles.primaryButton} disabled={submitting}>
                        {submitting ? '확인 중' : '대시보드 열기'}
                    </button>
                    {error ? <p className={styles.errorText}>{error}</p> : null}
                </form>
            </div>
        </div>
    );
}
