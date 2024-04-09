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
      <body>
        <div className="flex justify-center">
          <div className="h-full w-full min-w-[320px] max-w-[700px] border-2 border-solid border-green-600 text-left ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
