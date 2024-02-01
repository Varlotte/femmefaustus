import { useCallback, useEffect, useState } from "react";
import type { UseEmblaCarouselType } from "embla-carousel-react";

import type { UseDotButtonType, DotButtonProps } from "~/types";
import { $dot, $dotSelected } from "./slideshowDot.css";

export const useDotButton = (
  emblaApi: UseEmblaCarouselType | undefined,
  onClick?: (emblaApi: UseEmblaCarouselType) => void
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onClick) onClick(emblaApi);
    },
    [emblaApi, onClick]
  );

  const onInit = useCallback((emblaApi: UseEmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: UseEmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

export const DotButton = ({ onClick, isSelected }: DotButtonProps) => {
  const className = isSelected ? $dotSelected : $dot;

  return (
    <button type="button" onClick={onClick} className={className}></button>
  );
};
