import { useCallback, useEffect, useState } from 'react';
import type { EmblaCarouselType } from 'embla-carousel-react';

import type { UseDotButtonType, DotButtonProps } from '~/types';
import { $dot, $dotSelected } from './SlideshowDot.css';

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onClick?: (emblaApi: EmblaCarouselType) => void,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onClick) onClick(emblaApi);
    },
    [emblaApi, onClick],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
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
