'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion';
import MainCard from './MainCard';

export default function PopularTag() {
  return (
    <MainCard
      cardTitle="자주 클릭된 태그"
      cardDescription="가장 최근에 등록된 질문을 확인해보세요"
      cardContent={
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
        </Accordion>
      }
      cardFooter="더보기"
    />
  );
}
