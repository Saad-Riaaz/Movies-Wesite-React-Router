import "./GenresDetail.css";
import { NavLink } from "react-router-dom";

export const GenresDetail = () => {
  const genres = [
    { id: 28, name: "🔥 Action" },
    { id: 35, name: "😂 Comedy" },
    { id: 10749, name: "❤️ Romance" },
    { id: 27, name: "👻 Horror" },
    { id: 53, name: "🔪 Thriller" },
    { id: 878, name: "🚀 Science Fiction" },
    { id: 14, name: "🧙 Fantasy" },
    { id: 18, name: "🎭 Drama" },
    { id: 9648, name: "🕵️ Mystery" },
    { id: 16, name: "🧸 Animation" },
    { id: 10751, name: "👨‍👩‍👧 Family" },
    { id: 12, name: "⚔️ Adventure" },
    { id: 80, name: "🕯️ Crime" },
    { id: 99, name: "🎥 Documentary" },
    { id: 36, name: "📜 History" },
    { id: 10402, name: "🎵 Music" },
    { id: 10752, name: "💣 War" },
    { id: 37, name: "🤠 Western" }
  ];

  return (
    <div className="genresPage">

      <h1>🎬 Movie Genres</h1>

      <p className="genresSubtitle">
        Explore movies by your favorite genre
      </p>

      <div className="genresGrid">

        {genres.map((genre) => (
          <NavLink
            key={genre.id}
            to={`/Genres/${genre.id}`}
            className="genreCard"
          >
            {genre.name}
          </NavLink>
        ))}

      </div>

    </div>
  );
};