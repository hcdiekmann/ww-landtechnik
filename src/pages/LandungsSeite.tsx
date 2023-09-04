import {
  Container,
  Title,
  createStyles,
  Text,
  List,
  ThemeIcon,
} from '@mantine/core';
import { AppShellComponent } from '../Appshell/AppShellComponent';
import { CarouselComponent } from '../Carousel/CarouselComponent';
import Balancer from 'react-wrap-balancer';
import {
  IconTool,
  IconHeart,
  IconBoxSeam,
  IconStar,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  background_wrapper: {
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-90deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][8]} 100%)`,
  },
  title: {
    color: theme.white,
  },
  sub_text: {
    color: theme.white,
    fontSize: theme.fontSizes.lg,
  },
  list: {
    color: theme.white,
    fontSize: theme.fontSizes.md,
    fontWeight: 700,
  },
  list_subtext: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 400,
  },
}));

export const LandungsSeite = (): JSX.Element => {
  const { classes } = useStyles();

  return (
    <div className={classes.background_wrapper}>
      <AppShellComponent>
        <Container mt={50}>
          <Title mb={10} order={1} className={classes.title}>
            <Balancer>Ihr Partner für den MB trac und Unimog</Balancer>
          </Title>

          <Text mb={8} className={classes.sub_text}>
            <Balancer>
              Seit Jahren widmen wir uns der originalgetreuen Restauration,
              Aufarbeitung und Reparatur von MB tracs und Unimogs. Unsere
              Kombination aus technischem Know-How und Leidenschaft für
              authentische Details macht uns zur ersten Wahl für Liebhaber und
              Enthusiasten.
            </Balancer>
          </Text>
          <CarouselComponent />

          <Title mt={20} className={classes.title} order={2}>
            Warum W&W Landtechnik?
          </Title>
          <List mt={15} spacing='lg' size='sm' center className={classes.list}>
            <List.Item
              icon={
                <ThemeIcon color='white' size={34}>
                  <IconTool size='1.5rem' color='darkgreen' />
                </ThemeIcon>
              }
            >
              Expertise
              <Text className={classes.list_subtext}>
                Jahrelange Erfahrung in der Landmaschinenbranche
              </Text>
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon color='white' size={34}>
                  <IconHeart size='1.5rem' color='darkgreen' />
                </ThemeIcon>
              }
            >
              Leidenschaft
              <Text className={classes.list_subtext}>
                Unser Herz schlägt für die originalgetreue Restauration
              </Text>
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon color='white' size={34}>
                  <IconBoxSeam size='1.5rem' color='darkgreen' />
                </ThemeIcon>
              }
            >
              Alles aus einer Hand
              <Text className={classes.list_subtext}>
                Restauration,Reparatur, Ersatzteile und Handel
              </Text>
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon color='white' size={34}>
                  <IconStar size='1.5rem' color='darkgreen' />
                </ThemeIcon>
              }
            >
              Qualität
              <Text className={classes.list_subtext}>
                Unübertroffener Sachverstand und Präzision bei jedem Projekt
              </Text>
            </List.Item>
          </List>
        </Container>
      </AppShellComponent>
    </div>
  );
};
