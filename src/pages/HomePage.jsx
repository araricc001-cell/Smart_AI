import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner";
import { useApp } from "../context/AppContext";
import { api } from "../lib/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
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
        "/movie/popular"
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
    <div className="home-page">
      <div className="hero">
        <h1>
          Unlimited Movies, TV Shows
          and More.
        </h1>

        <p>
          Watch trending movies from
          around the world.
        </p>
      </div>

      <h2>Popular Movies</h2>

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

export default HomePage;
