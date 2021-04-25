pragma solidity >=0.4.16;

contract District4 {
    int256 registeredVoters;
    int256 actualVoters;
    mapping(address => Voter) public votingRegistery;
    mapping(address => uint256) public registeredAddress;
    mapping(address => string) public ipAddressUsed;
    mapping(string => uint256) public votesReceived;

    constructor() public {
        registeredVoters = 0;
        actualVoters = 0;
    }
    

    struct Voter {
        address eth_addr;
        uint256 driversLicence;
        string name;
        string ipAddress;
        string candidateName;
    }

    function register(
        uint256 _driversLicence,
        string memory _name,
        string memory _ipAddress
    ) public returns (address) {
    
        Voter memory candidate =
            Voter({
                eth_addr: msg.sender,
                driversLicence: _driversLicence,
                name: _name,
                ipAddress: _ipAddress,
                candidateName: ""
            });

        votingRegistery[msg.sender] = candidate;
        registeredAddress[msg.sender] + 1;
        registeredVoters += 1;
        ipAddressUsed[msg.sender] = _ipAddress;

        return msg.sender;
    }

    function vote(string memory _ipAddress, string memory _candidateName)
        public
        returns (int256) {
        //Verify IP addresss of registered voter has not changed 
        require(
            keccak256(bytes(ipAddressUsed[msg.sender])) ==
                keccak256(bytes(_ipAddress))
        );

        votingRegistery[msg.sender].ipAddress = _ipAddress;
        votingRegistery[msg.sender].candidateName = _candidateName;
     
        votesReceived[_candidateName] += 1;
        actualVoters +=1;

        return actualVoters;
    }
}

// https://ethereum.stackexchange.com/questions/43817/structs-mappings-enums-how-to-make-them-work-together
//https://forum.ethereum.org/discussion/3495/operator-not-compatible-with-types-string-storage-ref-and-string-storage-ref
//https://ethereum.stackexchange.com/questions/30912/how-to-compare-strings-in-solidity/82739
