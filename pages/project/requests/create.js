import React, { useState } from "react";

import { useForm } from "@mantine/form";

import project from "../../../src/project";
import Web3 from "../../../src/Web3";
import { Router } from "../../../routes";
import searchheader from "../../../components/searchheader";

import {
  createStyles,
  Text,
  Title,
  Button,
  Textarea,
  Space,
  Container,
  NumberInput,
  TextInput,
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
    // border: `1px solid ${
    //   theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    // }`,

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
    // color: theme.colorScheme === "dark" ? theme.white : theme.black,
    // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    // lineHeight: 1,
    // marginBottom: theme.spacing.md,
    textAlign: "center",
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      //textAlign: "left",
    },
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
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

export default function create({ slug }) {
  const { classes } = useStyles();

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: { Description: "", Value: 0, Address: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      //check val
      Description: (value) => (value.length < 3 ? "" : null),
      Value: (value) => (value.length < 1 ? "Enter Value" : null),
      Address: (value) => (value.length < 3 ? "Not a valid Address" : null),
      //some type of functional validation
    },
  });

  const onContribute = async () => {
    setLoading(true);

    console.log(slug);
    const address = await project(slug);

    try {
      const account = await Web3.eth.getAccounts();
      await address.methods
        .createRequest(
          form.values.Description,
          form.values.Value,
          form.values.Address
        )
        .send({
          from: account[0],
        });
      // Router.pushRoute("/");
      Router.replaceRoute(`/project/${slug}/requests/`);
      //replace route with the main requests page
    } catch {
      setError({
        error,
      });
      //may look at error box here
    }

    setLoading(false);
  };

  return (
    <div>
      <Space h="xl" />
      {/* <Searchheader /> */}
      <Space h="xl" />

      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>
            Create a{" "}
            <Text component="span" className={classes.highlight} inherit>
              Spending Request
            </Text>{" "}
            on the Blockchain
          </Title>
          <Text size="sm" color="dimmed">
            A CrowdBlock project does more than raise money. It builds community
            around your work.
          </Text>{" "}
          <div className={classes.controls}>
            <Container
              style={container}
              className={{ input: classes.input, root: classes.inputWrapper }}
            >
              <form onSubmit={form.onSubmit(onContribute)}>
                <TextInput
                  label="Address"
                  placeholder="Address"
                  {...form.getInputProps("Address")}
                />

                <NumberInput
                  mt="sm"
                  label="Value(WEI)"
                  placeholder="Value"
                  min={0}
                  max={100000000000000}
                  {...form.getInputProps("Value")}
                />
                <Textarea
                  placeholder="Description"
                  label="Description"
                  required
                  {...form.getInputProps("Description")}
                />

                <Button
                  loading={loading}
                  type="submit"
                  mt="sm"
                  style={buttonStyles}
                >
                  Submit
                </Button>
              </form>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let slug = context.query.address;

  return {
    props: {
      slug: slug,
    },
  };
}
