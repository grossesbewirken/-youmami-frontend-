import React from "react";
import "./Landingpage.css";
import "./OneRecipeSmall.css"
import { Link } from "react-router-dom";


// I M P O R T   F O N T A W E S O M E
import { GrAddCircle } from 'react-icons/gr';
import { TbSend } from 'react-icons/tb'
import { HiMagnifyingGlass } from "react-icons/hi"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { GiFireworkRockete } from "react-icons/gi"



const Landingpage = ({recipesData}) => {
  const recipe = recipesData[[recipesData.length-1]]
  return (
    <div>
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
      <Link to={`/one-recipe-big/${recipe._id}`}>{ <GrAddCircle className="icon"/> }</Link>
        </div>
    </div>
    </div>
  );
};
export default Landingpage;
