import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeData from "../data.json";
function RecipeDetail() {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState([]);

  useEffect(() => {
    setRecipeDetails(RecipeData);
  }, []);

  const recipeDetailItems = recipeDetails.find(
    (item) => item.id === Number(id)
  );
  if (!recipeDetailItems) {
    return <div>Loading...</div>; // or null if you don’t want to show anything
  }
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col item-center">
        <h1 className="text-red-500  text-lg text-2xl font-bold">{recipeDetailItems.title}</h1>
        <p>{recipeDetailItems.prepTime}</p>
        <p>{recipeDetailItems.cookTime}</p>
        <p>{recipeDetailItems.servings}</p>
        <p>{recipeDetailItems.difficulty}</p>
        <p>{recipeDetailItems.ingredients}</p>
        <p>{recipeDetailItems.steps}</p>
      </div>
      <div>
        {" "}
        <img
          src={recipeDetailItems.image}
          alt="DetailsImage"
          className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] object-cover"
        />
         <p className="text-justify text-red-500  text-lg font-medium">{recipeDetailItems.summary}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
