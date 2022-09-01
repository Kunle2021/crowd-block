import React from "react";
import SearchHeader from "../../components/searchheader";
// import Search from "../../components/search";
import { useEffect, useState } from "react";
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

  manager: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
    paddingBottom: 19.5,
  },

  colour: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },
}));

const features = [
  {},
  {
    title: "Contract Balance",
    description:
      "The amount of funds contributed to the current contract (WEI).",
  },
  {
    title: "Number of Requests",
    description: "The number of spending requests created by the owner.",
  },
  {
    title: "Manager",
    description: "The address of the creator of the contract.",
  },
  {
    title: "Minimum Contribution",
    description: "The minimum amount needed to contribute to the project.",
  },
];

export default function View({ summary, slug }) {
  const { classes } = useStyles();

  // const [sum, setSum] = useState({});

  // // size={44} radius="md"
  // useEffect(() => {
  //   setSum(summary);
  // }, []);

  return (
    <div>
      <Space h="xl" />
      <SearchHeader />

      <Container>
        <div className={classes.wrapper}>
          <Grid gutter={80}>
            <Col span={12} md={5}>
              <Title className={classes.title} order={2}>
                {summary.projectName}
              </Title>
              <Text color="dimmed">{summary.projectDetails}</Text>

              <Contribute slug={slug} />
              {/* Why are we using a spread operator - need to check */}
            </Col>
            <Col span={12} md={7}>
              <SimpleGrid
                cols={2}
                spacing={30}
                breakpoints={[{ maxWidth: "md", cols: 1 }]}
              >
                <div key={features[4].title} className={features[4].title}>
                  <div className={classes.colour}>
                    <div className={classes.title}>
                      {summary.minContribution}
                    </div>
                    <div></div>
                  </div>
                  <div>
                    <Text size="lg" mt="sm" weight={500}>
                      {features[4].title}
                    </Text>
                    <Text color="dimmed" size="sm">
                      {features[4].description}
                    </Text>
                  </div>
                </div>

                <div key={features[1].title} className={features[1].title}>
                  <div className={classes.colour}>
                    <div className={classes.title}>{summary.balance}</div>
                    <div></div>
                  </div>
                  <div>
                    <Text size="lg" mt="sm" weight={500}>
                      {features[1].title}
                    </Text>
                    <Text color="dimmed" size="sm">
                      {features[1].description}
                    </Text>
                  </div>
                </div>

                <div key={features[2].title} className={features[2].title}>
                  <div className={classes.colour}>
                    <div className={classes.title}>{summary.numRequests}</div>
                    <div></div>
                  </div>
                  <div>
                    <Text size="lg" mt="sm" weight={500}>
                      {features[2].title}
                    </Text>
                    <Text color="dimmed" size="sm">
                      {features[2].description}
                    </Text>
                  </div>
                </div>

                <div key={features[3].title} className={features[3].title}>
                  <div className={classes.colour}>
                    <div className={classes.container}>
                      <div className={classes.manager}>{summary.manager}</div>
                    </div>
                  </div>
                  <div>
                    <Text size="lg" mt="sm" weight={500}>
                      {features[3].title}
                    </Text>
                    <Text color="dimmed" size="sm">
                      {features[3].description}
                    </Text>
                  </div>
                </div>
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

  const url = await project(slug);
  const summary = await url.methods.getSummary().call();

  const keys = [
    "numRequests",
    "minContribution",
    "contributersCount",
    "projectDetails",
    "projectName",
    "manager",
    "balance",
  ];

  const obj = summary.reduce((accumulator, value, index) => {
    return { ...accumulator, [keys[index]]: value };
  }, {});

  return {
    props: {
      summary: obj,
      slug: slug,
    },
  };
}
