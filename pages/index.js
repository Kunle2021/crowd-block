import factory from "../src/factory";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Wrapper around the contracts

import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Container,
  Stack,
  Center,
  Space,
  Input,
  ScrollArea,
  Table,
} from "@mantine/core";

import React, { Component } from "react";
import Home from "../components/project/home";
import { Link } from "../routes";
import { useStyles } from "../components/project/home";

const styleButton = {
  backgroundColor: "green",
};

export default function Projects({ projects }) {
  const { classes } = useStyles();

  // projects.map((projects) =>
  console.log(projects);

  const data = projects?.map((project) => (
    <tr key={project.projectAddress}>
      <td>
        <Group spacing="sm">
          <div>
            <Text size="sm" weight={500}>
              {project.projectAddress}
            </Text>
          </div>
        </Group>
      </td>
      <td>{project.projectName}</td>
      <td>Contract</td>
      <td>
        <Button style={styleButton}>
          {/* <Link route={`/project/${projects}`}> */}
          <Link route={`/project/${project.projectAddress}`}>
            <a className={classes.links}> View Details</a>
          </Link>
        </Button>
      </td>
    </tr>
  ));

  return (
    <div>
      <Home />
      <Container>
        <Center></Center>
        <div>
          <ScrollArea>
            <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
              <thead>
                <tr>
                  <th>Address</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>{data}</tbody>
            </Table>
          </ScrollArea>
        </div>
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  const projects = await factory.methods.getDeployedProject().call();

  return {
    props: {
      projects: projects[0].map((projectAddress, i) => {
        return {
          projectAddress: projectAddress,
          projectName: projects[1][i],
        };
      }),
    },
  };
}
