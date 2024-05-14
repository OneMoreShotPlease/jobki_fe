'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/Carousel';
import MainCard from './MainCard';

export default function TodayRank() {
  return (
    <MainCard
      cardTitle="오늘의 순위"
      cardDescription="질문/태그/유저"
      cardFooter=""
      cardContent={
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent className="p-4">1</CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent>2</CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent>3</CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      }
    />
  );
}
