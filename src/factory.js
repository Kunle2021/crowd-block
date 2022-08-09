import { useState } from "react";
import { ethers, Signer } from "ethers";

import web3 from "./Web3";

import projectfactory from "./artifacts/contracts/ProjectFactory.sol/ProjectFactory.json";
const factoryaddress = "0x30414b6acf4c80d2ef263df96920f4f53bd48fe7";

// const provider = new ethers.providers.Web3Provider(window.ethereum);
// const contract = new ethers.Contract(factoryaddress, factory.abi, provider);

// const provider = new ethers.providers.Web3Provider(window.ethereum);
// const signer = provider.getSigner();

// const factory = new web3.eth.Contract(projectfactory.abi, factoryaddress);

// console.log(typeof projectfactory);

const signer = {
  from: "0x21846383f0E395A7e6511b07f5e158e1609859b2", // default from address
  gasPrice: "20000000000", // default gas price in wei, 20 gwei in this case
};

const test = JSON.stringify(projectfactory.abi);
console.log(test);
const parse = JSON.parse(test);
console.log(parse);
const factory = new web3.eth.Contract(parse, factoryaddress);
console.log(factory);

// const factory = new web3.eth.Contract(
//   JSON.stringify(projectfactory);
//   factoryaddress,
//   signer
// );

export default factory;
