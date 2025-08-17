import { useState, useEffect } from 'react'
import RecipeData from "../data.json"
import { Link, Links } from 'react-router-dom';

function Homepage () {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        setRecipe (RecipeData);
   }, []);

   return(
    <div className ="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 " > 
    {recipe.map(item =>(
           <Link to = {"/recipe/" + item.id}  key = {item.id}> 
           <div className='flex flex-col   hover:shadow-xl hover:scale-110 rounded
            transition-shadow duration-600 hover:shadow-black-500/50 '>
                <div className='h-48 overflow-hidden'><img className='w-36 h-36 sm: w-40 sm: h-40 md: w-44 md: h-44 lg: w-48 lg: h-48 
                object-cover' src={item.image} alt="Recipe-Image" /> </div>
                <div >
                <h1 className="text-red-500  text-lg text-xl font-bold">{item.title}</h1>
                <p className="text-sm text-base text-lg text-xl  ">{item.summary}</p>
                </div>
            </div>
                </Link>
           
        )) }
    
    </div>
   
)

}



export default Homepage