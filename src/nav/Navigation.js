import "./Navigation.css";
import { Link } from "react-router-dom";
import Search from "./Search.js";

function Navbar() {
  return (
    <>
      <div className="Logo">
        <Link to="/">
          {" "}
          <img src="" alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/all-recipes"> All Recipes </Link>
          </li>
          <li>
            <Link to="/new-recipes"> New Recipes</Link>
          </li>
          <li>
            <Search placeholder="search" list={["pasta", "pizza"]} />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
