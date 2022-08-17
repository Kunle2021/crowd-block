// SPDX-License-Identifier: MIT
//optional console log - used in hardhat

import "hardhat/console.sol";

import "./Project.sol";

pragma solidity ^0.8.6;

contract ProjectFactory {
    address[] public projectAddress;
    string[] public projectName;

    event CreatedProject(address projectAddress);

    function newProject(
        uint256 minimum,
        string memory details,
        string memory name
    ) public payable returns (address) {
        Project newContract = new Project(minimum, details, name, msg.sender);
        // deployedProjects.push(
        //     ProjectStruct(payable(address(newContract)), (name))
        // );
        projectAddress.push(payable(address(newContract)));
        projectName.push((name));
        //When we create an instance of a campaign the constructor must also be considered
        emit CreatedProject(address(newContract));
        return address(newContract);
    }

    function getDeployedProject()
        public
        view
        returns (address[] memory, string[] memory)
    {
        return (projectAddress, projectName);
        // return deployedProjects;
    }
}

//Project Factory - Uses a factory contract to help deploy an instance of the contract
