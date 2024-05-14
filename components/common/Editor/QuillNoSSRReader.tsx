import dynamic from 'next/dynamic';
import React from 'react';
import 'react-quill/dist/quill.snow.css';

// 동적으로 로드되는 Quill 컴포넌트 정의
const QuillComponentWithNoSSR = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => (
    <div className="quill">
      <div className="ql-container ql-bubble ql-disabled">
        <div
          className="ql-editor"
          data-gramm="false"
          dangerouslySetInnerHTML={{ __html: 'Loading...' }}
        />
      </div>
    </div>
  ),
});

const modules = {
  toolbar: false,
};

// HOC 정의
export function withQuillNoSSR() {
  return function QuillNoSSRReader({ content }: { content: string }) {
    return <QuillComponentWithNoSSR theme="snow" readOnly value={content} modules={modules} />;
  };
}
