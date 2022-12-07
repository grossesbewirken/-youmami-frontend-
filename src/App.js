import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
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
const OneRecipe = lazy(() => import("./components/OneRecipeBig.js"));
const Navigation = lazy(() => import("./nav/Navigation.js"));

function App() {
  /*   const [isChanged, setIsChanged] = useState(false);
  const [recipesData, setRecipesData] = useState([{}]); */

  // MUSS NOCH IN DIE NAVBAR
  /*   useEffect(() => {
    fetch("http://localhost:9876/recipes")
      .then((response) => response.json())
      .then((json) => setRecipesData(prev => prev = json));
  }, [isChanged]);

   */

  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/all-recipes" element={<AllRecipes />} />
          <Route
            path="/new-recipes"
            element={
              <NewRecipes
              /*       isChanged={isChanged}
      setIsChanged={setIsChanged} */
              />
            }
          />
          <Route path="/one-recipes" element={<OneRecipe />} />
          <Route path="/navigation" element={<Navigation />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
