import Web3 from "web3";

let web3;
const ALCHEMY_API_KEY = "lR--iFs_zgovNcNOuhaI2oT2fpNnbz1V";

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}` //http://localhost:3000/project
  );
  web3 = new Web3(provider);
}

export default web3;
