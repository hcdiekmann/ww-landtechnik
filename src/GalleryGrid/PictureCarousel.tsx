import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import { Image, createStyles, getStylesRef, rem } from '@mantine/core';

const useStyles = createStyles(() => ({
  controls: {
    ref: getStylesRef('controls'),
    transition: 'opacity 300ms ease',
    opacity: 0,
  },
  indicator: {
    width: rem(12),
    height: rem(4),
    transition: 'width 250ms ease',

    '&[data-active]': {
      width: rem(40),
    },
  },

  root: {
    '&:hover': {
      [`& .${getStylesRef('controls')}`]: {
        opacity: 1,
      },
    },
  },
}));

interface PictureCarouselProps {
  pictures: string[];
}

export const PictureCarousel = ({
  pictures,
}: PictureCarouselProps): JSX.Element => {
  const { classes } = useStyles();
  const [allLoaded, setAllLoaded] = useState(false);
  let loadCount = 0;

  const handleImageLoad = () => {
    loadCount += 1;
    if (loadCount === pictures.length) {
      setAllLoaded(true);
    }
  };

  const slides = pictures.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} onLoad={handleImageLoad} />
    </Carousel.Slide>
  ));

  return (
    <div style={{ opacity: allLoaded ? 1 : 0, transition: 'opacity 1s ease' }}>
      <Carousel
        mt={18}
        maw='auto'
        mah='auto'
        withIndicators
        classNames={classes}
      >
        {slides}
      </Carousel>
    </div>
  );
};
