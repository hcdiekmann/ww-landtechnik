import { MantineProvider } from '@mantine/core';
import { KontaktForm } from './Kontakt/KontaktForm';

export default function App() {
  return (
    <MantineProvider
      theme={{
        primaryColor: 'green',
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <KontaktForm />
    </MantineProvider>
  );
}
