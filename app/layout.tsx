import type { Metadata } from 'next';

// These styles apply to every route in the application
import './globals.css';

export const metadata: Metadata = {
  title: 'Jobki',
  description: 'Jobki, 면접을 준비하는 분들을 위한 면접 질문 위키',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
