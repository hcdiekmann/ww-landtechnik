import { AppShell } from '@mantine/core';
import { HeaderMenu } from './HeaderMenuComponent';
import { FooterCentered } from './FooterComponent';

interface AppShellProps {
  children: JSX.Element;
}

export const AppShellComponent = (props: AppShellProps) => {
  const menu_links = [
    {
      link: '/unternehmen',
      label: 'Unternehmen',
    },
    {
      link: '/#',
      label: 'Unsere Leistungen',
      links: [
        {
          link: '/restaurationen',
          label: 'Restaurationen',
        },
        {
          link: '/reparaturen',
          label: 'Repaturen und Aufarbeitungen',
        },
        {
          link: '/ersatzteile',
          label: 'Beschaffung & Herstellung von Ersatzteilen',
        },
      ],
    },
    {
      link: '/kontakt',
      label: 'Kontakt',
    },
  ];

  const footer_links = [
    {
      link: '/unternehmen',
      label: 'Unternehmen',
    },
    {
      link: '/impressum',
      label: 'Impressum',
    },
    {
      link: '/datenschutz',
      label: 'Datenschutz',
    },
    {
      link: '/kontakt',
      label: 'Kontakt',
    },
  ];

  return (
    <AppShell
      header={<HeaderMenu Logo={'/pictures/logo.png'} links={menu_links} />}
      footer={
        <FooterCentered Logo={'/pictures/logo.png'} links={footer_links} />
      }
    >
      {props.children}
    </AppShell>
  );
};
