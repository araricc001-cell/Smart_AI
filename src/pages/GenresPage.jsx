import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";

import Spinner from "../components/Spinner";

import { useApp } from "../context/AppContext";
import { api } from "../lib/api";

const GenresPage = () => {

  const [movies, setMovies] =
    useState([]);

  const [genreId, setGenreId] =
    useState(28);

  const [loading, setLoading] =
    useState(true);

  const {
    navigate,
    setCurrentMovie,
  } = useApp();

  const genres = [
    {
      id:28,
      name:"Action",
    },

    {
      id:35,
      name:"Comedy",
    },

    {
      id:27,
      name:"Horror",
    },

    {
      id:18,
      name:"Drama",
    },

    {
      id:10749,
      name:"Romance",
    },
  ];

  useEffect(() => {

    // eslint-disable-next-line react-hooks/immutability
    fetchMovies();

  }, [genreId]);

  const fetchMovies = async () => {

    try {

      const data = await api(
        "/discover/movie",
        {
          with_genres:genreId,
        }
      );

      setMovies(data.results);

    } catch (error) {

      console.log(error);

    }

    setLoading(false);
  };

  const openMovie = (movie) => {

    setCurrentMovie(movie);

    navigate("movie");
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="genres-page">

      <div className="section-title">
        <h1>Movie Genres</h1>

        <p>
          Browse movies by category.
        </p>
      </div>

      <div className="genres">

        {genres.map((genre) => (

          <button
            key={genre.id}
            onClick={() =>
              setGenreId(genre.id)
            }
          >
            {genre.name}
          </button>

        ))}

      </div>

      <div className="movie-grid">

        {movies.map((movie) => (

          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={openMovie}
          />

        ))}

      </div>

    </div>
  );
};

export default GenresPage;