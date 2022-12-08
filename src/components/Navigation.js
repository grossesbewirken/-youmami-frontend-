import "./Navigation.css";
import { Link } from "react-router-dom";
import Search from "./Search.js";

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
              placeholder="search"
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
