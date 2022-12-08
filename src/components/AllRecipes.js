import OneRecipeSmall from "./OneRecipeSmall.js";
import "./AllRecipes.css"

function AllRecipes({recipesData}) {
  return (
    <div className="allRecipesField sorts">
      <h1>Get inspired</h1>
      <h3>See all recipes</h3>
      {recipesData.map((recipe, i) => 
      (<OneRecipeSmall 
      recipe={recipe}
      key={i}
      />)
      )}
    </div>

  );
}

export default AllRecipes;
