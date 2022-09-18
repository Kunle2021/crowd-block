import { useState } from "react";
import { ethers, Signer } from "ethers";

import web3 from "./Web3";

import projectfactory from "./artifacts/contracts/ProjectFactory.sol/ProjectFactory.json";
const factoryaddress = "0xE3020e6e64d27C46bAf8c84aC90A01476a244f77";

const factory = new web3.eth.Contract(projectfactory.abi, factoryaddress);

export default factory;
