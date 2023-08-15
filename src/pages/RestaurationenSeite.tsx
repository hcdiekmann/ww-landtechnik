import { Container, Title } from '@mantine/core';
import { AppShellComponent } from '../Appshell/AppShellComponent';

export const RestaurationenSeite = (): JSX.Element => {
  return (
    <AppShellComponent>
      <Container mt={50}>
        <Title order={2}>Restaurationen</Title>
      </Container>
    </AppShellComponent>
  );
};
