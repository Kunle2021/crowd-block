import React from "react";
import SearchHeader from "../../components/searchheader";
// import Search from "../../components/search";
import { useEffect } from "react";
import project from "../../src/project";
import Contribute from "../../components/contribute";

import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
  Container,
  Input,
  Space,
} from "@mantine/core";
import {
  IconReceiptOff,
  IconFlame,
  IconCircleDotted,
  IconFileCode,
} from "@tabler/icons";

export default function View({ summary, url }) {
  const useStyles = createStyles((theme) => ({
    wrapper: {
      padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
    },

    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: 36,
      fontWeight: 900,
      lineHeight: 1.1,
      marginBottom: theme.spacing.md,
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
    },

    colour: {
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
    },
  }));

  const features = [
    {
      icon: IconReceiptOff,
      title: "Minimum Contribution",
      description:
        "All packages are published under MIT license, you can use Mantine in any project",
    },
    {
      icon: IconFileCode,
      title: "Contract Balance",
      description:
        "Build type safe applications, all components and hooks export types",
    },
    {
      icon: IconCircleDotted,
      title: "Project Requests",
      description:
        "With new :focus-visible selector focus ring will appear only when user navigates with keyboard",
    },
    {
      icon: IconFlame,
      title: "Manager",
      description:
        "Customize colors, spacing, shadows, fonts and many other settings with global theme object",
    },
  ];

  const { classes } = useStyles();

  // size={44} radius="md"

  const items = features.map((feature) => (
    <div className={feature.title}>
      <div className={classes.colour}>
        <feature.icon size={26} stroke={1.5} />
      </div>
      <div>
        <Text size="lg" mt="sm" weight={500}>
          {feature.title}
        </Text>
        <Text color="dimmed" size="sm">
          {feature.description}
        </Text>
      </div>
    </div>
  ));

  return (
    <div>
      <Space h="xl" />
      <SearchHeader />
      {/* <div>{summary}</div> */}

      {/* This is the summary value that is returned - commented at the moment */}

      <Container>
        <div className={classes.wrapper}>
          <Grid gutter={80}>
            <Col span={12} md={5}>
              <Title className={classes.title} order={2}>
                We only have this at the moment
              </Title>
              <Text color="dimmed">
                Build fully functional accessible web applications faster than
                ever – Mantine includes more than 120 customizable components
                and hooks to cover you in any situation
                {summary.projectDetails}
              </Text>

              <Contribute {...url} />
              {/* Why are we using a spread operator - need to check */}
            </Col>
            <Col span={12} md={7}>
              <SimpleGrid
                cols={2}
                spacing={30}
                breakpoints={[{ maxWidth: "md", cols: 1 }]}
              >
                {items}
              </SimpleGrid>
            </Col>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  let slug = context.query.address;
  //console.log(slug);

  const address = project(slug);
  const summary = await address.methods.getSummary().call();
  //console.log(summary);

  return {
    props: {
      summary: summary,
      url: address,
    },
  };
}
