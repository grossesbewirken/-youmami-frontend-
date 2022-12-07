import OneRecipeSmall from "./OneRecipeSmall.js";

function AllRecipes({recipesData}) {
  return (
    <>
      {recipesData.map((recipe, i) => 
      (<OneRecipeSmall 
      recipe={recipe}
      key={i}
      />)
      )}
    </>

  );
}

export default AllRecipes;
