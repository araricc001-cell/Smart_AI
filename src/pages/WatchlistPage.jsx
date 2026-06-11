import { useApp } from "../context/AppContext";
import MovieCard from "../components/MovieCard";

const WatchlistPage = () => {
  const {
    watchlist,
    navigate,
    setCurrentMovie,
  } = useApp();

  const openMovie = (movie) => {
    setCurrentMovie(movie);

    navigate("movie");
  };

  return (
    <div className="watchlist-page">
      <div className="section-title">
        <h1>My Watchlist</h1>

        <p>
          Your saved movies will
          appear here.
        </p>
      </div>

      {watchlist.length === 0 ? (
        <div className="empty-watchlist">
          <h2>No Movies Yet</h2>

          <p>
            Add movies to your
            watchlist.
          </p>
        </div>
      ) : (
        <div className="movie-grid">
          {watchlist.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={openMovie}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchlistPage;