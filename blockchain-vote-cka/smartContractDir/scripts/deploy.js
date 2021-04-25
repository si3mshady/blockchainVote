async function main() {
    const District4 = await ethers.getContractFactory("District4");
    
    // Start deployment, returning a promise that resolves to a contract object
    const district4 = await District4.deploy();
    console.log("Contract deployed to address:", district4.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });