import { ReactNode } from 'react';

//w-full, pr-[16px], pl-[16px]을 가진 div 박스
interface DefaultBoxProps {
  children?: ReactNode;
}

export default function DefaultBox({ children }: DefaultBoxProps) {
  return <div className="w-full pl-[16px] pr-[16px]">{children}</div>;
}
