import "./Navigation.css";
import { Link } from "react-router-dom";
import Search from "./Search.js";


// I M P O R T   F O N T A W E S O M E
// import { GrAddCircle } from 'react-icons/gr';
// import { TbSend } from 'react-icons/tb'
// import { HiMagnifyingGlass } from "react-icons/hi"
// import { AiOutlineCloseCircle } from "react-icons/ai"
// import { GiFireworkRockete } from "react-icons/gi"


function Navbar({ 
  searchedRecipe, 
  setSearchedRecipe,
  setLastSearchedRecipe
}) {
  return (
    <>
    <div className="navbar">

      <div className="Logo middle">
        <Link to="/">
          {" "}
          <h1 className="youmami umami">youmami</h1>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/all-recipes">show all</Link>
          </li>
          <li>
            <Link to="/new-recipes">add new</Link>
          </li>
          <li >
            <Search
              searchedRecipe={searchedRecipe}
              setSearchedRecipe={setSearchedRecipe} 
              setLastSearchedRecipe={setLastSearchedRecipe}
              // list={["pasta", "pizza"]} 
              />
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
}

export default Navbar;
