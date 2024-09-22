import { useParams } from "react"


function Category({ recipes }) {

  const { recipeMealType } = useParams()
  const recipeToDisplay = recipes.find(eachRecipe => eachRecipe.mealType === recipeMealType)
//recipe o recipes??

// handles cases in which recipName is not found
  if (!recipeToDisplay) {
    return <div>Category - No recipe found with the category "{mealType}"</div>
  }

  // const filteredRecipes = (mealType) =>  { return recipes.filter(eachRecipe => eachRecipe.mealType === mealType)}


  return (
    <div className='mainContainer'>
      <div className="mainBar">
        <p>Home</p>
      </div>
      <div  id="eachCardOnList">
       {filteredRecipes.map((eachRecipe, index) => (
        <div key={index}>
          <RecipeCard eachRecipe={eachRecipe} handleDelete = {handleDelete} index={index}/>

         </div>
        ))}
    </div>
    </div>

  )
}

export default Category