import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listingsData, deleteListing }) {
  const renderListings = listingsData.map((individualListing)=>{
    return <ListingCard individualListing={individualListing} deleteListing={deleteListing} key={individualListing.id} />
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
