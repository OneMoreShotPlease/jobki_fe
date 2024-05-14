'use client';
import EditorComponent from '@/components/common/Editor/EditorComponent';
import QuestionDetailCard from '@/components/common/Question/QuestionDetailCard';
import QuestionTagList from '@/components/common/Question/QuestionTagList';
import { QuestionTextArea } from '@/components/common/Question/QuestionTextArea';
import QuestionTitle from '@/components/common/Question/QuestionTitle';
import { useState } from 'react';

const QuestionDetailPage = ({ params }: { params: { id: string } }) => {
  const [content, setContent] = useState('');
  return (
    <div className="flex w-full flex-col gap-4">
      <QuestionTitle title="QuestionTitle" />
      <QuestionTagList />
      <QuestionTextArea />
      <QuestionDetailCard />
      {/* <EditorComponent content={content} setContent={setContent} /> */}
    </div>
  );
};

export default QuestionDetailPage;
