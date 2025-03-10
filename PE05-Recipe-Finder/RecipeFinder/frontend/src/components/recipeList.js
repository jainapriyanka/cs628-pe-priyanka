import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
 
const Recipe = (props) => (
 <tr>
    <Link to={`/recipe/${props.recipe._id}`} className="btn btn-link">
    <td>{props.recipe.recipe_name}</td>
    </Link>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.recipe._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecipe(props.recipe._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecipeList() {
const backendUrl = process.env.REACT_APP_BACKEND_URL; 
 const [recipes, setRecipes] = useState([]);
 
 // This method fetches the recipes from the database.
 useEffect(() => {
   async function getRecipes() {
     const response = await fetch(`${backendUrl}/recipe/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
     console.log("hi")
     const recipes = await response.json();
     console.log(recipes)
     setRecipes(recipes);
   }
 
   getRecipes();
 
   return;
 }, [recipes.length]);
 
 // This method will delete a recipe
 async function deleteRecipe(id) {
   await fetch(`${backendUrl}/recipe/${id}`, {
     method: "DELETE"
   });
 
   const newRecipes = recipes.filter((el) => el._id !== id);
   setRecipes(newRecipes);
 }
 
 // This method will map out the recipes on the table
 function recipeList() {
   return recipes.map((recipe) => {
     return (
       <Recipe
         recipe={recipe}
         deleteRecipe={() => deleteRecipe(recipe._id)}
         key={recipe._id}
       />
     );
   });
 }
 
 // This following section will display the table with the recipes
 return (
   <div>
    <Navbar />
     <h3>Recipe List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Recipe Name</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recipeList()}</tbody>
     </table>
   </div>
 );
}