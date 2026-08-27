import { NavLink } from "react-router-dom";

export const Cards = ({ curMovie }) => {
  return (
    <li  className="Container3">
      <div className="cardDetail">
        <img
          src={`https://image.tmdb.org/t/p/w500${curMovie.poster_path}`}
          alt={curMovie.title}
        />

        <h2>{curMovie.title}</h2>

        <p>⭐ {curMovie.vote_average}</p>

        <p>{curMovie.release_date}</p>
        <NavLink to={`/MovieDetails/${curMovie.id}`}>
        <button className="MovieBut">Watch Now</button>
        </NavLink>
      </div>
    </li>
  );
};