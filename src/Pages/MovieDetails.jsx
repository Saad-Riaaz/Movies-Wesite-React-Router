import { useLoaderData, NavLink } from "react-router-dom";
import { useState } from "react";
import "./MovieDetails.css";

export const MovieDetails = () => {
  const [showTrailer, setShowTrailer] = useState(false);

  const MovieData = useLoaderData();

  const {
    title,
    release_date,
    poster_path,
    overview,
    vote_average,
    vote_count,
    popularity,
    original_language,
    videos,
    runtime,
    genres,
    spoken_languages,
    production_companies,
    budget,
    revenue,
    credits,
    similar,
  } = MovieData;

  // ================= TRAILER =================

  const trailer =
    videos?.results?.find(
      (video) =>
        video.site === "YouTube" &&
        video.type === "Trailer"
    ) ||
    videos?.results?.find(
      (video) =>
        video.site === "YouTube" &&
        video.type === "Teaser"
    );

  // ================= DIRECTOR =================

  const director = credits?.crew?.find(
    (person) => person.job === "Director"
  );

  // ================= CAST =================

  const cast = credits?.cast?.slice(0, 12);

  return (
    <div className="movieDetails">

      {/* ================= BASIC MOVIE DETAILS ================= */}

      <div className="moviePoster">

        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />

      </div>


      <div className="movieInfo">

        <h1>{title}</h1>


        {/* ================= RATING ================= */}

        <div className="movieRating">

          ⭐ {vote_average?.toFixed(1)}

          <span>
            ({vote_count} votes)
          </span>

        </div>


        {/* ================= BASIC META ================= */}

        <div className="movieMeta">

          <p>
            <strong>Release Date:</strong>{" "}
            {release_date || "N/A"}
          </p>

          <p>
            <strong>Language:</strong>{" "}
            {original_language?.toUpperCase() || "N/A"}
          </p>

          <p>
            <strong>Popularity:</strong>{" "}
            {popularity?.toFixed(0) || "N/A"}
          </p>

        </div>


        {/* ================= GENRES ================= */}

        <div className="movieGenres">

          <strong>Genres:</strong>

          <div className="genreTags">

            {genres?.map((genre) => (
              <span key={genre.id}>
                {genre.name}
              </span>
            ))}

          </div>

        </div>


        {/* ================= OVERVIEW ================= */}

        <div className="overview">

          <h2>Overview</h2>

          <p>
            {overview || "No overview available."}
          </p>

        </div>


        {/* ================= WATCH TRAILER ================= */}

        <div className="overview">

          <button
            className="DetailWatchBtn"
            onClick={() => setShowTrailer(true)}
            disabled={!trailer}
          >
            ▶ Watch Trailer
          </button>

        </div>

      </div>


      {/* ================= TRAILER POPUP ================= */}

      {showTrailer && trailer && (

        <div className="trailerOverlay">

          <div className="trailerBox">

            <button
              className="closeTrailer"
              onClick={() => setShowTrailer(false)}
            >
              ✕
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={`${title} Trailer`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />

          </div>

        </div>

      )}


      {/* ================================================= */}
      {/*              EXTRA MOVIE INFORMATION              */}
      {/* ================================================= */}

      <section className="extraMovieDetails">

        <h2>🎬 Movie Information</h2>


        <div className="detailsGrid">

          {/* ================= DIRECTOR ================= */}

          <div className="detailCard">

            <h3>👤 Director</h3>

            <p>
              {director?.name || "N/A"}
            </p>

          </div>


          {/* ================= RUNTIME ================= */}

          <div className="detailCard">

            <h3>⏱️ Runtime</h3>

            <p>
              {runtime
  ? `${Math.floor(runtime / 60)}h ${runtime % 60}min`
  : "N/A"}
            </p>

          </div>


          {/* ================= VOTE COUNT ================= */}

          <div className="detailCard">

            <h3>⭐ Vote Count</h3>

            <p>
              {vote_count?.toLocaleString() || "N/A"}
            </p>

          </div>


          {/* ================= LANGUAGES ================= */}

          <div className="detailCard">

            <h3>🌍 Languages</h3>

            <p>

              {spoken_languages?.length
                ? spoken_languages
                    .map(
                      (language) =>
                        language.english_name
                    )
                    .join(", ")
                : "N/A"}

            </p>

          </div>


          {/* ================= BUDGET ================= */}

          <div className="detailCard">

            <h3>💰 Budget</h3>

            <p>

              {budget
                ? `$${budget.toLocaleString()}`
                : "N/A"}

            </p>

          </div>


          {/* ================= REVENUE ================= */}

          <div className="detailCard">

            <h3>💵 Revenue</h3>

            <p>

              {revenue
                ? `$${revenue.toLocaleString()}`
                : "N/A"}

            </p>

          </div>

        </div>


        {/* ================= PRODUCTION COMPANIES ================= */}

        <div className="productionSection">

          <h2>🎬 Production Companies</h2>

          <div className="productionCompanies">

            {production_companies?.map(
              (company) => (

                <div
                  className="companyCard"
                  key={company.id}
                >

                  {company.logo_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                      alt={company.name}
                    />
                  ) : (
                    <div className="companyNoLogo">
                      🎬
                    </div>
                  )}

                  <p>
                    {company.name}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/*                     FULL CAST                     */}
      {/* ================================================= */}

      <section className="castSection">

        <h2>🎭 Full Cast</h2>

        <div className="castGrid">

          {cast?.map((person) => (

            <div
              className="castCard"
              key={person.id}
            >

              {person.profile_path ? (

                <img
                  src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
                  alt={person.name}
                />

              ) : (

                <div className="noCastImage">
                  👤
                </div>

              )}

              <h3>
                {person.name}
              </h3>

              <p>
                {person.character || "Unknown"}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ================================================= */}
      {/*                  SIMILAR MOVIES                   */}
      {/* ================================================= */}

      <section className="similarSection">

        <h2>🎞️ Similar Movies</h2>

        <div className="similarMovies">

          {similar?.results
            ?.slice(0, 12)
            .map((movie) => (

              <NavLink
                key={movie.id}
                to={`/MovieDetails/${movie.id}`}
                className="similarMovieCard"
              >

                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : ""
                  }
                  alt={movie.title}
                />

                <div className="similarOverlay">

                  <h3>
                    {movie.title}
                  </h3>

                  <p>
                    ⭐{" "}
                    {movie.vote_average?.toFixed(1)}
                  </p>

                </div>

              </NavLink>

            ))}

        </div>

      </section>

    </div>
  );
};