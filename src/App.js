import { Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landingpage from "./components/Landingpage.js";
import AllRecipes from "./components/AllRecipes.js";
import NewRecipes from "./components/NewRecipe.js";
import OneRecipes from "./components/OneRecipe.js";
import Navigation from "./nav/Navigation.js";

function App() {
  const [isChanged, setIsChanged] = useState(false);
  const [recipesData, setRecipesData] = useState([{}]);

  // MUSS NOCH IN DIE NAVBAR
  useEffect(() => {
    fetch("http://localhost:9876/recipes")
      .then((response) => response.json())
      .then((json) => setRecipesData(prev => prev = json));
  }, [isChanged]);

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/" element={<AllRecipes />} />
        <Route path="/" element={<NewRecipes 
        isChanged={isChanged}
        setIsChanged={setIsChanged}
        />} />
        <Route path="/" element={<OneRecipes />} />
        <Route path="/" element={<OneRecipes />} />
        <Route path="/" element={<Navigation />} />
      </Routes>
    </Router>
  );
}

export default App;
