import React from "react";

function Search({searchTerm,setSearchTerm}) {
  function handleSubmit(e) {
    e.preventDefault();
    
    setSearchTerm(e.target[0].value);
  }

  function searchOnChange(event) {
    setSearchTerm(event.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={searchOnChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
