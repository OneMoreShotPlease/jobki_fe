import { Card, CardContent } from '@/components/ui/Card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/Scroll-area';

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
    { id: 2, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 3, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 4, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 5, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 6, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 7, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 8, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 9, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 10, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 11, title: 'a', content: 'a', createdAt: 'aa' },
    { id: 12, title: 'a', content: 'a', createdAt: 'aa' },
  ],
}: QuestionListProps) => {
  return (
    <Card className="py-1">
      <ScrollArea className="h-[400px] w-full rounded-md p-2">
        <CardContent>
          <Accordion type="single" collapsible>
            {questions.map((question) => (
              <AccordionItem value={`item-${question.id}`} key={question.id}>
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
