// [X] When the app starts, I can see all listings.
// [X] I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence.
// [X] I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend.
// [ ] I can search for listings by their name.

import { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingsData, setListingsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(()=>{
    fetch(`http://localhost:6001/listings`)
    .then(res=>res.json())
    .then(setListingsData);
  },[])

  function deleteListing(id){
    const updatedListings = listingsData.filter(listing => listing.id !== id)
    setListingsData(updatedListings)
  }

  return (
    <div className="app">
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <ListingsContainer 
        listingsData={listingsData} 
        deleteListing={deleteListing}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;
