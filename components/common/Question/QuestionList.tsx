'use client';
import { Card, CardContent } from '@/components/ui/Card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Question {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

interface QuestionListProps {
  questions?: Question[];
}

const QuestionList = ({
  questions = [
    { id: 1, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 1, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 1, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 1, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 1, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 1, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 1, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 1, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 1, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 1, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 1, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 1, title: 'a', content: 'a', createdAt: 'aa' },
  ],
}: QuestionListProps) => {
  return (
    <Card className="py-1">
      <ScrollArea className="h-[400px] w-full rounded-md p-2">
        <CardContent>
          <Accordion type="single" collapsible>
            {questions.map((question, idx) => (
              <AccordionItem value="item-1" key={question.id}>
                <AccordionTrigger>{question.title}</AccordionTrigger>
                <AccordionContent>{question.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

export default QuestionList;
