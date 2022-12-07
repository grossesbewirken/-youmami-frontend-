import React from "react";
import "./Landingpage.css";

const Landingpage = ({recipesData}) => {
  const recipe = recipesData[1]
  return (
    <div className="landing-card">
      <h1>Welcome</h1>
      <h2>to rezep.de</h2>
      <div className="description">
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
