import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { useParams, useNavigate } from "react-router";

const Recipe = (props) => (
 <tr>
    <td>{props.recipe.recipe_name}</td>
   <td>{props.recipe.ingredients}</td>
   <td>{props.recipe.cooking_instructions}</td>
 </tr>
);
 
export default function RecipeDetails() {
 const params = useParams();
 const navigate = useNavigate();
const backendUrl = process.env.REACT_APP_BACKEND_URL; 
 const [recipe, setRecipe] = useState([]);
 
 // This method fetches the recipe from the database.
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`${backendUrl}/recipe/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const recipe = await response.json();
     if (!recipe) {
       window.alert(`Recipe with id ${id} not found`);
       navigate("/");
       return;
     }
     setRecipe(recipe);
 
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 
 // This method will map out the recipe details
 function recipeDetails() {
     return (
       <Recipe
         recipe={recipe}
       />
     );
 }
 
 // This following section will display the recipde details
 return (
   <div>
    <Navbar />
     <h3>Recipe Details</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Recipe Name</th>
           <th>Ingredients</th>
           <th>Cooking Instructions</th>
         </tr>
       </thead>
       <tbody>{recipeDetails()}</tbody>
     </table>
   </div>
 );
}