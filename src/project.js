import web3 from "./Web3";

import projectjson from "./artifacts/contracts/Project.sol/Project.json";

export default async (projectAddress) => {
  const proj = await new web3.eth.Contract(projectjson.abi, projectAddress);

  return proj;
};
