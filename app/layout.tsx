import type { Metadata } from 'next';

// These styles apply to every route in the application
import './globals.css';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Jobki',
  description: 'Jobki, 면접을 준비하는 분들을 위한 면접 질문 위키',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className=" flex justify-center ">
          <div className="h-[100dvh] w-full min-w-[320px] max-w-[700px]  text-left ">
            <div className="flex h-auto w-full flex-col gap-4">
              <div className="flex h-[60px] w-full flex-row items-center justify-between pl-[16px] pr-[16px]  ">
                <Link href="/">
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-green-600">
                    JobKi
                  </h4>
                </Link>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-green-600">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    {/* user name 넣어주기 */}
                    <AvatarFallback>Me</AvatarFallback>
                  </Avatar>
                </h4>
              </div>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
