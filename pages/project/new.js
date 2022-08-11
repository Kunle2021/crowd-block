import React from "react";
import { Container, Space } from "@mantine/core";

import { useForm } from "@mantine/form";
import { TextInput, Button, Group } from "@mantine/core";
import Menu from "../../components/menu";

export default function New() {
  const form = useForm({
    initialValues: {
      minContribution: "",
    },
  });

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
            <Button variant="outline" onClick={() => console.log("Test")}>
              Submit
            </Button>
          </Group>
        </div>
      </Container>
    </div>
  );
}
