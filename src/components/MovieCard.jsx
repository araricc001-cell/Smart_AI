import { useApp } from "../context/AppContext";
import { IMG } from "../lib/constants";

const MovieCard = ({
  movie,
  onClick,
}) => {
  const { addToWatchlist } =
    useApp();

  return (
    <div className="movie-card">
      <img
        src={`${IMG}/w500${movie.poster_path}`}
        alt={movie.title}
        onClick={() => onClick(movie)}
      />

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p>
          ⭐{" "}
          {movie.vote_average?.toFixed(
            1
          )}
        </p>

        <button
          onClick={() =>
            addToWatchlist(movie)
          }
        >
          Add to Watchlist
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
