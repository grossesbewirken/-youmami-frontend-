import "./OneRecipe.css"


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

const OneRecipeSmall = ({recipe, lastOne }) => {
    return (
      <>
        <div className="description">
          <h1 className="rezept">{recipe.name}</h1>
          <img src={recipe.img} alt={recipe.name} />
          <h3>{recipe.description}</h3>
          <p className="Beschreibung">{recipe.description}</p>
          <button className="collapsible">+</button>
        </div>
      </>
    );
  }
  
  export default OneRecipeSmall;