'use client';

import { useRef, useState } from 'react';
import QuillNoSSRWrapper from './QuillNoSSRWrapper';
import ReactQuill from 'react-quill';
import { withQuillNoSSR } from './QuillNoSSRReader';

interface EditorComponentProps {
  content: string;
  setContent: (content: string) => void;
}

const EditorComponent = ({ content, setContent }: EditorComponentProps) => {
  const quillInstance = useRef<ReactQuill>(null);
  const toolbarOptions = [
    [{ header: [2, false] }],
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image'],

    [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent

    // custom dropdown

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ align: [] }],

    ['clean'], // remove formatting button
  ];
  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <>
      <QuillNoSSRWrapper
        forwardedRef={quillInstance}
        value={content}
        onChange={setContent}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력해주세요."
      />
    </>
  );
};

export default EditorComponent;
