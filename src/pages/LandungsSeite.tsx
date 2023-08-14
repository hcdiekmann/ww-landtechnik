import { Container, Title } from '@mantine/core';
import { AppShellComponent } from '../Appshell/AppShellComponent';

export const LandungsSeite = (): JSX.Element => {
  return (
    <AppShellComponent>
      <Container mt={50}>
        <Title order={1}>Moin Lennard!</Title>
      </Container>
    </AppShellComponent>
  );
};
