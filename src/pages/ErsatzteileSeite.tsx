import { Container, Title } from '@mantine/core';
import { AppShellComponent } from '../Appshell/AppShellComponent';

export const ErsatzteileSeite = (): JSX.Element => {
  return (
    <AppShellComponent>
      <Container mt={50}>
        <Title order={2}>Beschaffung und Herstellung von Ersatzteilen</Title>
      </Container>
    </AppShellComponent>
  );
};
