import { Carousel, Embla } from '@mantine/carousel';
import { useCallback, useEffect, useState } from 'react';
import {
  Image,
  Progress,
  createStyles,
  getStylesRef,
  rem,
} from '@mantine/core';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

interface PictureCarouselProps {
  pictures: string[];
}

export const PictureCarousel = ({
  pictures,
}: PictureCarouselProps): JSX.Element => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  const slides = pictures.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} withPlaceholder fit='contain' height={500} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Carousel
        mt={10}
        getEmblaApi={setEmbla}
        slideGap='sm'
        dragFree
        nextControlIcon={<IconArrowRight size={30} color='darkgreen' />}
        previousControlIcon={<IconArrowLeft size={30} color='darkgreen' />}
        styles={{
          control: {
            '&[data-inactive]': {
              opacity: 0,
              cursor: 'default',
            },
          },
        }}
      >
        {slides}
      </Carousel>
      <Progress
        value={scrollProgress}
        styles={{
          bar: { transitionDuration: '0ms' },
          root: { maxWidth: rem(320) },
        }}
        size='sm'
        mt='xl'
        mx='auto'
      />
    </>
  );
};
