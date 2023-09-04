import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
  Modal,
} from '@mantine/core';
import { useState } from 'react';
import { PictureCarousel } from './PictureCarousel';

const data = [
  {
    title: 'Restauration MB-trac 900',
    image: '/pictures/900Restauration/1.jpg',
    date: 'MB-trac 900',
    galleryImages: [
      '/pictures/900Restauration/1.jpg',
      '/pictures/900Restauration/2.jpg',
      '/pictures/900Restauration/3.jpg',
    ],
  },
  {
    title: 'Restauration MB-trac 700',
    image: '/pictures/700Restauration/1.jpg',
    date: 'MB-trac 700',
    galleryImages: [
      '/pictures/900Restauration/1.jpg',
      '/pictures/900Restauration/2.jpg',
      '/pictures/900Restauration/3.jpg',
    ],
  },
  {
    title: 'Restauration MB-trac 1500',
    image: '/pictures/1500Final/2.jpg',
    date: 'MB-trac 1500',
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
    ],
  },
  {
    title: 'Kabinenrestauration MB-trac',
    image: '/pictures/KabinenRestauration/1.jpg',
    date: 'Kabinenrestauration',
    galleryImages: [
      '/pictures/900Restauration/1.jpg',
      '/pictures/900Restauration/2.jpg',
      '/pictures/900Restauration/3.jpg',
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
  const [modalOpened, setModalOpened] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  const { classes } = useStyles();

  const handleCardClick = (galleryImages: string[]) => {
    setCurrentImages(galleryImages);
    setModalOpened(true);
  };

  const cards = data.map((gallery) => (
    <Card
      key={gallery.title}
      p='md'
      radius='md'
      component='a'
      href='#'
      className={classes.card}
      onClick={() => handleCardClick(gallery.galleryImages)}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={gallery.image} />
      </AspectRatio>
      <Text color='dimmed' size='xs' transform='uppercase' weight={700} mt='md'>
        {gallery.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {gallery.title}
      </Text>
    </Card>
  ));

  return (
    <Container py='xl'>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
      <Modal opened={modalOpened} onClose={() => setModalOpened(false)}>
        <PictureCarousel pictures={currentImages} />
      </Modal>
    </Container>
  );
}
