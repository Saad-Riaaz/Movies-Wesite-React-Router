import "./GenresDetail.css";
import { NavLink } from "react-router-dom";

export const GenresDetail = () => {
  const genres = [
    { id: 28, name: "Action", emoji: "🔥", color: "#ff4b4b" },
    { id: 35, name: "Comedy", emoji: "😂", color: "#ffb703" },
    { id: 10749, name: "Romance", emoji: "❤️", color: "#ff6b9d" },
    { id: 27, name: "Horror", emoji: "👻", color: "#7209b7" },
    { id: 53, name: "Thriller", emoji: "🔪", color: "#3a0ca3" },
    { id: 878, name: "Science Fiction", emoji: "🚀", color: "#00b4d8" },
    { id: 14, name: "Fantasy", emoji: "🧙", color: "#9d4edd" },
    { id: 18, name: "Drama", emoji: "🎭", color: "#e63946" },
    { id: 9648, name: "Mystery", emoji: "🕵️", color: "#495057" },
    { id: 16, name: "Animation", emoji: "🧸", color: "#f77f00" },
    { id: 10751, name: "Family", emoji: "👨‍👩‍👧", color: "#06d6a0" },
    { id: 12, name: "Adventure", emoji: "⚔️", color: "#2a9d8f" },
    { id: 80, name: "Crime", emoji: "🕯️", color: "#6a040f" },
    { id: 99, name: "Documentary", emoji: "🎥", color: "#457b9d" },
    { id: 36, name: "History", emoji: "📜", color: "#b08968" },
    { id: 10402, name: "Music", emoji: "🎵", color: "#f72585" },
    { id: 10752, name: "War", emoji: "💣", color: "#582f0e" },
    { id: 37, name: "Western", emoji: "🤠", color: "#bc6c25" }
  ];

  return (
    <div className="genresPage">
      <h1>🎬 Movie Genres</h1>
      <p className="genresSubtitle">Explore movies by your favorite genre</p>

      <div className="genresGrid">
        {genres.map((genre) => (
          <NavLink
            key={genre.id}
            to={`/Genres/${genre.id}`}
            className="genreCard"
            style={{ "--genre-color": genre.color }}
          >
            <span className="genreEmoji">{genre.emoji}</span>
            <span className="genreName">{genre.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};