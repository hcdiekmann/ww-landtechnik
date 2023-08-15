import { Container, Title, Text, Divider } from '@mantine/core';
import { AppShellComponent } from '../Appshell/AppShellComponent';
import { IconQuote } from '@tabler/icons-react';

export const UnternehemenSeite = (): JSX.Element => {
  return (
    <AppShellComponent>
      <Container mt={50}>
        <Title mb={10} order={2}>
          Unternehmen
        </Title>
        <Divider mb={10} />

        <Text>
          Die Firma W&W Landtechnik Ersatzteile hat sich in den letzten Jahren
          auf die professionelle Restaurierung, Aufarbeitung und Reparatur von
          MB tracs und Unimogs spezialisiert. Darüber hinaus sind wir im
          Landmaschinenhandel sowie im Ersatzteilhandel tätig und fertigen
          Ersatzteile an. Unsere Leidenschaft und unser Fachwissen für das
          Original treiben uns stets dazu an, uns weiterzuentwickeln und unsere
          Dienstleistungen zu verbessern. Wir sind ein junges, lernfähiges Team,
          das jede Herausforderung annimmt und kontinuierlich an seinen Aufgaben
          wächst. Immer nach dem Motto:
        </Text>
        <div
          style={{
            marginTop: '12px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <IconQuote size={30} style={{ marginRight: '15px', color: '#888' }} />
          <Text size={18} style={{ fontStyle: 'italic' }}>
            „Qualität bedeutet, etwas ordentlich zu erledigen, auch wenn niemand
            zuschaut.“
          </Text>
        </div>
      </Container>
    </AppShellComponent>
  );
};
