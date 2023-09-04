import { Container, Title, Text, Divider } from '@mantine/core';
import { AppShellComponent } from '../Appshell/AppShellComponent';
import { GalleryGridComponent } from '../GalleryGrid/GalleryGridComponent';

export const RestaurationenSeite = (): JSX.Element => {
  return (
    <AppShellComponent>
      <Container mt={50}>
        <Title mb={10} order={2}>
          Restaurationen
        </Title>
        <Divider mb={10} />
        <Text>
          Wir lieben es, Alte in die Jahre gekommene Fahrzeuge wieder im neuen
          Glanz erstrahlen zu lassen. Hier bekommen Sie beispielsweise Einblicke
          in vollständige Restaurationen unserer Maschinen. Dabei ist uns
          saubere originalgetreue Arbeit sehr wichtig. Bei uns werden sämtliche
          Karosserieteile und das Fahrgestell fachgerecht in Einzelteile
          demontiert und anschließend sowohl technisch als auch optisch
          aufgearbeitet, sodass später alles wieder im 1a Zustand ist. Die
          Aggregate wie Motor Getriebe Achsen werden neu abgedichtet und falz
          nötig repariert. Die Blech und Fahrgestellteile werden nach
          Aufarbeitung professionell lackiert und anschließend das Fahrzeug
          wieder montiert. Somit erreichen wir eine sehr gute Qualität der
          Restauration und können Glückliche Kunden garantieren.
        </Text>
        <GalleryGridComponent />
      </Container>
    </AppShellComponent>
  );
};
