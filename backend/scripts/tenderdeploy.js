const {ethers} = require("hardhat");
//TenderFileConContractAddress 0x05198c2783d3497361ca936a70E5643287dfD0B8
//tenderadress
async function main(){
    //get the contract
    const TenderFileCoinContract = await ethers.getContractFactory("Bider");
    //deploy the contract
    const TenderFileCoinContractDeploy = await TenderFileCoinContract.deploy();
    //await deployment
    await TenderFileCoinContractDeploy.deployed();
    //console the address
    console.log("TenderFileConContractAddress", TenderFileCoinContractDeploy.address);
}
//call main
main().then(()=>
process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
})