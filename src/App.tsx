import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Analytics } from '@vercel/analytics/react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { KontaktSeite } from './pages/KontaktSeite';
import { LandungsSeite } from './pages/LandungsSeite';
import '@fontsource/russo-one';
import '@fontsource/open-sans';
import { UnternehemenSeite } from './pages/UnternehmenSeite';
import { RestaurationenSeite } from './pages/RestaurationenSeite';
import { ReparaturenSeite } from './pages/ReparaturenSeite';
import { ErsatzteileSeite } from './pages/ErsatzteileSeite';
import { DatenschutzSeite } from './pages/DatenschutzSeite';
import { ImpressumSeite } from './pages/ImpressumSeite';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <MantineProvider
      theme={{
        primaryColor: 'MBtrac',
        colors: {
          MBtrac: [
            '#f8fde5',
            '#f2f7d4',
            '#e4eeab',
            '#d5e57e',
            '#c8dd59',
            '#bfd841',
            '#bbd632',
            '#a5bd24',
            '#91a81a',
            '#7c9108',
          ],
        },
        headings: {
          fontFamily: '"Open Sans", bold;',

          // properties for individual headings, all of them are optional
          sizes: {
            h1: { fontWeight: 600, fontSize: '3rem', lineHeight: 1.2 },
            h2: { fontWeight: 500, fontSize: '2rem', lineHeight: 1 },
          },
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Analytics />
      <Notifications />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<LandungsSeite />} />
          <Route path='/unternehmen' element={<UnternehemenSeite />} />
          <Route path='/restaurationen' element={<RestaurationenSeite />} />
          <Route path='/reparaturen' element={<ReparaturenSeite />} />
          <Route path='/ersatzteile' element={<ErsatzteileSeite />} />
          <Route path='/kontakt' element={<KontaktSeite />} />
          <Route path='/datenschutz' element={<DatenschutzSeite />} />
          <Route path='/impressum' element={<ImpressumSeite />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}
