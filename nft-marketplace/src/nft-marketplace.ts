import {
  ListingCanceled,
  ListingCreated,
  ListingPurchased,
  ListingUpdate,
} from "../generated/NFTMarketplace/NFTMarketplace";
import { store } from "@graphprotocol/graph-ts";
import { ListingEntity } from "../generated/schema";

export function handleListingCreated(event: ListingCreated): void {

  // Create unique ID
  
  const id = 
    event.params.nftAddress.toHex() +
    "_" + 
    event.params.tokenId.toString() +
    "_" +
    event.params.seller.toHex();
  let listing = new ListingEntity(id);

  // set the properties of the listing as defined in the schema.

  listing.seller = event.params.seller;

  listing.nftAddress = event.params.nftAddress;

  listing.tokenId = event.params.tokenId;
  
  listing.price = event.params.price; 

  // save listing to the nodes.
  listing.save();
}


export function handleListingCanceled(event: ListingCanceled): void {
  
  const id = 
    event.params.nftAddress.toHex() +
    "_" + 
    event.params.tokenId.toString() +
    "_" +
    event.params.seller.toHex();
  
  let listing = ListingEntity.load(id);

  if (listing) {
    // Remove from the store (imported from graph-ts)
    store.remove("ListingEntity", id);
  }
}

export function handleListingPurchased(event: ListingPurchased): void {

  const id = 
    event.params.nftAddress.toHex() +
    "_" + 
    event.params.tokenId.toString() +
    "_" +
    event.params.seller.toHex();

  let listing = ListingEntity.load(id);

  if(listing) {
    listing.buyer = event.params.buyer;

    listing.save();
  }
}

export function handleListingUpdate(event: ListingUpdate): void {
   

  const id = 
    event.params.nftAddress.toHex() +
    "_" + 
    event.params.tokenId.toString() +
    "_" +
    event.params.seller.toHex();
  let listing = ListingEntity.load(id);

  if(listing) {
    listing.price = event.params.newPrice;

    listing.save();
  }
}

