import {
  Container,
  SimpleGrid,
  Title,
  createStyles,
  rem,
  Text,
  List,
} from '@mantine/core';
import { AppShellComponent } from '../Appshell/AppShellComponent';
import { KontaktForm } from '../Kontakt/KontaktForm';
import { IconPhone, IconAt, IconMapPin, IconUser } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][8]} 100%)`,
    borderRadius: theme.radius.md,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },
  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },
  list_subtext: {
    fontSize: theme.fontSizes.md,
    fontWeight: 600,
  },
  list: {
    color: theme.white,
    fontSize: theme.fontSizes.xs,
    fontWeight: 400,
  },
}));

export const KontaktSeite = (): JSX.Element => {
  const { classes } = useStyles();
  return (
    <AppShellComponent>
      <Container mt={30}>
        <div className={classes.wrapper}>
          <SimpleGrid
            cols={2}
            spacing={50}
            breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
          >
            <div>
              <Title order={2} className={classes.title}>
                Kontakt
              </Title>
              <Text className={classes.description} mt='sm' mb={30}>
                Schicken Sie uns eine Nachricht oder rufen Sie uns an.
              </Text>
              <List
                mt={15}
                spacing='lg'
                size='sm'
                center
                className={classes.list}
              >
                <List.Item icon={<IconUser size='1.5rem' />}>
                  <div>
                    <Text className={classes.list_subtext}>Philipp Wilmes</Text>
                    <Text className={classes.list_subtext}>
                      Lennard Wibbeling
                    </Text>
                  </div>
                </List.Item>
                <List.Item icon={<IconPhone size='1.5rem' />}>
                  Telefon
                  <Text className={classes.list_subtext}>017660400853</Text>
                </List.Item>
                <List.Item icon={<IconAt size='1.5rem' />}>
                  E-mail
                  <Text className={classes.list_subtext}>
                    wwfahrzeugteile@gmail.com
                  </Text>
                </List.Item>
                <List.Item icon={<IconMapPin size='1.5rem' />}>
                  <Text className={classes.list_subtext}>
                    Bakkenkamp 1 <br /> 48480 Lünne
                  </Text>
                </List.Item>
              </List>
            </div>
            <div className={classes.form}>
              <KontaktForm />
            </div>
          </SimpleGrid>
        </div>
      </Container>
    </AppShellComponent>
  );
};
