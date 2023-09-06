import { Container, Title, Text, Divider, createStyles } from '@mantine/core';
import { AppShellComponent } from '../Appshell/AppShellComponent';

const useStyles = createStyles((theme) => ({
  background_wrapper: {
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][8]} 100%)`,
  },

  text: {
    color: theme.white,
  },
}));

export const ReparaturenSeite = (): JSX.Element => {
  const { classes } = useStyles();
  return (
    <div className={classes.background_wrapper}>
      <AppShellComponent>
        <Container mt={50}>
          <Title mb={10} order={2} className={classes.text}>
            Reparaturen und Aufarbeitungen
          </Title>
          <Divider mb={10} />
          <Text className={classes.text}>
            Um Schäden und Probleme möglichst zu verhindern ist die Pflege und
            Wartung Ihrer Maschine unentbehrlich. Dafür bieten wir Ihnen
            Aufarbeitungen oder Wartungen Ihres MB trac oder Unimog an. Falls es
            doch einmal zu Schäden kommt, können wir Ihnen mit unserer Erfahrung
            im technischen sowie im Karosseriebaues gerne weiter helfen. Zur
            Werterhaltung Ihres Lieblings bieten wir Ihnen auch gerne
            Aufarbeitungen und Auffrischungen Ihres Schleppers an. So können
            auch nervige defekte Kleinigkeiten und Altersspuren von uns
            beseitigt werden. Nennen Sie uns Ihre Wünsche – Ihre Zufriedenheit
            steht bei uns an erster Stelle.
          </Text>
        </Container>
      </AppShellComponent>
    </div>
  );
};
