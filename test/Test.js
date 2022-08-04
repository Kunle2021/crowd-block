const { expect } = require("chai");
const { ethers } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { provider } = require("ganache");

describe("Test Project Contract functions", function () {
  async function deployContract() {
    const [owner, operator] = await ethers.getSigners();
    const TestProject = await ethers.getContractFactory("Project");
    const hardhatProject = await TestProject.deploy(10, operator.address);

    return { owner, hardhatProject };
  }

  it("Confirm mimimum contract balance ", async () => {
    const { hardhatProject } = await loadFixture(deployContract);

    const value = await hardhatProject.minContribution();
    console.log(value);
    expect(value).to.equal(10);
  });

  it("Contribute to a campaign", async () => {
    const { hardhatProject, owner } = await loadFixture(deployContract);

    const sendEth = await hardhatProject.connect(owner).Contribute({
      value: ethers.utils.parseEther("1.0"),
    });
    await sendEth.wait();

    //check the contract balance
    const provider = ethers.getDefaultProvider();

    console.log(hardhatProject.address);
    const balance = await provider.getBalance(hardhatProject.address);
    const eth = ethers.utils.formatEther(balance);
    console.log(eth);

    expect(Math.round(eth)).to.equal(43);
  });

  it("Has the contribtion been approved, should be +1", async () => {
    const { hardhatProject, owner } = await loadFixture(deployContract);

    const sendEth = await hardhatProject.connect(owner).Contribute({
      value: ethers.utils.parseEther("1.0"),
    });
    await sendEth.wait();

    const value = await hardhatProject.contributersCount();
    console.log(value);
    expect(value).to.equal(1);

    //Increased contributer
  });

  //Need to test the Request functions tommorow
});
