import "./GenreMovies.css";

import {
  NavLink,
  useLoaderData
} from "react-router-dom";

export const GenreMovies = () => {

  const data = useLoaderData();

  return (
    <div className="genreMoviesPage">

      {/* ================= POPULAR ================= */}

      <h1>🔥 Popular Movies</h1>

      <div className="movieSlider">

        {data?.popular?.results?.map((movie) => (

          <NavLink
            key={movie.id}
            to={`/MovieDetails/${movie.id}`}
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


      {/* ================= TOP RATED ================= */}

      <h1>⭐ Top Rated Movies</h1>

      <div className="movieSlider">

        {data?.topRated?.results?.map((movie) => (

          <NavLink
            key={movie.id}
            to={`/MovieDetails/${movie.id}`}
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


      {/* ================= LATEST ================= */}

      <h1>🆕 Latest Movies</h1>

      <div className="movieSlider">

        {data?.latest?.results?.map((movie) => (

          <NavLink
            key={movie.id}
            to={`/MovieDetails/${movie.id}`}
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