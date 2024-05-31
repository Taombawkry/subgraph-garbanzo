import { ethers } from "hardhat";

async function main() {

    // Get the signers
    const [controller, owner, beneficiary1, beneficiary2, funder] = await ethers.getSigners();
    // Hardcoded addresses
    const usdcTokenAddress = "0xF1Db912Df4e70736569c86cf8664Bec70820Bff4";
    const museumAddress = "0x1C39A3e2aD8c9CdFdc3d1EB7b29Dbeb215071324";
    const organizerServiceAddress = "0xc0E381221F83a3e5C73b696Fd2fDCbc086d3A2E5";
    const artifactNFT1 = "0x87FedE8360e3e109E555F4441e8c3F5F6b750EC6";
    const artifactNFT2 = "0x661f20F33A0E2B9bd65fA00AC31FeA842342FBf1";

  
    const exhibit1 ={
        name: "Kizu: Nekketsu",
        symbol: "NEKK",
        ticketPrice: ethers.parseUnits("5", 18),
        beneficiaries: [beneficiary1.address, beneficiary2.address],
        shares: [50, 50],
        baseURI: "https://s3.tebi.io/summitsharemetadata/leadingLadies",
        location: "Vitalik's Master Node",
        artifactNFT: artifactNFT1,
        details: "Test Two",
        id: "NEKKII"
    } 
    const exhibit2 ={
        name: "Bake: Bakemonogatari",
        symbol: "BMG",
        ticketPrice: ethers.parseUnits("10", 18),
        beneficiaries: [beneficiary1.address, beneficiary2.address],
        shares: [50, 50],
        baseURI: "https://s3.tebi.io/summitsharemetadata/leadingLadies",
        location: "New York,USA",
        artifactNFT: artifactNFT2,
        details: "Test Two",
        id: "BMGII"
    }

    // Connect to the contracts
    const OrganizerService = await ethers.getContractFactory("EventOrganizerService");
    const Museum = await ethers.getContractFactory("Museum");
    const UsdcToken = await ethers.getContractFactory("MUSDC");
    const ArtifactNFT = await ethers.getContractFactory("ArtifactNFT");
    
    const organizerService = OrganizerService.attach(organizerServiceAddress).connect(owner);
    const museum = Museum.attach(museumAddress).connect(owner);
    const usdcToken = UsdcToken.attach(usdcTokenAddress).connect(owner);
    const artifactNFT = ArtifactNFT.attach(artifactNFT1).connect(owner);
    
    // Organize an exhibit
    const tx1 = await organizerService.connect(owner).organizeExhibit( 
            exhibit1.name,
            exhibit1.symbol,
            exhibit1.ticketPrice, // ticket price
            exhibit1.beneficiaries, // beneficiaries
            exhibit1.shares, // shares
            exhibit1.baseURI, // base URI
            exhibit1.location, // location
            exhibit1.artifactNFT, // ArtifactNFT address
            exhibit1.details, // details
            exhibit1.id //exhibit id
        );
    const receipt1 = await tx1.wait(6);
    console.log("Organized Exhibit 1", receipt1.status)

    const tx2 = await organizerService.connect(owner).organizeExhibit(
            exhibit2.name,
            exhibit2.symbol,
            exhibit2.ticketPrice, // ticket price
            exhibit2.beneficiaries, // beneficiaries
            exhibit2.shares, // shares
            exhibit2.baseURI, // base URI
            exhibit2.location, // location
            exhibit2.artifactNFT, // ArtifactNFT address
            exhibit2.details, // details
            exhibit2.id //exhibit id
        );
    const receipt2 = await tx2.wait(6);
    console.log("Organized Exhibit 2", receipt2.status)

  
    // Read the contract state
    const exhibitNFTAddress = await organizerService.exhibits("exhibit1");
    const exhibit2NFTAddress = await organizerService.exhibits("exhibit2");
    console.log("ExhibitNFT deployed to:", exhibitNFTAddress)

    const tx3 =  await museum.curateExhibit("exhibit1", exhibitNFTAddress);
    const receipt3 = await tx3.wait(6);
    console.log("Curated Exhibit 1", receipt3.status)

    // get usdcToken set on museum
    const exhibitMuseumAddress = await museum.exhibits("exhibit1");
    console.log("ExhibitNFT deployed to:", exhibitNFTAddress)
    console.log("ExhibitMuseum deployed to:", exhibitMuseumAddress)
    console.log("ExhibitNFT deployed to:", exhibit2NFTAddress)

    //mint artifactNFTs
    const tx4 = await artifactNFT.mint(owner.address, 10);
    const receipt4 = await tx4.wait(6);
    console.log("Minted ArtifactNFT 1", receipt4.status)

    
  
  // // Purchase a few tickets
  // await usdcToken.connect(funder).approve(museum.target, ethers.parseUnits("30", 18),); // Approve 3 USDC
  // await museum.connect(funder).purchaseTicket("exhibit1", ethers.parseUnits("10", 18)); // Purchase 1 ticket
  // await museum.connect(funder).purchaseTicket("exhibit1", ethers.parseUnits("10", 18)); // Purchase 1 ticket
  // await museum.connect(funder).purchaseTicket("exhibit1", ethers.parseUnits("10", 18)); // Purchase 1 ticket
    
    
    
    
    // try {

    //     let tx2 = await museum.connect(funder).purchaseTicket("exhibit1", ethers.parseUnits("20", 18)); // Purchase 1 ticket
    //     console.log("purchase ticket 1", tx2)
    // } catch (e) {
    //     console.log(e)
    // }
    // let tx3= await museum.connect(funder).purchaseTicket("exhibit1", ethers.parseUnits("10", 18)); // Purchase 1 ticket
    // await tx3.wait();
    // let tx4 = await museum.connect(funder).purchaseTicket("exhibit1", ethers.parseUnits("10", 18)); // Purchase 1 ticket
    // await tx4.wait();
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
 
