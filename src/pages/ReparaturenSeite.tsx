import { Container, Title } from '@mantine/core';
import { AppShellComponent } from '../Appshell/AppShellComponent';

export const ReparaturenSeite = (): JSX.Element => {
  return (
    <AppShellComponent>
      <Container mt={50}>
        <Title order={2}>Reparaturen und Aufarbeitungen</Title>
      </Container>
    </AppShellComponent>
  );
};
