import { NavLink } from "react-router-dom";
import "./Cards.css";

export const Cards = ({ curMovie, mediaType = "movie" }) => {
  const title = curMovie.title || curMovie.name;
  const dateStr = curMovie.release_date || curMovie.first_air_date;
  const year = dateStr ? dateStr.split("-")[0] : "N/A";

  const detailsPath =
    mediaType === "tv"
      ? `/TVDetails/${curMovie.id}`
      : `/MovieDetails/${curMovie.id}`;

  return (
    <li className="Container3">
      <NavLink to={detailsPath} className="cardLink">
        <div className="posterWrapper">
          <img
            src={
              curMovie.poster_path
                ? `https://image.tmdb.org/t/p/w500${curMovie.poster_path}`
                : "https://via.placeholder.com/280x320?text=No+Image"
            }
            alt={title}
          />

          <div className="ratingBadge">
            ⭐ {curMovie.vote_average?.toFixed(1) || "N/A"}
          </div>
        </div>

        <div className="cardDetail">
          <h2>{title}</h2>
          <p className="cardYear">{year}</p>

          <button className="MovieBut">
            {mediaType === "tv" ? "Watch Series" : "Watch Now"}
          </button>
        </div>
      </NavLink>
    </li>
  );
};