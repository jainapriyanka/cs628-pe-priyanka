import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from "react-router-dom";

function App() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "Chicken Biryani",
      ingredients: "Chicken, Basmati rice, Yogurt, Spices, Onion, Garlic, Ginger",
      cooking_instructions: "Marinate chicken, cook rice, layer and steam with spices."
    },
    {
      id: 2,
      name: "Pasta Alfredo",
      ingredients: "Pasta, Cream, Parmesan, Butter, Garlic",
      cooking_instructions: "Boil pasta, prepare sauce with cream and cheese."
    }
  ]);

  const updateRecipe = (id, updatedRecipe) => {
    setRecipes(prevRecipes => prevRecipes.map(recipe => recipe.id === id ? updatedRecipe : recipe));
  };

  const deleteRecipe = (id) => {
    setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
  };

  return (
    <Router>
      <div>
        <header className="header">Recipe Finder</header>
        <nav className="navbar">
          <Link to="/" className="nav-link">Recipe List</Link>
          <Link to="/add-recipe" className="nav-link">Add Recipe</Link>
        </nav>

        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <RecipesList 
                  recipes={recipes} 
                  deleteRecipe={deleteRecipe} 
                />
              }
            />
            <Route path="/add-recipe" element={<AddRecipe setRecipes={setRecipes} />} />
            <Route path="/recipe/:id" element={<RecipeDetailsPage recipes={recipes} />} />
            <Route path="/edit-recipe/:id" element={<EditRecipe recipes={recipes} updateRecipe={updateRecipe} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function RecipesList({ recipes, deleteRecipe }) {
  return (
    <div className="recipes-container">
      <h2 className="section-title">Recipes List</h2>
      <ul className="recipe-list">
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`} className="recipe-button">
              {recipe.name}
            </Link>
            <button className="delete-button" onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RecipeDetailsPage({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div className="recipe-details">
      <h3 className="details-title">{recipe.name} Details</h3>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Cooking Instructions:</strong> {recipe.cooking_instructions}</p>
      <Link to={`/edit-recipe/${recipe.id}`} className="edit-link">Edit Recipe</Link>
    </div>
  );
}

function EditRecipe({ recipes, updateRecipe }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));

  const [name, setName] = useState(recipe.name);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [cooking_instructions, setInstructions] = useState(recipe.cooking_instructions);

  const handleUpdate = () => {
    const updatedRecipe = { id: recipe.id, name, ingredients, cooking_instructions };
    updateRecipe(recipe.id, updatedRecipe);  // Update recipe in the state
    navigate(`/recipe/${recipe.id}`);  // Redirect to recipe details after update
  };

  return (
    <div className="edit-recipe-container">
      <h3>Edit {recipe.name}</h3>
      <div className="input-group">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Ingredients:</label>
        <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Cooking Instructions:</label>
        <input type="text" value={cooking_instructions} onChange={(e) => setInstructions(e.target.value)} />
      </div>
      <button className="button" onClick={handleUpdate}>Update Recipe</button>
    </div>
  );
}

function AddRecipe({ setRecipes }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [cooking_instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !ingredients || !cooking_instructions) return;

    const newRecipe = {
      id: Date.now(),
      name,
      ingredients,
      cooking_instructions
    };

    setRecipes(prevRecipes => [...prevRecipes, newRecipe]);
  };

  return (
    <div className="add-recipe-container">
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Ingredients:</label>
          <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Cooking Instructions:</label>
          <input type="text" value={cooking_instructions} onChange={(e) => setInstructions(e.target.value)} />
        </div>
        <button className="button" type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default App;
