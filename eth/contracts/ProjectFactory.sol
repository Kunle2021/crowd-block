// SPDX-License-Identifier: MIT
//optional console log - used in hardhat

import "hardhat/console.sol";

import "./Project.sol";

pragma solidity ^0.8.6;

contract ProjectFactory {
    address[] public deployedCampaigns;

    function CreateCampaign(uint256 minimum) public payable {
        address newContract = new Project(minimum, msg.sender);
        deployedCampaigns.push(newContract);
        //When we create an instance of a campaign the constructor must also be considered
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

//Project Factory - Uses a factory contract to help deploy an instance of the contract

