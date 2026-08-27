import { useState } from "react";
import { NavLink } from "react-router-dom";
import { searchMovies } from "../MovieComponents/API";

export const Search = () => {

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {

    const value = e.target.value;

    setQuery(value);

    if (value.trim() === "") {
      setMovies([]);
      return;
    }

    const data = await searchMovies(value);

    setMovies(data?.results || []);
  };

  return (
    <div className="searchContainer">

      <input
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={handleSearch}
      />

      {movies.length > 0 && (

        <div className="searchResults">

          {movies.map((movie) => (

            <NavLink
              key={movie.id}
              to={`/MovieDetails/${movie.id}`}
              className="searchMovie"
            >

              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <div className="noPoster">
                  No Image
                </div>
              )}

              <div className="searchMovieInfo">

                <h3>{movie.title}</h3>

                <p>
                  ⭐ {movie.vote_average?.toFixed(1)}
                </p>

                <p>
                  {movie.release_date || "Release date unknown"}
                </p>

              </div>

            </NavLink>

          ))}

        </div>

      )}

      {query && movies.length === 0 && (

        <p className="noResults">
          No movies found
        </p>

      )}

    </div>
  );
};