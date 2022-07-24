// SPDX-License-Identifier: MIT
//optional console log - used in hardhat

import "hardhat/console.sol";

pragma solidity ^0.8.6;

contract Project {
    //This struct is for a spending request

    struct Request {
        string description;
        uint256 value;
        address recipient;
        bool complete;
        //must consider some type of voting mechanism for contract keep track of contributers
        uint256 approverCount;
        //has the contributer voted
        mapping(address => bool) hasApproved;
    }

    Request[] public requests; // allows to create an array of requests (for the spending requests)
    address public manager;
    uint256 public minContribution;
    uint256 public contributersCount;

    //Can't use an array of approvers due to gas fees
    // address[] public contributors;

    mapping(address => bool) contributers;

    constructor(uint256 minimum) public payable {
        manager = msg.sender;
        minContribution = minimum;
    }

    function Contribute() public payable {
        require(msg.value > minContribution);
        // contributors.push(msg.sender); //only able if pushing to an array
        contributers[msg.sender] = true;
        contributersCount++;
        //sets user that contributes to true in mapping
    }

    function createRequest(
        string memory description,
        uint256 value,
        address recipient
    ) public payable restrictedManager {
       Request storage r = requests[numRequests++];
                r.description = description;
                r.value = value;
                r.recipient = recipient;
                r.complete = false;
                r.approvalsCount = 0;
        
        requests.push(newRequest);
    }

    //Allows contributers to approve a spending request

    function approveRequest(uint256 index) public payable {
        Request storage request = requests[index];
        //object accessed in storage as we want to manipulate the struct not make a copy

        require(contributers[msg.sender]);
        //Requires that the address is in the contributers mapping
        require(!request.hasApproved[msg.sender]);
        //if the person has already voted on the spending request it shouldn't work hence !
        //a request of a certain index within the mapping
        request.hasApproved[msg.sender] = true;
        //That adressed has approved the spending request
        request.approverCount++;
        //Increase the count
    }

    function finishRequest(uint256 index) public payable restrictedManager {
        Request storage request = requests[index];
        require(!request.complete);
        require(request.approverCount > (contributersCount / 2));
        //More than 50% of contributers must have approved so request can pass
        //if the request is already complete it breaks
        request.recipient.transfer(request.value);
        request.complete = true;
    }

    modifier restrictedManager() {
        require(msg.sender == manager);
        _;
    }
}
