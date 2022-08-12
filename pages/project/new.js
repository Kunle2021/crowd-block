import React from "react";

import { useForm } from "@mantine/form";
import { Container, Space, Button, NumberInput } from "@mantine/core";
import Menu from "../../components/menu";
import factory from "../../src/factory";
import Web3 from "../../src/Web3";

const buttonStyles = {
  variant: "light",
  color: "white",
  mt: "md",
  radius: "md",
};

const container = {
  width: 200,
  height: 200,
  backgroundColor: "orange",
};

export default function New() {
  const form = useForm({
    initialValues: { minContribution: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      minContribution: (value) =>
        value < 1 ? "You must at contribute least 1 Wei" : null,
    },
  });

  const onContribute = async () => {
    const account = await Web3.eth.getAccounts();
    await factory.methods.CreateCampaign(form.values.minContribution, {
      from: account[0],
    });
  };

  return (
    <div>
      <Menu />
      <Space h="xl" />
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
      </Container>
    </div>
  );
}
