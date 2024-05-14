import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/badge';

interface QuestionTagListProps {
  tagList?: string[];
}

const QuestionTagList = ({
  tagList = [
    'FE',
    'BE',
    'DEVOPS',
    'DB',
    'NETWORK',
    'SECURITY',
    'AI',
    'ML',
    'DATA',
    'CLOUD',
    'MOBILE',
    'GAME',
    'IOT',
    'BLOCKCHAIN',
    'OTHERS',
  ],
}: QuestionTagListProps) => {
  return (
    <div className="flex w-full flex-row flex-wrap gap-1 ">
      {tagList.map((tag, idx) => (
        <Badge
          className="border-green-600 bg-white text-green-600  hover:bg-green-600
          hover:text-white"
          key={idx}>
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default QuestionTagList;
