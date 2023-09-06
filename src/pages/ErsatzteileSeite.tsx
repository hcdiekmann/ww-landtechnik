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

export const ErsatzteileSeite = (): JSX.Element => {
  const { classes } = useStyles();
  return (
    <div className={classes.background_wrapper}>
      <AppShellComponent>
        <Container mt={50}>
          <Title mb={10} order={2} className={classes.text}>
            Beschaffung und Herstellung von Ersatzteilen
          </Title>
          <Divider mb={10} />
          <Text className={classes.text}>
            Da wir auch immer auf Ersatz und Reparaturteile angewiesen sind
            bemühen wir und stetig die nichtmehr lieferbare Teile nachzubauen
            oder aufzuarbeiten um unsere Lieblinge ohne Stillstand fahren zu
            können. Dadurch, dass wir bei unseren Restaurationen auch immer
            viele Neuteile benötigen, haben wir gute und günstige Nachbauteile
            im Lager, die wir ihnen gerne anbieten möchten. Gerne unterstützen
            wir Sie mit unseren Ersatzteilen und stehen auch bei Fragen immer
            zur Verfügung.
          </Text>
        </Container>
      </AppShellComponent>
    </div>
  );
};
