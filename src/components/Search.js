// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// S T Y L I N G
import "./Search.css"


function Search({ placeholder, list, uniqueId, searchedRecipe, setSearchedRecipe, setLastSearchedRecipe }) {
  
return (
    <div className="searchField-small">
      <input
        placeholder="search recipe"
        // list="opts"
        value={searchedRecipe}
        onChange={(e) => setSearchedRecipe(e.target.value)}
      />
      <Link to="/all-searched-recipes">
        <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          setLastSearchedRecipe(searchedRecipe)
        }}
        >search</button>      
      </Link>
      {/* <datalist id="opts">
        {list.map((item, index) => (
          <option key={item.id || uniqueId || index} value={item}>
            {item}
          </option>
        ))}
      </datalist> */}
    </div>
);
}

export default Search;

// der use-state ist zu tief. derzeit durchsuchen wir NUR
// use-state MUSS mit in die APP.js