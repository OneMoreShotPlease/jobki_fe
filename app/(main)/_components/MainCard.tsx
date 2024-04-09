import DefaultBox from '@/components/common/DefaultBox';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { ReactNode } from 'react';

interface MainCardProps {
  cardTitle?: string;
  cardDescription?: string;
  cardContent?: ReactNode;
  cardFooter?: ReactNode;
}

export default function MainCard({
  cardTitle,
  cardDescription,
  cardContent,
  cardFooter,
}: MainCardProps) {
  return (
    <DefaultBox>
      <Card>
        <CardHeader>
          <CardTitle>{cardTitle}</CardTitle>
          <CardDescription>{cardDescription}</CardDescription>
        </CardHeader>
        <CardContent>{cardContent}</CardContent>
        <CardFooter className="justify-end">{cardFooter}</CardFooter>
      </Card>
    </DefaultBox>
  );
}
