import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useState, useEffect } from "react";
import "./App.css";
/* import Landingpage from "./components/Landingpage.js";
import AllRecipes from "./components/AllRecipes.js";
import NewRecipes from "./components/NewRecipe.js";
import OneRecipes from "./components/OneRecipe.js";
import Navigation from "./nav/Navigation.js";
 */
const Landingpage = lazy(() => import("./components/Landingpage.js"));
const NewRecipes = lazy(() => import("./components/NewRecipe.js"));
const AllRecipes = lazy(() => import("./components/AllRecipes.js"));
const OneRecipeBig = lazy(() => import("./components/OneRecipeBig.js"));
const OneRecipeSmall  = lazy(() => import("./components/OneRecipeSmall.js"))
const Navigation = lazy(() => import("./components/Navigation.js"));

function App() {
     const [isChanged, setIsChanged] = useState(false);
  const [recipesData, setRecipesData] = useState([{}]); 

  useEffect(() => {
    fetch("http://localhost:9876/recipes")
      .then((response) => response.json())
      .then((json) => setRecipesData(prev => prev = json));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9876/recipes")
      .then((response) => response.json())
      .then((json) => setRecipesData(prev => prev = json));
  }, [isChanged]);
  
  

  return (
  <BrowserRouter>

  <div className="bg">
    <div className="phone">
      <Suspense fallback={<p>Loading...</p>}>
      <Navigation 
          recipesData={recipesData}
      />
        <Routes>
        <Route path="*" element={<Navigate to="/"/>}/>
          <Route path="/" element={<Landingpage 
          recipesData={recipesData}
          />}/>
          <Route path="/all-recipes" element={<AllRecipes 
          recipesData={recipesData}
          />} />
          <Route path="/new-recipes" element={<NewRecipes 
          isChanged={isChanged}
          setIsChanged={setIsChanged}
          />} />
          <Route path="/one-recipes" element={<OneRecipeBig />} />
          <Route path="/one-recipes" element={<OneRecipeSmall />} />
          {/* <Route path="/navigation" element={<Navigation 
          isChanged={isChanged}
          setRecipesData={setRecipesData}
          // />} /> */}
        </Routes>
      </Suspense>
    </div>
  </div>
  </BrowserRouter>
  );
}

export default App;
