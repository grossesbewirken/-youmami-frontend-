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


//

const OneRecipeSmall = () => {
    return (
      <>

        <div className="description">
          <h1 class="rezept">rezeptname</h1>
          <img src="" alt="tomatensuppe" />
          <h3>description</h3>
          <p class="Beschreibung">content description</p>
          <button class="collapsible">+</button>
        </div>

      </>
    );
  }
  
  export default OneRecipeSmall;