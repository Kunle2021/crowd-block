import { useState } from "react";
import { ethers, Signer } from "ethers";

import web3 from "./Web3";

import projectfactory from "./artifacts/contracts/ProjectFactory.sol/ProjectFactory.json";
const factoryaddress = "0xA211AC638d230B41001dE9f04CDF5Dfd82030e4D";

// const provider = new ethers.providers.Web3Provider(window.ethereum);
// const contract = new ethers.Contract(factoryaddress, factory.abi, provider);

// const provider = new ethers.providers.Web3Provider(window.ethereum);
// const signer = provider.getSigner();

// const factory = new web3.eth.Contract(projectfactory.abi, factoryaddress);

// console.log(typeof projectfactory);

// const test = JSON.stringify(projectfactory.abi);
// //Turns object into json
// //I don't think the stringify is needed just testing stuff
// const parse = JSON.parse(test);
//Parses the json string
const factory = new web3.eth.Contract(projectfactory.abi, factoryaddress);
// console.log(factory);

// const factory = new web3.eth.Contract(
//   JSON.stringify(projectfactory);
//   factoryaddress,
//   signer
// );

export default factory;
