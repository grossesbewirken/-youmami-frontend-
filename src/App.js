import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import OneRecipeSmallSearch from "./components/OneRecipeSmallSearch.js";


/* import Landingpage from "./components/Landingpage.js";
import AllRecipes from "./components/AllRecipes.js";
import NewRecipes from "./components/NewRecipe.js";
import OneRecipes from "./components/OneRecipe.js";
import Navigation from "./nav/Navigation.js";
 */

const Landingpage = lazy(() => import("./components/Landingpage.js"));
const NewRecipes = lazy(() => import("./components/NewRecipe.js"));
const AllRecipes = lazy(() => import("./components/AllRecipes.js"));
const AllSearchedRecipes = lazy(() => import("./components/AllSearchedRecipes.js"));
const OneRecipeBig = lazy(() => import("./components/OneRecipeBig.js"));
const OneRecipeSmall  = lazy(() => import("./components/OneRecipeSmall.js"))
const Navigation = lazy(() => import("./components/Navigation.js"));
const Feedback = lazy(() => import("./components/Feedback.js"))


function App() {
  const [isChanged, setIsChanged] = useState(false);
  const [recipesData, setRecipesData] = useState([]);
  const [searchedRecipe, setSearchedRecipe] = useState(''); 
  const [lastSearchedRecipe, setLastSearchedRecipe] = useState('');
  
  // useEffect for all recipes if something is new added
  useEffect(() => {
    fetch("http://localhost:9876/recipes")
      .then((response) => response.json())
      .then((json) => setRecipesData(json))
  }, [isChanged]);

  
  return (
  <BrowserRouter>
  <div className="bg">
    <div className="phone">
      <Suspense fallback={<p>Loading...</p>}>
      {recipesData.length > 0 && 
      (  
      <>
      <Navigation 
          recipesData={recipesData}
          searchedRecipe={searchedRecipe}
          setSearchedRecipe={setSearchedRecipe}
          lastSearchedRecipe={lastSearchedRecipe}
          setLastSearchedRecipe={setLastSearchedRecipe}
      />
        <Routes>
        
        
        <Route path="*" element={<Navigate to="/"/>}/>
          <Route path="/" element={<Landingpage 
          recipesData={recipesData}
          />}/>
          <Route path="/all-recipes" element={<AllRecipes 
          recipesData={recipesData}
          />} />
          <Route path="/all-searched-recipes" element={<AllSearchedRecipes 
          recipesData={recipesData}
          lastSearchedRecipe={lastSearchedRecipe}
          />} />
          <Route path="/new-recipes" element={<NewRecipes 
          isChanged={isChanged}
          setIsChanged={setIsChanged}
          />} />
          <Route path="/one-recipe-big/:_id" element={<OneRecipeBig 
          recipesData={recipesData}
          />} />
          <Route path="/one-recipe-small" element={<OneRecipeSmall />} />
          <Route path="/one-recipe-small-search" element={<OneRecipeSmallSearch />} />
          <Route path="/feedback" element={<Feedback />} />
          
          {/* <Route path="/navigation" element={<Navigation 
          isChanged={isChanged}
          setRecipesData={setRecipesData}
          // />} /> */}
        </Routes>
        </>
        )}
      </Suspense>
    </div>
  </div>
  </BrowserRouter>
  );
}

export default App;
