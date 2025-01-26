import React, { useState } from "react";

const movies = [
  { title: "Inception", genre: "Science Fiction", releaseYear: 2010 },
  { title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994 },
  { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
];

function MovieList() {
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const genres = ["All Genres", ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  const handleClick = (title) => {
    alert(`You clicked on "${title}"`);
  };

  return (
    <div>
      <div>
        <label htmlFor="genre-select"> </label>
        <select
          id="genre-select"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div style={{ marginTop: "20px" }}>
        {filteredMovies.map((movie, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              marginBottom: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleClick(movie.title)}
          >
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Released: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;