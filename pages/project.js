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
} from "@mantine/core";
import { IconDatabase } from "@tabler/icons";

import React, { Component } from "react";

import Menu from "../components/menu";

const settings = {
  className: "center",
  centerMode: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 4,
  centerPadding: "60px",
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
  ],
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

const first = {
  backgroundColor: "red",
};

export default function Projects({ projects }) {
  return (
    <div>
      <Container fluid style={first}>
        First Container
      </Container>
      <Space h="xl" />
      <Container fluid style={first}>
        Second Container
      </Container>
      <Container>
        <Space h="xl" />
        <Space h="xl" />
        <Menu />
        <Space h="xl" />
        <Space h="xl" />
        <Center>
          <Text
            component="span"
            align="center"
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            size="xl"
            weight={700}
            style={{ fontFamily: "Greycliff CF, sans-serif" }}
          >
            Latest Projects
          </Text>{" "}
        </Center>
        <Space h="xl" />
        <Slider {...settings}>
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
        </Slider>
        <Space h="xl" />
        <Space h="xl" />
        <Center>
          <Button>Create Project</Button>
        </Center>
        <Space h="xl" />
        <Space h="xl" />
        <Center>
          {" "}
          <Text
            component="span"
            align="center"
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            size="xl"
            weight={700}
            style={{ fontFamily: "Greycliff CF, sans-serif" }}
          >
            All Projects
            {/* Main header text */}
          </Text>{" "}
        </Center>
        <Space h="xl" />
        <Stack
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
            height: 600,
            paddingRight: 100,
            paddingLeft: 100,
            paddingTop: 50,
            radius: 100,
          })}
        >
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
