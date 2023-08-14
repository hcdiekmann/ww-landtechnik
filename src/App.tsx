import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Analytics } from '@vercel/analytics/react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { KontaktSeite } from './pages/KontaktSeite';
import { LandungsSeite } from './pages/LandungsSeite';

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
          <Route path='/kontakt' element={<KontaktSeite />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}
