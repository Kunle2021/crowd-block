import web3 from "./Web3";

import projectjson from "./artifacts/contracts/Project.sol/Project.json";

// const project = (projectAddress) => {
//   const projectAddress = new web3.eth.Contract(projectjson.abi, address);

//   return projectAddress;
// };

// export default project;

export default async (projectAddress) => {
  const proj = await new web3.eth.Contract(projectjson.abi, projectAddress);

  return proj;
};