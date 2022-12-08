import OneRecipeSmallSearch from "./OneRecipeSmallSearch.js";
import "./AllRecipes.css"

function AllSearchedRecipes({recipesData ,lastSearchedRecipe}) {

  const recipesFiltered = recipesData.filter(recipe => {
    return (
      recipe.name.toLowerCase().includes(lastSearchedRecipe.toLowerCase())
    )
  })
  // console.log(recipesData);
  // console.log(recipesFiltered);
  return (
    <div className="allRecipesField">
      <h1>Get inspired</h1>
      <h3>See all searched recipes</h3>
      {recipesFiltered.map((recipe, i) => 
      (<OneRecipeSmallSearch 
      recipe={recipe}
      key={i}
      />)
      )}
    </div>

  );
}

export default AllSearchedRecipes;
