import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listingsData }) {
  const renderListings = listingsData.map((individualListing)=>{
    return <ListingCard individualListing={individualListing} key={individualListing.id} />
  })
  
  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
