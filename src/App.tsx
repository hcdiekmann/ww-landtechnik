import { MantineProvider } from '@mantine/core';
import { KontaktForm } from './Kontakt/KontaktForm';
import { Notifications } from '@mantine/notifications';
import { Analytics } from '@vercel/analytics/react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

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
        primaryColor: 'green',
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Analytics />
      <Notifications />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/kontakt' element={<KontaktForm />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}
