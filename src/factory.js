import { useState } from "react";
import { ethers, Signer } from "ethers";

import web3 from "./Web3";

import projectfactory from "./artifacts/contracts/ProjectFactory.sol/ProjectFactory.json";
const factoryaddress = "0xE3020e6e64d27C46bAf8c84aC90A01476a244f77";

//They is only one factory address but there are multiple project addresses

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
