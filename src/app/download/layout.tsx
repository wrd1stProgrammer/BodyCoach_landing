import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BodyCoachAI - Redirecting...',
  description: 'Redirecting to App Store or Play Store',
  robots: { index: false, follow: false },
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
