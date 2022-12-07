import OneRecipeSmall from "./OneRecipeSmall.js";

function AllRecipes({recipesData}) {
  return (
    <>
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
