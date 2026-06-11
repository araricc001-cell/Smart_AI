import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import GenresPage from "../pages/GenresPage";
import SearchPage from "../pages/SearchPage";
import MovieDetailPage from "../pages/MovieDetailPage";
import ProfilePage from "../pages/ProfilePage";
import { useApp } from "../context/AppContext";

const Router = () => {
  const { route, routeParams } = useApp();

  switch (route) {
    case "home":
      return <HomePage />;

    case "movies":
      return <MoviesPage />;

    case "genres":
      return (
        <GenresPage
          initGenreId={routeParams?.genreId}
          initGenreName={routeParams?.genreName}
        />
      );

    case "search":
      return <SearchPage />;

    case "movie":
      return <MovieDetailPage />;

    case "profile":
      return <ProfilePage />;

    default:
      return <HomePage />;
  }
};

export default Router;