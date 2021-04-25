pragma solidity >=0.4.16;

contract District4 {
    int256 registeredVoters;
    mapping(address => Voter) public votingRegistery;
    mapping(address => uint256) public registeredAddress;

    mapping(string => uint256) public votesReceived;

    constructor() public {
        int256 registeredVoters = 0;
    }

    struct Voter {
        address eth_addr; //20 byteDataType etherumAddress
        uint256 driversLicence;
        string name;
        string candidateName;
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
                candidateName: ""
            });

        votingRegistery[msg.sender] = candidate;
        registeredAddress[msg.sender] + 1;
        registeredVoters += 1;

        return msg.sender;
    }

    function vote(string memory _candidateName) public {
        // require(registeredAddress[msg.sender] > 0);

        votingRegistery[msg.sender].candidateName = _candidateName;

        votesReceived[_candidateName] += 1;

        // return true;
    }
}

// https://ethereum.stackexchange.com/questions/43817/structs-mappings-enums-how-to-make-them-work-together
//https://forum.ethereum.org/discussion/3495/operator-not-compatible-with-types-string-storage-ref-and-string-storage-ref
//https://ethereum.stackexchange.com/questions/52215/vm-error-revert-the-transaction-has-been-reverted-to-the-initial-state?rq=1
