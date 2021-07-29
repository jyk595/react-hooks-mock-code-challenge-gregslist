import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listingsData, deleteListing,searchTerm }) {
  const filteredSearchListings = listingsData.filter((individualListing)=>{
    if (searchTerm===""){
      return true;
    } else if (individualListing.description.toLowerCase().includes(searchTerm.toLowerCase()) === searchTerm.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  })

  console.log(filteredSearchListings);
  
  const renderListings = filteredSearchListings.map((individualListing)=>{
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
