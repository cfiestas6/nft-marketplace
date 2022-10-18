require("@nomiclabs/hardhat-waffle");
require("dotenv").config({path: ".env"});

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ALFAJORES_RPC_URL = process.env.ALFAJORES_RPC_URL;

if(!PRIVATE_KEY) {
  console.error("Missing private key");
}

if(!ALFAJORES_RPC_URL) {
  console.error("Missing rpc url");
}

module.exports = {
  solidity: "0.8.4",
  networks: {
    alfajores: {
      url: ALFAJORES_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
