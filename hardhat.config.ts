/**
 * @type import('hardhat/config').HardhatUserConfig
 */
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'

require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "lR--iFs_zgovNcNOuhaI2oT2fpNnbz1V";
const GOERLI_PRIVATE_KEY =
  "4f73b25e053aba8d56fb8e6a078fa5576e44d18269aa5c6e67be636b44ac8938";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
  solidity: "0.8.6",
  paths: {
    artifacts: "./src/artifacts",
  },
};
