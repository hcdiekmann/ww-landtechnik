import { Container, Title, Text, Divider } from '@mantine/core';
import { AppShellComponent } from '../Appshell/AppShellComponent';

export const ReparaturenSeite = (): JSX.Element => {
  return (
    <AppShellComponent>
      <Container mt={50}>
        <Title mb={10} order={2}>
          Reparaturen und Aufarbeitungen
        </Title>
        <Divider mb={10} />
        <Text>
          Um Schäden und Probleme möglichst zu verhindern ist die Pflege und
          Wartung Ihrer Maschine unentbehrlich. Dafür bieten wir Ihnen
          Aufarbeitungen oder Wartungen Ihres MB trac oder Unimog an. Falls es
          doch einmal zu Schäden kommt, können wir Ihnen mit unserer Erfahrung
          im technischen sowie im Karosseriebaues gerne weiter helfen. Zur
          Werterhaltung Ihres Lieblings bieten wir Ihnen auch gerne
          Aufarbeitungen und Auffrischungen Ihres Schleppers an. So können auch
          nervige defekte Kleinigkeiten und Altersspuren von uns beseitigt
          werden. Nennen Sie uns Ihre Wünsche – Ihre Zufriedenheit steht bei uns
          an erster Stelle.
        </Text>
      </Container>
    </AppShellComponent>
  );
};
