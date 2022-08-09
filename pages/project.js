import factory from "../src/factory";

import React, { Component } from "react";

export default class Project extends Component {
  static async getInitialProps() {
    const projects = await factory.methods.getDeployedCampaigns().call();

    return { projects };
  }

  // renderProjects() {
  //   console.log("Test");
  //   {
  //     this.props.projects.map((address) => (
  //       <div className="user">{address}</div>
  //     ));
  //   }
  // }

  //will eventually render the js into functions.

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {this.props.projects.map((address) => (
          <div className="address">{address}</div>
        ))}
      </div>
    );
  }
}
