import { useState } from "react";

function Search({ placeholder, list, uniqueId }) {
const [inputValue, setInputValue] = useState("");
return (
  <>
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
  </>
);
}

export default Search;

// der use-state ist zu tief. derzeit durchsuchen wir NUR 