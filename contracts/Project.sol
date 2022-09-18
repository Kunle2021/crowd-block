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

    // Request[] public requests; // allows to create an array of requests (for the spending requests)
    address public manager;
    uint256 public minContribution;
    uint256 public contributorsCount;
    string public projectDetails;
    string public projectName;

    uint256 numRequests;
    mapping(uint256 => Request) public requests;

    //Can't use an array of approvers due to gas fees
    // address[] public contributors;

    mapping(address => bool) contributors;

    constructor(
        uint256 minimum,
        string memory details,
        string memory name,
        address creator
    ) payable {
        manager = creator;
        minContribution = minimum;
        projectDetails = details;
        projectName = name;
    }

    function Contribute() public payable {
        require(msg.value > minContribution);
        contributors[msg.sender] = true;
        contributorsCount++;
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
        r.approverCount = 0;
    }

    //chnage the createRequest function

    //You cannot create a mapping (or a struct containing a mapping) in memory.

    //Allows contributers to approve a spending request

    function approveRequest(uint256 index) public payable {
        Request storage request = requests[index];

        require(contributors[msg.sender]);
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
        require(request.approverCount > (contributorsCount / 2));
        //More than 50% of contributers must have approved so request can pass
        //if the request is already complete it breaks
        payable(request.recipient).transfer(request.value);
        //Transfering funds hence request must be payable
        request.complete = true;
    }

    struct Summary {
        uint256 numRequests;
        uint256 minContribution;
        uint256 contributersCount;
        string projectDetails;
        string projectName;
        address manager;
        uint256 balance;
    }

    mapping(address => Summary) public sum;

    //need to redeploy made the function payable (below)

    function getSummary() public returns (Summary memory) {
        sum[address(this)].numRequests = numRequests;
        sum[address(this)].minContribution = minContribution;
        sum[address(this)].contributersCount = contributorsCount;
        sum[address(this)].projectDetails = projectDetails;
        sum[address(this)].projectName = projectName;
        sum[address(this)].manager = manager;
        sum[address(this)].balance = address(this).balance;

        return sum[address(this)];
    }

    function getNumRequest() public view returns (uint256) {
        return numRequests;
    }

    modifier restrictedManager() {
        require(msg.sender == manager);
        _;
    }
}
