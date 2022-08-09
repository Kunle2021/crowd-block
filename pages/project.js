import React, { useEffect } from "react";
import factory from "../src/factory";

export default function Project() {
  useEffect(async () => {
    // const project = await factory.getDeployedCampaigns();
    console.log("project");
  }, []);

  return (
    <div>
      <h1>Project Page</h1>
    </div>
  );
}
