import React from "react";

import { Text, Title, Space } from "@mantine/core";

import { useStyles } from "./project/home";
import Search from "./search";
import { Link } from "../routes";

export default function searchheader() {
  const { classes } = useStyles();

  const customStyle = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <div>
      <Title className={classes.header}>
        <Link route="/">
          <a style={customStyle}>
            Crowd
            <Text component="span" className={classes.highlight} inherit>
              Block
            </Text>{" "}
          </a>
        </Link>
      </Title>
      <Space h="md" />
      <Search />
    </div>
  );
}
