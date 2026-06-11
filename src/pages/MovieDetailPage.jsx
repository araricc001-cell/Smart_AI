import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { useApp } from "../context/AppContext";
import { api } from "../lib/api";
import { IMG, VIDSRC } from "../lib/constants";

const MovieDetailPage = () => {
  const { currentMovie } =
    useApp();

  const [movie, setMovie] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    getMovie();
  }, []);

  const getMovie = async () => {
    try {
      const data = await api(
        `/movie/${currentMovie.id}`
      );

      setMovie(data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="movie-detail-page">
      <img
        src={`${IMG}/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <div className="movie-detail-info">
        <h1>{movie.title}</h1>

        <p>{movie.overview}</p>

        <h3>
          ⭐ {movie.vote_average}
        </h3>

        <p>
          Release Date:{" "}
          {movie.release_date}
        </p>

        <a
          href={`${VIDSRC}/${movie.id}`}
          target="_blank"
        >
          <button>
            Watch Movie
          </button>
        </a>
      </div>
    </div>
  );
};

export default MovieDetailPage;
