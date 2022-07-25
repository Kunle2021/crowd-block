/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");

//need to change the network

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/lR--iFs_zgovNcNOuhaI2oT2fpNnbz1V",
      accounts: [
        // "4f73b25e053aba8d56fb8e6a078fa5576e44d18269aa5c6e67be636b44ac8938",
        //need to double check the account name
      ],
    },
  },
  solidity: "0.8.6",
  paths: {
    artifacts: "./src/artifacts",
  },
};
