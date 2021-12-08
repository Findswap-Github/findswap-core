const HID = artifacts.require('Hideora.sol')
const LOS = artifacts.require('Lostora.sol')
const Factory = artifacts.require('UniswapV2Factory.sol')

module.exports = async function (deployer, _network, addresses) {
  const factory = await Factory.at('0x95A192dc092871C7251109A83585A338382386c8');

  let losAddress, hidAddress;
  await deployer.deploy(HID);
  await deployer.deploy(LOS);
  const los = await LOS.deployed();
  const hid = await HID.deployed();
  losAddress = los.address;
  hidAddress = hid.address;

  await factory.createPair(losAddress, hidAddress);
  console.log('created Pair!');
  console.log('done')
};

