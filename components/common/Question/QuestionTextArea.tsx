import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export function QuestionTextArea() {
  return (
    <Card className="grid w-full gap-2 p-4">
      <Textarea
        placeholder="Type your message here."
        className="focus-visible:ring-1 focus-visible:ring-green-600"
      />
      <Button className="bg-green-600">Send message</Button>
    </Card>
  );
}
