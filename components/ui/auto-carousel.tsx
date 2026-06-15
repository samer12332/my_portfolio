"use client";

import { useEffect, useId, useState } from "react";
import type { ReactNode } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface AutoCarouselProps<T> {
  items: T[];
  ariaLabel: string;
  getItemKey: (item: T, index: number) => string;
  renderItem: (item: T, index: number) => ReactNode;
  itemClassName?: string;
  className?: string;
  dotsClassName?: string;
  autoplayDelay?: number;
}

export function AutoCarousel<T>({
  items,
  ariaLabel,
  getItemKey,
  renderItem,
  itemClassName,
  className,
  dotsClassName,
  autoplayDelay = 5000,
}: AutoCarouselProps<T>) {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselId = useId();

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrentSlide = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    updateCurrentSlide();
    api.on("select", updateCurrentSlide);
    api.on("reInit", updateCurrentSlide);

    return () => {
      api.off("select", updateCurrentSlide);
      api.off("reInit", updateCurrentSlide);
    };
  }, [api]);

  useEffect(() => {
    if (!api || items.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
        return;
      }

      api.scrollTo(0);
    }, autoplayDelay);

    return () => window.clearInterval(intervalId);
  }, [api, autoplayDelay, items.length]);

  return (
    <div className={cn("space-y-4", className)}>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
        aria-label={ariaLabel}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={getItemKey(item, index)}
              className={cn("basis-[88%] sm:basis-[72%]", itemClassName)}
              id={`${carouselId}-slide-${index}`}
            >
              {renderItem(item, index)}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {items.length > 1 && (
        <div
          className={cn("flex items-center justify-center gap-2", dotsClassName)}
          aria-label={`${ariaLabel} slide navigation`}
        >
          {items.map((item, index) => (
            <button
              key={getItemKey(item, index)}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1} of ${items.length}`}
              aria-current={currentSlide === index}
              className={cn(
                "h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300",
                currentSlide === index
                  ? "w-7 bg-cyan-300"
                  : "w-2.5 bg-white/20 hover:bg-white/40",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
