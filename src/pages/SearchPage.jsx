import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";

import Spinner from "../components/Spinner";

import { useApp } from "../context/AppContext";
import { api } from "../lib/api";

const SearchPage = () => {

  const {
    search,
    navigate,
    setCurrentMovie,
  } = useApp();

  const [movies, setMovies] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    // eslint-disable-next-line react-hooks/immutability
    searchMovies();

  }, [search]);

  const searchMovies = async () => {

    try {

      const data = await api(
        "/search/movie",
        {
          query: search,
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
    <div className="search-page">

      <div className="section-title">
        <h1>
          Search Results
        </h1>
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

export default SearchPage;