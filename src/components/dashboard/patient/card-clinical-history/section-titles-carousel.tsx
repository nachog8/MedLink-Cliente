'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useMediaQuery } from '@/hooks/use-media-querys';

interface SectionCarouselProps {
  sections: Array<{ title: string; items: any[] }>;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function SectionCarousel({
  sections,
  activeTab,
  onTabChange,
}: SectionCarouselProps) {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <ScrollArea className="mb-4 w-full">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 sm:-ml-4">
          {sections.map((section) => (
            <CarouselItem
              key={section.title}
              className="basis-1/2 pl-2 sm:basis-1/3 sm:pl-4 md:basis-1/4 lg:basis-1/5"
            >
              <Button
                variant={activeTab === section.title ? 'default' : 'outline'}
                className="h-full w-full whitespace-normal text-xs sm:text-sm"
                onClick={() => onTabChange(section.title)}
              >
                {isMobile ? section.title.split(' ')[0] : section.title}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious className="-left-3" />
          <CarouselNext className="-right-3" />
        </div>
      </Carousel>
    </ScrollArea>
  );
}
