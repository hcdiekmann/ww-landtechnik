import { Container } from '@mantine/core';
import { AppShellComponent } from '../Appshell/AppShellComponent';
import { KontaktForm } from '../Kontakt/KontaktForm';

export const KontaktSeite = (): JSX.Element => {
  return (
    <AppShellComponent>
      <Container mt={50}>
        <KontaktForm />
      </Container>
    </AppShellComponent>
  );
};
