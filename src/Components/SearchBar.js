import React from "react";

function SearchBar( props ) {
  return (
    <div className="search">
      <input 
        type="text" 
        className="searchTerm"
        placeholder="Search rides..."
        onChange={event => props.setSearchText(event.target.value)} />
    </div>
  );
}

export default SearchBar;