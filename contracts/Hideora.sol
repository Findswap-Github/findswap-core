pragma solidity =0.5.16;

import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol';

contract Hideora is ERC20Detailed, ERC20Mintable{
  constructor() ERC20Detailed('Hideora', 'HID', 18) public {
    _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
  }
}
