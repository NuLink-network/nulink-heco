// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IStaking {

    function isStaker(address _user) external view returns (bool);

    struct staker {
        address owner;
        IERC20 stakeToken;
        uint256 stakeBalance;
        uint256 workcount;
        bool isWork;
    }
}