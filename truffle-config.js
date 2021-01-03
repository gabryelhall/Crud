// const fs = require("fs");
const HDWalletProvider = require("truffle-hdwallet-provider");

const secret = "input clean agent veteran flee ivory derive patient pole near argue pause"


module.exports = {
  networks: {
    ropsten: {
      provider: () => 
        new HDWalletProvider(secret,"https://ropsten.infura.io/v3/a63a3d1dd19848cfa3fe9ba450acea19"
        ),
        network_id: '3'
    } 
  }
};