const {ethers} = require("hardhat");
//1.TenderFileConContractAddress 0x05198c2783d3497361ca936a70E5643287dfD0B8
//2. TenderFileConContractAddress 0xE50A2E68f31e899D6e794314823cD2ac126BD764

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