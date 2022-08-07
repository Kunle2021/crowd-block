const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { provider } = require("ganache");
const { assert } = require("console");
const { request } = require("http");

describe("Test Project Contract functions", function () {
  async function deployContract() {
    const [owner, addr1] = await ethers.getSigners();
    const TestProject = await ethers.getContractFactory("Project");
    const hardhatProject = await TestProject.deploy(10, owner.address);

    return { owner, hardhatProject, addr1 };
  }

  // it("Confirm mimimum contract balance ", async () => {
  //   const { hardhatProject } = await loadFixture(deployContract);

  //   const value = await hardhatProject.minContribution();
  //   console.log(value);
  //   expect(value).to.equal(10);
  // });

  // it("Contribute to a campaign", async () => {
  //   const { hardhatProject, owner } = await loadFixture(deployContract);

  //   const provider = waffle.provider;

  //   expect(await provider.getBalance(hardhatProject.address)).to.equal(0);
  //   console.log("contract balance is zero");

  //   await hardhatProject.Contribute({
  //     value: 100,
  //     from: owner.address,
  //   });

  //   expect(await provider.getBalance(owner.address)).to.equal(100);
  //   console.log("Account Balance is 100");
  // });

  // it("Has the contribtion been approved, should be +1", async () => {
  //   const { hardhatProject, owner } = await loadFixture(deployContract);

  //   await hardhatProject.Contribute({
  //     value: 100,
  //     from: owner.address,
  //   });

  //   const value = await hardhatProject.contributersCount();
  //   console.log("Contributers: " + value);
  //   expect(value).to.equal(1);
  // });

  // it("Require a minimum contribution", async () => {
  //   const { hardhatProject, owner } = await loadFixture(deployContract);

  //   const provider = waffle.provider;

  //   try {
  //     await hardhatProject.Contribute({
  //       value: 9,
  //       from: owner.address,
  //     });

  //     let con = await provider.getBalance(owner.address);
  //     console.log("contribution is met: ");
  //   } catch (error) {
  //     con = await provider.getBalance(owner.address);
  //     console.log("min contribution is not met: ");
  //     assert(error);
  //   }
  // });

  //Need to test the Request functions tommorow

  it("Allow the manager to create a contract request", async () => {
    const { hardhatProject, owner, addr1 } = await loadFixture(deployContract);

    await hardhatProject.createRequest("First Request", 100, addr1.address, {
      from: owner.address,
    });

    const request = await hardhatProject.requests(0)
    assert.equal("First Request", request.description);
  });
});