// SPDX-License-Identifier: MIT
//optional console log - used in hardhat

import "hardhat/console.sol";

import "./Project.sol";

pragma solidity ^0.8.6;

// contract ProjectFactory {
//     address[] public deployedCampaigns;

//     function CreateCampaign(uint256 minimum) public payable {
//         Project newContract = new Project(minimum, msg.sender);
//         deployedCampaigns.push(payable(address(newContract)));
//         //When we create an instance of a campaign the constructor must also be considered
//     }

//     function getDeployedCampaigns() public view returns (address[] memory) {
//         return deployedCampaigns;
//     }
// }

contract ProjectFactory {
    address[] public deployedCampaigns;

    event CreatedProject(address projectAddress);

    function CreateCampaign(uint256 minimum) public payable returns (address) {
        Project newContract = new Project(minimum, msg.sender);
        deployedCampaigns.push(payable(address(newContract)));
        //When we create an instance of a campaign the constructor must also be considered
        emit CreatedProject(address(newContract));
        return address(newContract);
    }

    function getDeployedCampaigns() public view returns (address[] memory) {
        return deployedCampaigns;
    }
}

//Project Factory - Uses a factory contract to help deploy an instance of the contract
