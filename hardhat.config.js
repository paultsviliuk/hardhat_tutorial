const { task } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");

task("balance", "prints an account's balance").setAction(async () => {});


/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.18",
};
