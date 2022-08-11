import React from "react";

import { useForm } from "@mantine/form";
import { Container, TextInput, Space, Group, Button } from "@mantine/core";
import Menu from "../../components/menu";
import factory from "../../src/factory";

const buttonStyles = {
  variant: "light",
  color: "blue",
  mt: "md",
  radius: "md",
};

export default function New() {
  const form = useForm({
    initialValues: {
      minContribution: "",
    },
  });

  const onSumbit = async () => {
    console.log(form.minContribution);
    // const create = await factory.methods.CreateCampaign(minContribution);
  };

  return (
    <div>
      <Menu />
      <Space h="xl" />
      <Container>
        <div style={{ maxWidth: 320, margin: "auto" }}>
          <TextInput
            label="minContribution"
            placeholder="minContribution"
            {...form.getInputProps("minContribution")}
          />

          <Group position="center" mt="xl">
            <Button
              fullWidth
              variant="light"
              style={buttonStyles}
              onClick={() => onSumbit()}
            >
              Submit
            </Button>
          </Group>
        </div>
      </Container>
    </div>
  );
}
