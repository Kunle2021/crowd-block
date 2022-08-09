import React, { Component } from "react";
import factory from "../src/factory";

class Project extends Component {
  static async getInitialProps() {
    const projects = await factory.methods.getDeployedCampaigns().call();

    return { projects };
  }
  //more efficient server side rendering - enables server-side rendering in a page

  render() {
    return <div>{this.props.projects[0]}</div>;
  }
}

export default Project;
