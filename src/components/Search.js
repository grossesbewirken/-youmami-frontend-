import { useState } from "react";

// S T Y L I N G
import "./Search.css"


function Search({ placeholder, list, uniqueId }) {
const [inputValue, setInputValue] = useState("");
return (
    <div className="searchField-small">
      <input
        placeholder={placeholder || "select item"}
        list="opts"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <datalist id="opts">
        {list.map((item, index) => (
          <option key={item.id || uniqueId || index} value={item}>
            {item}
          </option>
        ))}
      </datalist>
    </div>
);
}

export default Search;

// der use-state ist zu tief. derzeit durchsuchen wir NUR
// use-state MUSS mit in die APP.js