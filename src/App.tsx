import { MantineProvider, Text } from '@mantine/core';
import { KontaktForm } from './Kontakt/KontaktForm';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <KontaktForm />
    </MantineProvider>
  );
}
