import OneRecipeSmall from "./OneRecipeSmall.js";

function AllRecipes({recipesData}) {
  return (
    <>
      <h1>Get inspired</h1>
      <h3>See all recipes</h3>
      {recipesData && recipesData.map((recipe, i) => 
      (<OneRecipeSmall 
      recipe={recipe}
      key={i}
      />)
      )}
    </>

  );
}

export default AllRecipes;
