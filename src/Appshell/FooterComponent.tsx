import { createStyles, rem, Flex } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(5),
    borderTop: `${rem(1)} solid ${theme.colors.gray[2]}`,
    backgroundColor: 'rgb(255, 255, 255)',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md} ${theme.spacing.md}`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.sm,
      marginBottom: theme.spacing.md,
    },
    color: theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
  },

  section: {
    fontWeight: 'bold',
    marginTop: theme.spacing.xs,
  },

  contactInfo: {
    fontSize: theme.fontSizes.sm,
    lineHeight: 1.5,
  },
}));

interface FooterCenteredProps {
  Logo: string;
  links: { link: string; label: string }[];
}

export function FooterCentered({ Logo, links }: FooterCenteredProps) {
  const { classes } = useStyles();

  const items = links.map((link) => (
    <Link to={link.link} key={link.label} className={classes.links}>
      {link.label}
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Flex align='center' mb={5}>
          <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={Logo} alt={'Loading'} height={32} width={150} />
          </Link>
        </Flex>
        <div className={classes.contactInfo}>
          <div className={classes.section}>W&W Fahrzeugteile GbR</div>
          <div>
            <div>Bakkenkamp 1</div>
            <div>48480 Lünne</div>

            <div>Philipp Wilmes</div>
            <div>Lennard Wibbeling</div>
          </div>
          <div>
            <div>TEL. 017660400853</div>
          </div>
        </div>

        <Flex align='center' direction='row' gap='xs' className={classes.links}>
          {items}
        </Flex>
      </div>
    </div>
  );
}
