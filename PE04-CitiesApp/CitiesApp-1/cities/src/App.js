// Required imports from React and react-router.
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [cities, setCities] = useState([
    { id: 1, name: "Chicago", country: "USA", population: "733,819" },
    { id: 2, name: "Seattle", country: "USA", population: "8,336,917" }
  ]);
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <Router>
      <div>
        <header className="header">Cities Application</header>
        <nav className="navbar">
          <Link to="/" className="nav-link">Cities List</Link>
          <Link to="/add-city" className="nav-link">Add City</Link>
        </nav>

        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <CitiesList cities={cities} setSelectedCity={setSelectedCity} selectedCity={selectedCity} />
              }
            />
            <Route path="/add-city" element={<AddCity setCities={setCities} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function CitiesList({ cities, setSelectedCity, selectedCity }) {
  return (
    <div className="cities-container">
      <h2 className="section-title">Cities List</h2>
      <ul className="city-list">
        {cities.map(city => (
          <li key={city.id}>
            <button className="city-button" onClick={() => setSelectedCity(city)}>
              {city.name}
            </button>
          </li>
        ))}
      </ul>
      {selectedCity && <CityDetails city={selectedCity} />}
    </div>
  );
}

function CityDetails({ city }) {
  return (
    <div className="city-details">
      <h3 className="details-title">{city.name} Details</h3>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {city.population}</p>
    </div>
  );
}

function AddCity({ setCities }) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !country || !population) return;

    const newCity = {
      id: Date.now(),
      name,
      country,
      population
    };

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
        <button className="button" type="submit">Add City</button>
      </form>
    </div>
  );
}

export default App;
