import React from "react";

import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  createStyles,
  Center,
  Space,
} from "@mantine/core";

import { Link } from "../../routes";

//need to create a document with the useStyles

export const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 30,
    paddingBottom: 40,

    "@media (max-width: 755px)": {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  links: {
    textDecoration: "none",
    color: theme.colorScheme === "light" ? theme.white : theme.black,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  header: {
    textAlign: "center",
    fontWeight: 750,
    fontSize: 24,
    letterSpacing: -1,
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },

  description: {
    textAlign: "center",

    "@media (max-width: 520px)": {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      height: 42,
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

import Menu from "../search";

export default function Home() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.controls}>
      <Container className={classes.wrapper} size={1400}>
        <div className={classes.inner}>
          <Title className={classes.title}>
            Crowdfunding with{" "}
            <Text component="span" className={classes.highlight} inherit>
              CrowdBlock
            </Text>{" "}
            on the Blockchain
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" color="dimmed" className={classes.description}>
              Create and Contribute to Crowdfunded projects on the Blockchain
            </Text>
          </Container>

          <div className={classes.controls}>
            <Menu />
          </div>
          <Space h="xl" />
          <Center>
            <Button>
              <Link route="/project/new">
                <a className={classes.links}>Create a Project</a>
              </Link>
            </Button>
          </Center>
        </div>
      </Container>
    </div>
  );
}
