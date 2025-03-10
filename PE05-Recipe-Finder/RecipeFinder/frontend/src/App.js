import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import RecipeList from "./components/recipeList";
import Edit from "./components/edit";
import AddRecipe from "./components/AddRecipe";
import RecipeDetails from "./components/RecipeDetails";
// import ChatInterface from "./components/chat";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route exact path="/" element={<Login />} /> */}
          <Route exact path="/" element={<RecipeList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;