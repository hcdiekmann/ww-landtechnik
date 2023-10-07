import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
  Button,
} from '@mantine/core';
import { useState } from 'react';
import { PictureCarousel } from './PictureCarousel';
import { IconSquareChevronLeftFilled } from '@tabler/icons-react';

const data = [
  {
    title: 'Restauration MB-trac 900',
    image: '/pictures/900Restauration/1.jpg',
    category: 'MB-trac 900',
    galleryImages: [
      '/pictures/900Restauration/1.jpg',
      '/pictures/900Restauration/2.jpg',
      '/pictures/900Restauration/3.jpg',
      '/pictures/900Restauration/4.jpg',
      '/pictures/900Restauration/5.jpg',
      '/pictures/900Restauration/6.jpg',
      '/pictures/900Restauration/7.jpg',
      '/pictures/900Restauration/8.jpg',
      '/pictures/900Restauration/9.jpg',
      '/pictures/900Restauration/10.jpg',
      '/pictures/900Restauration/11.jpg',
      '/pictures/900Restauration/12.jpg',
      '/pictures/900Restauration/13.jpg',
      '/pictures/900Restauration/14.jpg',
      '/pictures/900Restauration/15.jpg',
      '/pictures/900Restauration/16.jpg',
      '/pictures/900Restauration/17.jpg',
      '/pictures/900Restauration/18.jpg',
    ],
  },
  {
    title: 'Restauration MB-trac 700',
    image: '/pictures/700/2.webp',
    category: 'MB-trac 700',
    galleryImages: [
      '/pictures/700/2.webp',
      '/pictures/700/3.webp',
      '/pictures/700/4.webp',
      '/pictures/700/5.webp',
      '/pictures/700/6.webp',
      '/pictures/700/7.webp',
      '/pictures/700/8.webp',
      '/pictures/700/9.webp',
      '/pictures/700/10.webp',
      '/pictures/700/11.webp',
      '/pictures/700/12.webp',
      '/pictures/700/13.webp',
      '/pictures/700/14.webp',
      '/pictures/700/15.webp',
      '/pictures/700/16.webp',
      '/pictures/700/17.webp',
      '/pictures/700/18.webp',
      '/pictures/700/19.webp',
      '/pictures/700/20.webp',
      '/pictures/700/21.webp',
      '/pictures/700/22.webp',
      '/pictures/700/23.webp',
    ],
  },
  {
    title: 'Restauration MB-trac 1500',
    image: '/pictures/1500Final/2.jpg',
    category: 'MB-trac 1500',
    galleryImages: [
      '/pictures/1500Final/2.jpg',
      '/pictures/1500Final/1.jpg',
      '/pictures/1500Final/3.jpg',
      '/pictures/1500Final/4.jpg',
      '/pictures/1500Final/5.jpg',
      '/pictures/1500Final/6.jpg',
      '/pictures/1500Final/7.jpg',
      '/pictures/1500Final/8.jpg',
      '/pictures/1500Final/9.jpg',
      '/pictures/1500Final/10.jpg',
      '/pictures/1500Final/11.jpg',
      '/pictures/1500Final/12.jpg',
      '/pictures/1500Final/13.jpg',
      '/pictures/1500Final/14.jpg',
      '/pictures/1500Final/15.jpg',
      '/pictures/1500Final/16.jpg',
      '/pictures/1500Final/17.jpg',
      '/pictures/1500Final/18.jpg',
      '/pictures/1500Final/19.jpg',
      '/pictures/1500Final/20.jpg',
      '/pictures/1500Final/21.jpg',
    ],
  },
  {
    title: 'Kabinenrestauration MB-trac',
    image: '/pictures/KabinenRestauration/2.jpg',
    category: 'Kabinenrestauration',
    galleryImages: [
      '/pictures/KabinenRestauration/2.jpg',
      '/pictures/KabinenRestauration/3.jpg',
      '/pictures/KabinenRestauration/4.jpg',
      '/pictures/KabinenRestauration/5.jpg',
      '/pictures/KabinenRestauration/6.jpg',
      '/pictures/KabinenRestauration/7.jpg',
      '/pictures/KabinenRestauration/8.jpg',
      '/pictures/KabinenRestauration/9.jpg',
      '/pictures/KabinenRestauration/10.jpg',
      '/pictures/KabinenRestauration/11.jpg',
      '/pictures/KabinenRestauration/12.jpg',
      '/pictures/KabinenRestauration/13.jpg',
      '/pictures/KabinenRestauration/14.jpg',
      '/pictures/KabinenRestauration/15.jpg',
      '/pictures/KabinenRestauration/16.jpg',
      '/pictures/KabinenRestauration/17.jpg',
      '/pictures/KabinenRestauration/18.jpg',
      '/pictures/KabinenRestauration/19.jpg',
      '/pictures/KabinenRestauration/20.jpg',
      '/pictures/KabinenRestauration/21.jpg',
      '/pictures/KabinenRestauration/22.jpg',
      '/pictures/KabinenRestauration/23.jpg',
    ],
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export function GalleryGridComponent() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [currentTitle, setCurrentTitle] = useState<string>('');

  const { classes } = useStyles();

  const handleCardClick = (galleryImages: string[], modalTitle: string) => {
    setCurrentImages(galleryImages);
    setCurrentTitle(modalTitle);
    setShowCarousel(true);
  };

  const cards = data.map((gallery) => (
    <Card
      key={gallery.title}
      p='md'
      radius='md'
      component='a'
      className={classes.card}
      onClick={() => handleCardClick(gallery.galleryImages, gallery.title)}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={gallery.image} />
      </AspectRatio>
      <Text color='dimmed' size='xs' transform='uppercase' weight={700} mt='md'>
        {gallery.category}
      </Text>
      <Text className={classes.title} mt={5}>
        {gallery.title}
      </Text>
    </Card>
  ));

  return (
    <Container>
      {showCarousel ? (
        <div>
          <Button
            leftIcon={
              <IconSquareChevronLeftFilled></IconSquareChevronLeftFilled>
            }
            onClick={() => setShowCarousel(false)}
          >
            Alben
          </Button>
          <Text align='center' size='xl' color='white'>
            {currentTitle}
          </Text>
          <PictureCarousel pictures={currentImages} />
        </div>
      ) : (
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          {cards}
        </SimpleGrid>
      )}
    </Container>
  );
}
