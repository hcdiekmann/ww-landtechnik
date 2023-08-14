import { Container, Title } from '@mantine/core';
import { AppShellComponent } from '../Appshell/AppShellComponent';
import { CarouselComponent } from '../Carousel/CarouselComponent';

export const LandungsSeite = (): JSX.Element => {
  return (
    <AppShellComponent>
      <Container mt={50}>
        <Title mb={10} order={1}>
          Ihr Partner für den MB trac und Unimog
        </Title>

        <CarouselComponent />
      </Container>
    </AppShellComponent>
  );
};
