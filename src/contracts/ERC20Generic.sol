// SPDX-License-Identifier: MIT
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

abstract contract ERC20Generic is ERC20 {
  constructor(uint256 initialSupply) {
    _mint(msg.sender, initialSupply);
  }
}
