import { Container, Title, Text, Divider } from '@mantine/core';
import { AppShellComponent } from '../Appshell/AppShellComponent';

export const ErsatzteileSeite = (): JSX.Element => {
  return (
    <AppShellComponent>
      <Container mt={50}>
        <Title mb={10} order={2}>
          Beschaffung und Herstellung von Ersatzteilen
        </Title>
        <Divider mb={10} />
        <Text>
          Da wir auch immer auf Ersatz und Reparaturteile angewiesen sind
          bemühen wir und stetig die nichtmehr lieferbare Teile nachzubauen oder
          aufzuarbeiten um unsere Lieblinge ohne Stillstand fahren zu können.
          Dadurch, dass wir bei unseren Restaurationen auch immer viele Neuteile
          benötigen, haben wir gute und günstige Nachbauteile im Lager, die wir
          ihnen gerne anbieten möchten. Gerne unterstützen wir Sie mit unseren
          Ersatzteilen und stehen auch bei Fragen immer zur Verfügung.
        </Text>
      </Container>
    </AppShellComponent>
  );
};
