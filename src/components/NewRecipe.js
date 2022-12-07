// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
import { useState, useEffect } from 'react';

// I M P O R T:  F I L E S  &  F U N C T I O N S

const NewRecipes = ({isChanged, setIsChanged}) => {
  const [formData, setFormData] = useState({});

  const onChangeHandler = (e) => {
    setFormData((prev => prev = {...prev, [e.target.name]:e.target.value}))
  }

  const handleSubmit = (e)=>  {
    e.preventDefault();
    fetch("http://localhost:9876/recipes", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      } 
    })
    .then((response) => response.json())
    .then(() => setIsChanged(!isChanged))
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div class="flex colum">
        <label for="name">name<span class="required">*</span></label>
        <input 
          name="name"
          type="text"
          placeholder="your recipes name"
          onChange={onChangeHandler}

          />
      </div>

      <div class="flex colum m-top">
        <label for="img">image</label>
        <input
          name="img"
          type="text" 
          placeholder="insert your link here"
          onChange={onChangeHandler}
        />
      </div>

      <div class="flex colum m-top">
        <label for="description">description<span class="required">*</span></label>
        <input 
          name="description"
          type="text"
          placeholder="Describe your recipe" 
          onChange={onChangeHandler}
        />
      </div>

      <div class="flex colum m-top">
        <label for="ingredients">ingredients<span class="required">*</span></label>
        <input 
          name="ingredients"
          type="text"
          placeholder="What do we need?"
          onChange={onChangeHandler}
        />
      </div>

      <div class="flex colum m-top">
        <label for="preparation">preparation<span class="required">*</span></label>
        <input 
          name="preparation"
          type="text" 
          placeholder="This is how we do it!"
          onChange={onChangeHandler}
          />
      </div>

      <div class="flex m-top right">
        <div>
          <img src="" alt="send" />
          <button type="submit">send</button>
        </div>
        <div>
          <img src="" alt="close" />
          <button>close</button>
        </div>
      </div>
    </form>
  )
}
  
export default NewRecipes;
