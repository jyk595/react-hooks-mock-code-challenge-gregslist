// [X] When the app starts, I can see all listings.
// [ ] I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence.
// [ ] I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend.
// [ ] I can search for listings by their name.

import { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingsData, setListingsData] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:6001/listings`)
    .then(res=>res.json())
    .then(setListingsData);
  },[])

  return (
    <div className="app">
      <Header />
      <ListingsContainer listingsData={listingsData} />
    </div>
  );
}

export default App;
