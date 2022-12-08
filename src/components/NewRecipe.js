// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


// I M P O R T - S T Y L I N G
import "./NewRecipe.css"


// I M P O R T   F O N T A W E S O M E
import { GrAddCircle } from 'react-icons/gr';
import { TbSend } from 'react-icons/tb'
import { HiMagnifyingGlass } from "react-icons/hi"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { GiFireworkRockete } from "react-icons/gi"


// I M P O R T:  F I L E S  &  F U N C T I O N S

const NewRecipes = ({isChanged, setIsChanged}) => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  
  const onChangeHandler = (e) => {
    setFormData((prev => prev = {...prev, [e.target.name]:e.target.value}))
  }

// console.log(formData);
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
    .then(() => {setIsChanged(!isChanged);
      navigate("/feedback")
    })
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h1>Create a recipe</h1>
      <h3>Share your taste!</h3>
      <div className="flex colum">
        <label className="name">name<span className="required">*</span></label>
        <input
          className="newInput"
          name="name"
          type="text"
          placeholder="your recipes name"
          onChange={onChangeHandler}
          />
      </div>

      <div className="flex colum m-top">
        <label className="img">image</label>
        <textarea
          className="newInput"
          name="img"
          type="text" 
          placeholder="insert your link here"
          onChange={onChangeHandler}
        />
      </div>

      <div className="flex colum m-top">
        <label className="description">description<span className="required">*</span></label>
        <textarea
          className="newInput"
          name="description"
          type="text"
          placeholder="Describe your recipe" 
          onChange={onChangeHandler}
        />
      </div>

      <div className="flex colum m-top">
        <label className="ingredients">ingredients<span className="required">*</span></label>
        <textarea
          className="newInput contentflex"
          name="ingredients"
          type="text"
          placeholder="What do we need?"
          onChange={onChangeHandler}
        />
      </div>

      <div className="flex colum m-top">
        <label className="preparation">preparation<span className="required">*</span></label>
        <textarea
          className="newInput"
          name="preparation"
          type="text" 
          placeholder="This is how we do it!"
          onChange={onChangeHandler}
          />
      </div>

      <div className="flex m-top right">
        {/* <Link to="/feedback"> */}
          <button type="submit"
          
          >{ <TbSend className="icon"/> }</button>
        {/* </Link> */}

        <div>
          <Link to="/all-recipes">{ <AiOutlineCloseCircle className="icon"/> }</Link>
        </div>
      </div>
    </form>
  )
}

export default NewRecipes;
