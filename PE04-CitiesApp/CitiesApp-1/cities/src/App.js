// Required imports from React and react-router.
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Main App component
function App() {
  // State to manage list of cities
  const [cities, setCities] = useState([
    { id: 1, name: "Chicago", country: "USA", population: "733,819" },
    { id: 2, name: "Seattle", country: "USA", population: "8,336,917" }
  ]);

  // State to manage currently selected city
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    // Router component to handle navigation
    <Router>
      <div>
        {/* Header */}
        <header className="header">Cities Application</header>
        {/* Navigation bar with links */}
        <nav className="navbar">
          <Link to="/" className="nav-link">Cities List</Link>
          <Link to="/add-city" className="nav-link">Add City</Link>
        </nav>

        <div className="main-content">
          <Routes>
            {/* Route for the Cities List */}
            <Route
              path="/"
              element={
                <CitiesList cities={cities} setSelectedCity={setSelectedCity} selectedCity={selectedCity} />
              }
            />
            {/* Route for adding a new city */}  
            <Route path="/add-city" element={<AddCity setCities={setCities} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// function to display the list of cities
function CitiesList({ cities, setSelectedCity, selectedCity }) {
  return (
    <div className="cities-container">
      <h2 className="section-title">Cities List</h2>
      <ul className="city-list">
        {cities.map(city => (
          <li key={city.id}>
            {/* Button to select city and display its details */}
            <button className="city-button" onClick={() => setSelectedCity(city)}>
              {city.name}
            </button>
          </li>
        ))}
      </ul>
      {/* Displaying details of the selected city */}
      {selectedCity && <CityDetails city={selectedCity} />}
    </div>
  );
}

// function to display details of a selected city
function CityDetails({ city }) {
  return (
    <div className="city-details">
      <h3 className="details-title">{city.name} Details</h3>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {city.population}</p>
    </div>
  );
}

// function to add a new city
function AddCity({ setCities }) {
  // State to manage inputs
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // confirms all fields are filled
    if (!name || !country || !population) return;

    // Create a new city
    const newCity = {
      id: Date.now(),
      name,
      country,
      population
    };

    // Update the cities state with the new city
    setCities(prevCities => [...prevCities, newCity]);
    setName("");
    setCountry("");
    setPopulation("");
  };

  return (
    <div className="add-city-container">
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Country:</label>
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Population:</label>
          <input type="text" value={population} onChange={(e) => setPopulation(e.target.value)} />
        </div>
        {/* Button to add city */}
        <button className="button" type="submit">Add City</button>
      </form>
    </div>
  );
}

export default App;
