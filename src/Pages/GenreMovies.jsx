import { useLoaderData, NavLink } from "react-router-dom";
import "./GenreMovies.css";


const GenreMovies = () => {
  const MovieData = useLoaderData();

  console.log("Genre Data:", MovieData);

  const { popular, topRated, latest } = MovieData;
  console.log("Popular:", popular?.results);
console.log("Top Rated:", topRated?.results);
console.log("Latest:", latest?.results);

  return (
    <div className="genreMoviesPage">

      <h1>🔥 Popular Movies</h1>

      <div className="movieSlider">
        {popular?.results?.map((movie) => (
          <NavLink
            to={`/MovieDetails/${movie.id}`}
            key={movie.id}
            className="movieLink"
          >
            <div className="homeMovieCard">

              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />

              <div className="movieOverlay">
                <h2>{movie.title}</h2>

                <p>
                  ⭐ {movie.vote_average?.toFixed(1)}
                </p>
              </div>

            </div>
          </NavLink>
        ))}
      </div>


      <h1>⭐ Top Rated Movies</h1>

      <div className="movieSlider">
        {topRated?.results?.map((movie) => (
          <NavLink
            to={`/MovieDetails/${movie.id}`}
            key={movie.id}
            className="movieLink"
          >
            <div className="homeMovieCard">

              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />

              <div className="movieOverlay">
                <h2>{movie.title}</h2>

                <p>
                  ⭐ {movie.vote_average?.toFixed(1)}
                </p>
              </div>

            </div>
          </NavLink>
        ))}
      </div>


      <h1>🆕 Latest Movies</h1>

      <div className="movieSlider">
        {latest?.results?.map((movie) => (
          <NavLink
            to={`/MovieDetails/${movie.id}`}
            key={movie.id}
            className="movieLink"
          >
            <div className="homeMovieCard">

              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />

              <div className="movieOverlay">
                <h2>{movie.title}</h2>

                <p>
                  ⭐ {movie.vote_average?.toFixed(1)}
                </p>
              </div>

            </div>
          </NavLink>
        ))}
      </div>

    </div>
  );
};


