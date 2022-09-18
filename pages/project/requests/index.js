import React from "react";
import Search from "../../../components/searchheader";
import {
  Button,
  Container,
  ScrollArea,
  Table,
  Group,
  Title,
  Text,
  Space,
} from "@mantine/core";
import { Link } from "../../../routes";
import { request } from "http";
import project from "../../../src/project";
import { useStyles } from "../../../components/project/home";

//Need to use same table as the first paeg

const newProject = [
  { id: 1, address: "Address", value: 100, approvers: 1, contributors: 3 },
  { id: 2, address: "Receiver", value: 250, approvers: 6, contributors: 10 },
];

const styleButton = {
  backgroundColor: "green",
};

export default function List({ projects, slug }) {
  const { classes } = useStyles();

  const onApprove = async () => {
    setLoading(true);

    console.log(slug);
    const address = await project(slug);

    try {
      const account = await Web3.eth.getAccounts();
      await address.methods.approveRequest(project.id).send({
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

  const onFinalise = async () => {
    setLoading(true);

    console.log(slug);
    const address = await project(slug);

    try {
      const account = await Web3.eth.getAccounts();
      await address.methods.finishRequest(project.id).send({
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

  const data = newProject?.map((project) => (
    <tr key={newProject[0]}>
      <td>
        <Group spacing="sm">
          <div>
            <div size="sm" weight={500}>
              {project.address}
            </div>
          </div>
        </Group>
      </td>
      <td>{project.value}</td>
      <td>{project.approvers}</td>
      <td>{project.contributors}</td>
      <td>
        <Button style={styleButton} onClick={onFinalise}>
          {/* <Link route={`/project/${projects}`}> */}
          <Link route={`/project/${project.projectAddress}`}>
            <a className={classes.links}>Approve</a>
          </Link>
        </Button>
      </td>
      <td>
        <Button style={styleButton} onClick={onApprove}>
          {/* <Link route={`/project/${projects}`}> */}
          <Link route={`/project/${project.projectAddress}`}>
            <a className={classes.links}> Finish Request</a>
          </Link>
        </Button>
      </td>
    </tr>
  ));

  return (
    <div className={classes.wrapper}>
      <Search />
      <div className={classes.body}>
        <Title className={classes.title}>
          Approve{" "}
          <Text component="span" className={classes.highlight} inherit>
            Spending Requests
          </Text>{" "}
          on the Blockchain
        </Title>
        <Space h="xl" />

        <Container>
          <Link route={`/project/${slug}/requests/create`}>
            <Button>Create Requests</Button>
          </Link>

          <Space h="xl" />

          <div>
            <ScrollArea>
              <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
                <thead>
                  <tr>
                    <th>Receiver</th>
                    <th>Value</th>
                    <th>Approved</th>
                    <th>Contributors</th>
                    <th>Approve</th>
                    <th>Finalise</th>
                  </tr>
                </thead>
                <tbody>{data}</tbody>
              </Table>
            </ScrollArea>
          </div>
        </Container>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let slug = context.query.address;

  const url = await project(slug);
  //const summary = await url.methods.getRequest().call();

  //console.log(url);

  const keys = ["Recipient", "Value", "Approvers", "Contributers"];

  //change the key values

  // const obj = summary.reduce((accumulator, value, index) => {
  //   return { ...accumulator, [keys[index]]: value };
  // }, {});

  return {
    props: {
      slug: slug,
    },
  };
}
