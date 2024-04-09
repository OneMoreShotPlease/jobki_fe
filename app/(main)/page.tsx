import SearchInput from '@/components/common/SearchInput';
import DefaultBox from '@/components/common/DefaultBox';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
  Accordion,
} from '@/components/ui/React-accordian';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
export default function Home() {
  return (
    <div className="flex h-auto w-full flex-col gap-4">
      {/* 
      헤더: 로고 - 알림/검색/로그인
      */}
      <div className="flex h-[60px] w-full flex-row items-center justify-between pl-[16px] pr-[16px]  ">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-green-600">JobKi</h4>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-green-600">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            {/* user name 넣어주기 */}
            <AvatarFallback>Me</AvatarFallback>
          </Avatar>
        </h4>
      </div>
      {/* 검색창 */}
      <SearchInput />
      {/* 오늘의 순위 */}
      <DefaultBox>
        <Card>
          <CardHeader>
            <CardTitle>오늘의 순위</CardTitle>
            <CardDescription>질문/태그/유저</CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Card>
                    <CardContent>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Is it accessible?</AccordionTrigger>
                          <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card>
                    <CardContent>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Is it accessible?</AccordionTrigger>
                          <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card>
                    <CardContent>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Is it accessible?</AccordionTrigger>
                          <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </CardContent>
          <CardFooter className="justify-end">
            <p>더보기</p>
          </CardFooter>
        </Card>
      </DefaultBox>
      {/* 최신 등록  */}
      <DefaultBox>
        <Card>
          <CardHeader>
            <CardTitle>최신 등록 질문</CardTitle>
            <CardDescription>가장 최근에 등록된 질문을 확인해보세요</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter className="justify-end">
            <p>더보기</p>
          </CardFooter>
        </Card>
      </DefaultBox>
      {/* 사람들이 자주 보는 태그 */}
      <DefaultBox>
        <Card>
          <CardHeader>
            <CardTitle>자주 클릭된 태그</CardTitle>
            <CardDescription>가장 최근에 등록된 질문을 확인해보세요</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter className="justify-end">
            <p>더보기</p>
          </CardFooter>
        </Card>
      </DefaultBox>
    </div>
  );
}
