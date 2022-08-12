import React, { useState } from "react";

import { useForm } from "@mantine/form";
import { Container, Space, NumberInput } from "@mantine/core";

import Menu from "../../components/menu";
import factory from "../../src/factory";
import Web3 from "../../src/Web3";

import {
  createStyles,
  Text,
  Title,
  TextInput,
  Button,
  Image,
} from "@mantine/core";
// import image from "./image.svg";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: "40%",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  body: {
    paddingRight: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

const buttonStyles = {
  variant: "light",
  color: "white",
  mt: "md",
  radius: "md",
};

const container = {
  width: 600,
  height: 150,
  backgroundColor: "white",
};

export default function New() {
  const { classes } = useStyles();
  const [error, setError] = useState();

  const form = useForm({
    initialValues: { minContribution: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      minContribution: (value) =>
        value < 1 ? "You must at contribute least 1 Wei" : null,
    },
  });

  const onContribute = async () => {
    try {
      const account = await Web3.eth.getAccounts();
      await factory.methods.CreateCampaign(form.values.minContribution).send({
        from: account[0],
      });
    } catch (error) {
      setError({
        errorMessage,
      });
    }
  };

  return (
    <div>
      <Space h="xl" />
      <Menu />
      <Space h="xl" />

      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>Wait a minute...</Title>
          <Text weight={500} size="lg" mb={5}>
            Subscribe to our newsletter!
          </Text>
          <Text size="sm" color="dimmed">
            You will never miss important product updates, latest news and
            community QA sessions. Our newsletter is once a week, every Sunday.
          </Text>

          <div className={classes.controls}>
            <Container
              style={container}
              classNames={{ input: classes.input, root: classes.inputWrapper }}
            >
              <form onSubmit={form.onSubmit(onContribute)}>
                <NumberInput
                  mt="sm"
                  label="minContribution"
                  placeholder="minContribution"
                  min={0}
                  max={100000000000000}
                  {...form.getInputProps("minContribution")}
                />
                <Button type="submit" mt="sm" style={buttonStyles}>
                  Submit
                </Button>
              </form>
            </Container>
          </div>
        </div>
        {/* <Image src={image.src} className={classes.image} /> */}
      </div>

      {/* <Space h="xl" />
      <Container style={container}>
        <form onSubmit={form.onSubmit(onContribute)}>
          <NumberInput
            mt="sm"
            label="minContribution"
            placeholder="minContribution"
            min={0}
            max={100000000000000}
            {...form.getInputProps("minContribution")}
          />
          <Button type="submit" mt="sm" style={buttonStyles}>
            Submit
          </Button>
        </form>
      </Container> */}
    </div>
  );
}
