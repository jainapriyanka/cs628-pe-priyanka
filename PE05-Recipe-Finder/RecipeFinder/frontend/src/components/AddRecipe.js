import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function AddRecipe() {
 const [form, setForm] = useState({
   recipe_name: "",
   ingredients: "",
   cooking_instructions: "",
 });
 const navigate = useNavigate();
 const backendUrl = process.env.REACT_APP_BACKEND_URL;
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new recipe to the database.
   const newRecipe = { ...form };
 
   await fetch(`${backendUrl}/recipe`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newRecipe),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ recipe_name: "", ingredients: "", cooking_instructions: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Add Recipe</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="recipe_name">Recipe Name</label>
         <input
           type="text"
           className="form-control"
           id="recipe_name"
           value={form.recipe_name}
           onChange={(e) => updateForm({ recipe_name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="ingredients">Ingredients</label>
         <input
           type="text"
           className="form-control"
           id="ingredients"
           value={form.ingredients}
           onChange={(e) => updateForm({ ingredients: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="cooking_instructions">Cooking Instructions</label>
         <input
           type="text"
           className="form-control"
           id="cooking_instructions"
           value={form.cooking_instructions}
           onChange={(e) => updateForm({ cooking_instructions: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Add Recipe"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}