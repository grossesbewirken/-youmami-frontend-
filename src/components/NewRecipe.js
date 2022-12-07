
const NewRecipes = () => {
  return (
    <form>
      <div class="flex colum">
        <label for="name">name<span class="required">*</span></label>
        <input 
          type="text"
          placeholder="your recipes name"
          />
      </div>

      <div class="flex colum m-top">
        <label for="img">image</label>
        <input
          type="text" 
          placeholder="insert your link here"
        />
      </div>

      <div class="flex colum m-top">
        <label for="description">description<span class="required">*</span></label>
        <input 
          type="text"
          placeholder="Describe your recipe" 
        />
      </div>

      <div class="flex colum m-top">
        <label for="ingredients">ingredients<span class="required">*</span></label>
        <input 
          type="text"
          placeholder="What do we need?"
        />
      </div>

      <div class="flex colum m-top">
        <label for="preparation">preparation<span class="required">*</span></label>
        <input type="text" />
      </div>

      <div class="flex m-top right">
        <div>
          <img src="" alt="send" />
          <button>send</button>
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
