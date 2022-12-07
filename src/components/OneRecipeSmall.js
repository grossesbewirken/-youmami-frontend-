import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

// I M P O R T - S T Y L I N G
import "./OneRecipeSmall.css"


// C O L L A P S E - U M S T Y L E R ???



var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const OneRecipeSmall = ({recipe}) => {
  console.log(recipe);
    return (
      <>
        <div className="description">
          <h2 className="rezept">{recipe.name}</h2>
          <img src={recipe.img} alt={recipe.name} />
          <p className="Beschreibung">{recipe.description}</p>
          <button>
            <Link to="/one-recipe-big">+</Link>
          </button>
        </div>
      </>
    );
  }
  
  export default OneRecipeSmall;