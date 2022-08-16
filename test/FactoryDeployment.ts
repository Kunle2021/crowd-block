import { ethers } from "hardhat";
import { Project, ProjectFactory } from "../typechain-types"

//Deploying a contract and accessing contract functions 

describe("Deploying the project contract from the projectFactory", function () {
  let projectFactory: ProjectFactory;
  let project: Project;
  let projectAddress: string;


  it("Should deploy a projectFactory ", async () => {
    const ProjectFactory = await ethers.getContractFactory("ProjectFactory");
    projectFactory = await ProjectFactory.deploy();
    await projectFactory.deployed();
  });

  it("deploy a Project using ProjectFactory ", async () => {
    const tx = await projectFactory.newProject(10, "test", "test");
    const rc = await tx.wait();
    const event = rc.events?.find((event) => event.event === "CreatedProject");
    const args = event?.args;
    if (args) projectAddress = args[0];
  });

  it("attach an abi interface to the deployed project", async () => {
    const Project = await ethers.getContractFactory("Project");
    project = await Project.attach(projectAddress);
  });

  //Need to test getting the address of the campaign that is deployed.
  

  it("Get Address of the deployed contract", async () => {
    const mp = await projectFactory.getDeployedProject();
    console.log(mp);
  })

  
});