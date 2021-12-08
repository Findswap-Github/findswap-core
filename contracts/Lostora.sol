pragma solidity =0.5.16;

import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol';

contract Lostora is ERC20Detailed, ERC20Mintable{
  constructor() ERC20Detailed('Lostora', 'LOS', 18) public {
    _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
  }
}
