import "./OneRecipe.css"
import { Link } from "react-router-dom";


// I M P O R T   F O N T A W E S O M E
import { GrAddCircle } from 'react-icons/gr';
import { TbSend } from 'react-icons/tb'
import { HiMagnifyingGlass } from "react-icons/hi"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { GiFireworkRockete } from "react-icons/gi"



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

const OneRecipeBig = () => {
    return (
      <>

        <div className="description">
          <h1 className="rezept">rezeptname</h1>
          <img src="" alt="tomatensuppe" />
          <h3>description</h3>
          <p className="Beschreibung">content description</p>
        </div>


        <div className="flex">
          <h3>ingredients</h3>
          <div className="collapsible">{ <GrAddCircle/> }</div>
        </div>
        <div className="content">
          <p className="text">content ingredients</p>
        </div>


        <div className="flex">
          <h3>preparation</h3>
          <div className="collapsible">{ <GrAddCircle/> }</div>
        </div>
        <div className="content">
          <p className="text">content preparation</p>
        </div>


        <div className="options">
          <Link to="/one-recipe-big"><button>open</button></Link>
          <Link to="/all-recipes"><button>close</button></Link>
        </div>


      </>
    );
  }
  
  export default OneRecipeBig;