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
        primaryColor: 'lime',
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
        </Routes>
      </Router>
    </MantineProvider>
  );
}
