const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { provider } = require("ganache");
const { assert } = require("console");

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

    const provider = waffle.provider;

    expect(await provider.getBalance(hardhatProject.address)).to.equal(0);
    console.log("contract balance is zero");

    await hardhatProject.Contribute({
      value: 100,
      from: owner.address,
    });

    expect(await provider.getBalance(owner.address)).to.equal(100);
    console.log("Account Balance is 100");
  });

  it("Has the contribtion been approved, should be +1", async () => {
    const { hardhatProject, owner } = await loadFixture(deployContract);

    await hardhatProject.Contribute({
      value: 100,
      from: owner.address,
    });

    const value = await hardhatProject.contributersCount();
    console.log("Contributers: " + value);
    expect(value).to.equal(1);
  });

  it("Require a minimum contribution", async () => {
    const { hardhatProject, owner } = await loadFixture(deployContract);

    const provider = waffle.provider;

    try {
      await hardhatProject.Contribute({
        value: 9,
        from: owner.address,
      });

      let con = await provider.getBalance(owner.address);
      console.log("contribution is met: ");
    } catch (error) {
      con = await provider.getBalance(owner.address);
      console.log("min contribution is not met: ");
      assert(error);
    }
  });

  //Need to test the Request functions tommorow
});
