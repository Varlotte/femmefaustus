import { useCallback } from 'react';
import type { EmblaCarouselType } from 'embla-carousel-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import type { SlideshowItem } from '~/types';
import { DotButton, useDotButton } from './SlideshowDot';
import { PrevButton, NextButton, usePrevNextButtons } from './SlideshowButtons';
import port1 from '~/assets/carousel/port1.jpg';
import port2 from '~/assets/carousel/port2.jpg';
import port3 from '~/assets/carousel/port3.jpg';
import lfo2 from '~/assets/carousel/lfo2.png';
import ghost1 from '~/assets/carousel/ghost1.jpg';
import ghost2 from '~/assets/carousel/ghost2.jpg';
import ghost3 from '~/assets/carousel/ghost3.jpg';
import ghost4 from '~/assets/carousel/ghost4.jpg';
import ghost5 from '~/assets/carousel/ghost5.jpg';
import ghost6 from '~/assets/carousel/ghost6.jpg';
import ghost7 from '~/assets/carousel/ghost7.jpg';
import ghost8 from '~/assets/carousel/ghost8.jpg';
import {
  $caption,
  $container,
  $dots,
  $image,
  $root,
  $slide,
  $viewport,
} from './Slideshow.css';

const ghosts = [ghost1, ghost2, ghost3, ghost4, ghost5, ghost6, ghost7, ghost8];

export const loader = async (): Promise<SlideshowItem[]> => {
  return [
    {
      img: port1,
      text: 'þæt wæs gōd cyning, “beyond the ingenue” festival with Turn To Flesh, Spring 2019',
      credit: 'Photo credit: Lisa LaGrande',
    },
    {
      img: lfo2,
      text: 'Sample writing prompt from Letters from Otherwhere, Summer 2020',
      credit: 'Photo credit: Elizabeth Ballou',
    },
    {
      img: port2,
      text: '“Two Lips: Translated from the Dutch” from CryptoSHOTZ, June 2018',
      credit: 'Photo credit: AMiOS',
    },
    {
      img: port3,
      text: '“I’m not here to make friends, Bitch!” from Green New SHOTZ!, May 2017',
      credit: 'Photo credit: AMiOS',
    },
  ].concat(
    [1, 2, 3, 4, 5, 6, 7, 8].map((num) => ({
      img: ghosts[num - 1],
      text: 'Parlor Tricks, Summer 2019',
      credit: `Photo credit: ${num < 4 ? 'Laurel Andersen' : 'Louis Lopardi'}`,
    })),
  );
};

export default function Slideshow({ items }: { items: SlideshowItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const { autoplay } = emblaApi.plugins();

    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onButtonClick,
  );

  const { prevDisabled, nextDisabled, onPrevClick, onNextClick } =
    usePrevNextButtons(emblaApi, onButtonClick);

  return (
    <section className={$root}>
      <div className={$viewport} ref={emblaRef}>
        <div className={$container}>
          {items.map((item) => (
            <figure className={$slide} key={item.img}>
              <img alt={item.text} src={item.img} className={$image} />
              <figcaption className={$caption}>
                {item.text}
                <br />
                <small>{item.credit}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <PrevButton onClick={onPrevClick} disabled={prevDisabled} />
      <NextButton onClick={onNextClick} disabled={nextDisabled} />

      <div className={$dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            isSelected={index === selectedIndex}
          />
        ))}
      </div>
    </section>
  );
}
