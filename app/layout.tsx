import type { Metadata } from 'next';

// These styles apply to every route in the application
import './globals.css';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar';
import Link from 'next/link';
import SearchInput from '@/components/common/SearchInput';
import { UserMenu } from '@/components/common/UserMenu';

export const metadata: Metadata = {
  title: 'Jobki',
  description: 'Jobki, 면접을 준비하는 분들을 위한 면접 질문 위키',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center px-4">
          <div className="h-[100dvh] w-full min-w-[280px] max-w-[700px] text-left ">
            <div className="flex h-auto w-full flex-col gap-4">
              <div className="flex h-[60px] w-full flex-row items-center justify-between px-2 ">
                <Link href="/">
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-green-600">
                    JobKi
                  </h4>
                </Link>
                <UserMenu>
                  <Avatar className="transition duration-300 ease-in-out hover:shadow-lg focus:border-none focus:outline-none dark:hover:shadow-black/30">
                    <AvatarImage className="hover:scale-110 " src="https://github.com/shadcn.png" />
                    {/* user name 넣어주기 */}
                    <AvatarFallback>Me</AvatarFallback>
                  </Avatar>
                </UserMenu>
              </div>
              <div className="flex flex-col gap-2 px-2">
                <SearchInput />
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
