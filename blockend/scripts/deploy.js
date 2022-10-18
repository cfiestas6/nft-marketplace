const { ethers } = require("hardhat");

async function main() {
  const CeloNFTFactory = await ethers.getContractFactory("CeloNFT");

  const celoNftContract = await CeloNFTFactory.deploy();
  await celoNftContract.deployed();

  console.log("Celo NFT deployed to: ", celoNftContract.address);

  const NFTMarketplaceContract = await ethers.getContractFactory("NFTMarketplace");

  const nftMarketplaceContract = await NFTMarketplaceContract.deploy();

  await nftMarketplaceContract.deployed();

  console.log("NFT Marketplace deployed to: ", nftMarketplaceContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
