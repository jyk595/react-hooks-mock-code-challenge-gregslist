import { useState } from "react";

function ListingCard({ individualListing, deleteListing }) {
  const {id, description, image, location} = individualListing;
  const [favoriteStatus, setFavoriteStatus] = useState(false);
  
  function renderFavorite() {
    setFavoriteStatus(favoriteStatus=>!favoriteStatus)
  };

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    deleteListing(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favoriteStatus ? (
          <button className="emoji-button favorite active" onClick={renderFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={renderFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
