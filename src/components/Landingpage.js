import React from "react";
import "./Landingpage.css";
import "./OneRecipeSmall.css"
import { Link } from "react-router-dom";


const Landingpage = ({recipesData}) => {
  const recipe = recipesData[[recipesData.length-1]]
  return (
    <div className="landing-card">
      <div className="center">
        <h1>Are you hungry?</h1>
        <h3>get inspired</h3>
      </div>

      <div className="description">
          <h2 className="rezept">{recipe.name}</h2>
          <img src={recipe.img} alt={recipe.name} />
          <p className="Beschreibung">{recipe.description}</p>
      </div>

      <div className="flex m-top right">
      <Link to="/one-recipe-big"><button>+</button></Link>
        </div>
    </div>
  );
};
export default Landingpage;
