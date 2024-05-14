import { Icons } from '@/components/icons';
import dynamic from 'next/dynamic';
import { Ref } from 'react';

import ReactQuill, { ReactQuillProps } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface ForwardedQuillComponent extends ReactQuillProps {
  forwardedRef: Ref<ReactQuill>;
}

const QuillNoSSRWrapper = dynamic(
  async () => {
    const { default: QuillComponent } = await import('react-quill');
    const Quill = ({ forwardedRef, ...props }: ForwardedQuillComponent) => (
      <QuillComponent ref={forwardedRef} {...props} />
    );
    return Quill;
  },
  {
    loading: () => (
      <div className="flex flex-row items-center">
        텍스트 에디터를 불러오고 있습니다 &nbsp;
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      </div>
    ),
    ssr: false,
  },
);

export default QuillNoSSRWrapper;
