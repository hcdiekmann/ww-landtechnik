import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
} from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    height: rem(400),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: theme.radius.md,
    overflow: 'hidden', // Add this line to clip the inner content
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 1,
  },
  overlay: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 2,
  },
  content: {
    position: 'relative',
    zIndex: 3,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    zIndex: 3,
  },

  button: {
    alignSelf: 'flex-start', // Change to 'flex-end' to align to the right
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(28),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

const data = [
  {
    image: '/pictures/1500Final/1.jpg',
    title: 'Wir restaurieren originalgetreu Ihren Liebling',
    category: 'Restaurationen',
  },
  {
    image: '/pictures/900Restauration/1.jpg',
    title: 'Für den Werterhalt und die Zuverlässigkeit ihres Fahrzeuges',
    category: 'Reparaturen & Aufbereitungen',
  },
  {
    image: '/pictures/700Restauration/1.jpg',
    title:
      'Beschaffung und Herstellung von neuen originalgetreuen Ersatzteilen',
    category: 'Ersatzteile',
  },
  {
    image: '/pictures/KabinenRestauration/1.jpg',
    title: 'Wenn das passende erstmal hermuss',
    category: 'Restaurationen',
  },
];

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  const getPageLink = () => {
    let pageToNavigate = '';

    switch (category) {
      case 'Restaurationen':
        pageToNavigate = '/leistungen/restaurationen';
        break;
      case 'Ersatzteile':
        pageToNavigate = '/leistungen/ersatzteile';
        break;
      case 'Reparaturen & Aufbereitungen':
        pageToNavigate = '/leistungen/reparaturen';
        break;
      // Add more cases as needed
      default:
        pageToNavigate = '/';
    }

    return pageToNavigate;
  };

  return (
    <Paper shadow='md' p='xl' radius='md' className={classes.card}>
      <div
        className={classes.imageContainer}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={classes.overlay}></div>
      </div>
      <div className={classes.buttonContainer}>
        <div className={classes.content}>
          <Text className={classes.category} size='xs'>
            {category}
          </Text>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
        </div>
        <Link to={getPageLink()} className={classes.button}>
          <Button variant='white' color='dark'>
            Erkunden
          </Button>
        </Link>
      </div>
    </Paper>
  );
}

export const CarouselComponent = (): JSX.Element => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const autoplay = useRef(Autoplay({ delay: 8000 }));

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize='50%'
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 10 }]}
      slideGap='lg'
      align='start'
      loop
      withIndicators
      slidesToScroll={mobile ? 1 : 2}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel>
  );
};
