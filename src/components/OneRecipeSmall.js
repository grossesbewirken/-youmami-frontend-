import { Link } from "react-router-dom";

// I M P O R T - S T Y L I N G
import "./OneRecipeSmall.css"


// I M P O R T   F O N T A W E S O M E
import { GrAddCircle } from 'react-icons/gr';
import { TbSend } from 'react-icons/tb'
import { HiMagnifyingGlass } from "react-icons/hi"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { GiFireworkRocket } from "react-icons/gi"




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
      return (
      <>
        <div className="description">
          <h2 className="rezept">{recipe.name}</h2>
          <img src={recipe.img} alt={recipe.name} />
          <p className="Beschreibung">{recipe.description}</p>
          
          <div className="flex m-top right">
            <Link to={`/one-recipe-big/${recipe._id}`}>{ <GrAddCircle className="icon"/> }</Link>
          </div>
        </div>
      </>
    );
  }
  
  export default OneRecipeSmall;