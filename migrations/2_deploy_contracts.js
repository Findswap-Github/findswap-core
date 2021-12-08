// const Factory = artifacts.require("UniswapV2Factory.sol");
// 
// module.exports = async function (deployer, _network, addresses) {
//   // await deployer.deploy(Factory, addresses[0]);
//   //factory = await Factory.deployed();
//   factory  = await Factory.at('0x947C469816Be8bd1139D283E19be6cECb41f5c67')
//   init_hash = await factory.pairCodeHash();
//   console.log(init_hash)
// 
// //  let losAddress, hidAddress;
// //  losAddress = los.address;
// //  hidAddress = hid.address;
// //
// 
//   console.log('done')
// };

const json = require('@uniswap/v2-core/build/UniswapV2Factory.json')
const contract = require('@truffle/contract');
const UniswapV2Factory = contract(json);

UniswapV2Factory.setProvider(this.web3._provider);

module.exports = async function(_deployer, network, accounts) {
  await _deployer.deploy(UniswapV2Factory, accounts[0], {from: accounts[0]})
  factory  = await UniswapV2Factory.deployed
};
