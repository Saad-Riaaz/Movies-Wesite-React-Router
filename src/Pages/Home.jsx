
import "./Home.css";

import {
  NavLink,
  useLoaderData
} from "react-router-dom";

import {
  useEffect,
  useState
} from "react";

export const Home = () => {

  const MovieData = useLoaderData();

  console.log("MovieData:", MovieData);
  console.log("Popular Movies:", MovieData?.popular?.results);

  const {
    popular,
    bollywood,
    hollywood,
    lollywood,
    trending,
    topRated,
    upcoming
  } = MovieData;

  // ================= HERO SLIDER =================

  const [currentMovie, setCurrentMovie] = useState(0);

  useEffect(() => {

    if (!popular?.results?.length) return;

    const timer = setInterval(() => {

      setCurrentMovie((prev) =>
        (prev + 1) % popular.results.length
      );

    }, 10000);

    return () => clearInterval(timer);

  }, [popular]);

  const heroMovie = popular?.results?.[currentMovie];

  return (

    <div className="homeMovies">

      {/* ================= HERO BANNER ================= */}

      <div className="heroBanner">

        <img
          src={`https://image.tmdb.org/t/p/original${heroMovie?.backdrop_path}`}
          alt={heroMovie?.title}
          className="heroImage"
        />

        <div className="heroOverlay">

          <div className="heroContent">

            <p className="heroTag">
              🔥 Popular Movie
            </p>

            <h1 className="heroTitle">
              {heroMovie?.title}
            </h1>

            <p className="heroRating">
              ⭐ {heroMovie?.vote_average?.toFixed(1)}
            </p>

            <p className="heroDescription">
              {heroMovie?.overview}
            </p>

            <div className="heroButtons">

              <NavLink
                to={`/MovieDetails/${heroMovie?.id}`}
                className="watchButton"
              >
                ▶ Watch Now
              </NavLink>

              <NavLink
                to={`/MovieDetails/${heroMovie?.id}`}
                className="detailsButton"
              >
                More Details
              </NavLink>

            </div>

          </div>

        </div>

      </div>


      {/* ================= POPULAR ================= */}

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

                <h2>
                  {movie.title}
                </h2>

                <p>
                  ⭐ {movie.vote_average?.toFixed(1)}
                </p>

              </div>

            </div>

          </NavLink>

        ))}

      </div>


      {/* ================= BOLLYWOOD ================= */}

      <h1>🇮🇳 Bollywood Movies</h1>

      <div className="movieSlider">

        {bollywood?.results?.map((movie) => (

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

                <h2>
                  {movie.title}
                </h2>

                <p>
                  ⭐ {movie.vote_average?.toFixed(1)}
                </p>

              </div>

            </div>

          </NavLink>

        ))}

      </div>


      {/* ================= HOLLYWOOD ================= */}

      <h1>🇺🇸 Hollywood Movies</h1>

      <div className="movieSlider">

        {hollywood?.results?.map((movie) => (

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

                <h2>
                  {movie.title}
                </h2>

                <p>
                  ⭐ {movie.vote_average?.toFixed(1)}
                </p>

              </div>

            </div>

          </NavLink>

        ))}

      </div>


      {/* ================= LOLLYWOOD ================= */}

      <h1>🇵🇰 Lollywood Movies</h1>

      <div className="movieSlider">

        {lollywood?.results?.map((movie) => (

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

                <h2>
                  {movie.title}
                </h2>

                <p>
                  ⭐ {movie.vote_average?.toFixed(1)}
                </p>

              </div>

            </div>

          </NavLink>

        ))}

      </div>


      {/* ================= TRENDING ================= */}

      <h1>🔥 Trending Movies</h1>

      <div className="movieSlider">

        {trending?.results?.map((movie) => (

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

                <h2>
                  {movie.title}
                </h2>

                <p>
                  ⭐ {movie.vote_average?.toFixed(1)}
                </p>

              </div>

            </div>

          </NavLink>

        ))}

      </div>


      {/* ================= UPCOMING ================= */}

      <h1>🎬 Upcoming Movies</h1>

      <div className="movieSlider">

        {upcoming?.results?.map((movie) => (

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

                <h2>
                  {movie.title}
                </h2>

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

                <h2>
                  {movie.title}
                </h2>

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

