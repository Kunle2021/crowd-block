import React, { useState } from "react";

import { useForm } from "@mantine/form";
import { Container, Space, NumberInput, TextInput } from "@mantine/core";

import project from "../src/project";
import web3 from "../src/Web3";
import { Router } from "../routes";

import { createStyles, Text, Title, Button, Textarea } from "@mantine/core";
// import image from "./image.svg";

const useStyles = createStyles((theme) => ({
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
      //textAlign: "left",
    },
  },

  inputWrapper: {
    width: "20%",
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

export default function Contribute(address) {
  const { classes } = useStyles();

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: { Contribution: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      //check val
      Contribution: (value) =>
        value < 1 ? "You must at contribute least 1 Wei" : null,
    },
  });

  const onContribute = async () => {
    setLoading(true);

    try {
      const account = await Web3.eth.getAccounts();
      //configure with contribute methods
      await address.methods.Contribute(form.values.Contribution).send({
        from: account[0],
      });
      Router.pushRoute("/");
    } catch (error) {
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

      <div>
        <div>
          <div className={classes.controls}>
            <form onSubmit={form.onSubmit(onContribute)}>
              <NumberInput
                mt="sm"
                label="Make a Contribution"
                placeholder="value"
                min={0}
                max={1000000}
                {...form.getInputProps("Contribution")}
              />

              <Button
                color="white"
                size="lg"
                radius="md"
                mt="xl"
                loading={loading}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
