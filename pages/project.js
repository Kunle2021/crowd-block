import React, { useEffect } from "react";
import factory from "../src/factory";

export default function Project() {
  useEffect(async () => {
    const project = await factory.methods.getDeployedCampaigns().call();
    console.log(project);
  }, []);

  //componentdid

  return (
    <div>
      <h1>Project Page</h1>
    </div>
  );
}
