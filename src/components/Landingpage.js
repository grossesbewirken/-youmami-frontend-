import React from "react";
import "./Landingpage.css";

const Landingpage = ({recipesData}) => {
  const recipe = recipesData[[recipesData.length-1]]
  return (
    <div className="landing-card">
      <div className="center">
        <h1>Are you hungry</h1>
        <h3>get inspired</h3>
      </div>


      recipe && <div className="description">
          <h1 className="rezept">{recipe.name}</h1>
          <img src={recipe.img} alt={recipe.name} />
          <h3>{recipe.description}</h3>
          <p className="Beschreibung">{recipe.description}</p>
          <button className="collapsible">+</button>
        </div>
    </div>
  );
};
export default Landingpage;
