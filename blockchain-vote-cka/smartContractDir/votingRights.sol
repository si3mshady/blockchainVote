pragma solidity >=0.4.16;

contract District4 {
    int256 registeredVoters;
    mapping(address => Voter) public votingRegistery;
    mapping(Candidate => uint256) public votesReceived;

    constructor() public {
        int256 registeredVoters = 0;
    }

    enum Candidate {CandidateA, CandidateB, CandidateC,  NONE}
    Candidate constant defaultCandidate = Candidate.NONE;
  

    struct Voter {
        address eth_addr; //20 byteDataType etherumAddress
        uint256 driversLicence;
        string name;
        bytes32 ipAddress;
        Candidate defaultCandidate;
    }

    function register(uint256 _driversLicence, string memory _name)
        public
        returns (address)
    {
        Voter memory candidate =
            Voter({
                eth_addr: msg.sender,
                driversLicence: _driversLicence,
                name: _name,
                ipAddress: "",
                candidateChoice: ""
            });

        votingRegistery[msg.sender] = candidate;
        registeredVoters += 1;

        return msg.sender;
    }

    function vote(Voter memory _voter, bytes32 _ipAddress, Candidate _candidate ) public returns (bool) {
        _voter.ipAddress = _ipAddress;

    }

}
