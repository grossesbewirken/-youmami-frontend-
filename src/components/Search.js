// import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

// S T Y L I N G
import "./Search.css"


// I M P O R T   F O N T A W E S O M E
import { GrAddCircle } from 'react-icons/gr';
import { TbSend } from 'react-icons/tb'
import { HiMagnifyingGlass } from "react-icons/hi"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { GiFireworkRockete } from "react-icons/gi"


function Search({ placeholder, list, uniqueId, searchedRecipe, setSearchedRecipe, setLastSearchedRecipe }) {

  
return (
    <div >
      <input
        className="searchField-small newInput"
        value={searchedRecipe}
        onChange={(e) => setSearchedRecipe(e.target.value)}
      />
      <Link to="/all-searched-recipes">
        <button
        className="button"
        onClick={(e) => {
          setLastSearchedRecipe(searchedRecipe)
        }}
        > search</button>      
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