import { AppShell } from '@mantine/core';
import { HeaderMenu } from './HeaderMenuComponent';
import { FooterCentered } from './FooterComponent';

interface AppShellProps {
  children: JSX.Element;
}

export const AppShellComponent = (props: AppShellProps) => {
  const links = [
    {
      link: '/unternehmen',
      label: 'Unternehmen',
    },
    {
      link: '/leistungen',
      label: 'Unsere Leistungen',
      links: [
        {
          link: '/leistungen/restaurationen',
          label: 'Restaurationen',
        },
        {
          link: '/leistungen/reparaturen',
          label: 'Repaturen und Aufarbeitungen',
        },
        {
          link: '/leistungen/ersatzteile',
          label: 'Beschaffung & Herstellung von Ersatzteilen',
        },
      ],
    },
    {
      link: '/kontakt',
      label: 'Kontakt',
    },
  ];

  return (
    <AppShell
      header={<HeaderMenu Logo={'/pictures/logo.png'} links={links} />}
      footer={<FooterCentered Logo={'/pictures/logo.png'} links={links} />}
    >
      {props.children}
    </AppShell>
  );
};
