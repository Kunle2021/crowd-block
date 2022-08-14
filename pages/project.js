import factory from "../src/factory";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  createStyles,
} from "@mantine/core";
import { IconDatabase } from "@tabler/icons";

import React, { Component } from "react";

import Menu from "../components/menu";

import First from "../components/project/first";

const settings = {
  className: "center",
  centerMode: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerPadding: "60px",
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

const styleButton = {
  backgroundColor: "green",
};

const styleText = {
  component: "span",
  align: "center",
  variant: "gradient",
  gradient: "indigo",
  to: "cyan",
  deg: 45,
  size: "xl",
  weight: 700,
  fontFamily: "Greycliff CF, sans-serif",
  marginBottom: "10px",
  width: "100",
};

export default function Projects({ projects }) {
  const data = projects.map((projects) => (
    <tr key={projects}>
      <td>
        <Group spacing="sm">
          <div>
            <Text size="sm" weight={500}>
              {projects}
            </Text>
          </div>
        </Group>
      </td>
      <td>Contract</td>
      <td>
        <Button style={styleButton}>View Details</Button>
      </td>
    </tr>
  ));

  return (
    <div>
      <First />
      <Container>
        <Center></Center>
        {/* <Slider {...settings}>
          {projects.map((address) => (
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Group position="apart" mt="md" mb="xs">
                {" "}
                <Text weight={500}>{address}</Text>
                <Badge color="pink" variant="light">
                  Contract
                </Badge>
              </Group>

              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                View Project Details
              </Button>
            </Card>
          ))}
        </Slider> */}
        {/* <Space h="xl" />
        <Space h="xl" /> */}
        <div>
          <ScrollArea>
            <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
              <thead>
                <tr>
                  <th>Address</th>
                  <th>Type</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>{data}</tbody>
            </Table>
          </ScrollArea>
        </div>
        <Stack
          sx={(theme) => ({
            height: 600,
            paddingRight: 100,
            paddingLeft: 100,
            paddingTop: 50,
            radius: 100,
          })}
        >
          <Space h="xl" />
          <Space h="xl" />
        </Stack>
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  const projects = await factory.methods.getDeployedCampaigns().call();
  return {
    props: { projects },
  };
}
