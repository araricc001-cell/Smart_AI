import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";

import Spinner from "../components/Spinner";

import { useApp } from "../context/AppContext";
import { api } from "../lib/api";

const MoviesPage = () => {

  const [movies, setMovies] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const {
    navigate,
    setCurrentMovie,
  } = useApp();

  useEffect(() => {

    // eslint-disable-next-line react-hooks/immutability
    fetchMovies();

  }, []);

  const fetchMovies = async () => {

    try {

      const data = await api(
        "/discover/movie"
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
    <div className="movies-page">

      <div className="section-title">
        <h1>All Movies</h1>

        <p>
          Explore thousands of
          trending movies.
        </p>
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

export default MoviesPage;

