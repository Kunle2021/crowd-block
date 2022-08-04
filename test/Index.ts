
import { ethers } from "hardhat";
import { Project, ProjectFactory } from "../typechain-types"

describe("Project", function () {
  let projectFactory: ProjectFactory;
  let project: Project;
  let projectAddress: string;

  it("Should deploy a projectFactory ", async () => {
    const ProjectFactory = await ethers.getContractFactory("ProjectFactory");
    projectFactory = await ProjectFactory.deploy();
    await projectFactory.deployed();
  });

  it("deploy a Project using ProjectFactory ", async () => {
    const tx = await projectFactory.CreateCampaign(10);
    const rc = await tx.wait();
    const event = rc.events?.find((event) => event.event === "CreatedProject");
    const args = event?.args;
    if (args) projectAddress = args[0];
  });

  it("attach an abi interface to the deployed domain", async () => {
    const Project = await ethers.getContractFactory("Project");
    project = await Project.attach(projectAddress);
  });

  it("get data from Project deployed by ProjectFactory ", async () => {
    const res = await project.Contribute()
    console.log(res);
  });
});