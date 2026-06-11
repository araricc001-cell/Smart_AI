import { useState } from "react";

import Navbar from "./components/Navbar";
import GlobalStyles from "./components/GlobalStyles";

import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import GenresPage from "./pages/GenresPage";
import SearchPage from "./pages/SearchPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import ProfilePage from "./pages/ProfilePage";
import WatchlistPage from "./pages/WatchlistPage";

import { Ctx } from "./context/AppContext";

const App = () => {
  const [route, setRoute] =
    useState("home");

  const [user, setUser] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [currentMovie, setCurrentMovie] =
    useState(null);

  const [watchlist, setWatchlist] =
    useState([]);

  const navigate = (page) => {
    setRoute(page);
  };

  const login = () => {
    setUser({
      name: "Ridwan",
      email: "test@gmail.com",
    });
  };

  const signup = (
    name,
    email
  ) => {
    setUser({
      name,
      email,
    });
  };

  const logout = () => {
    setUser(null);
  };

  const addToWatchlist = (movie) => {
    const found = watchlist.find(
      (item) => item.id === movie.id
    );

    if (!found) {
      setWatchlist([
        ...watchlist,
        movie,
      ]);
    }
  };

  const value = {
    user,
    login,
    signup,
    logout,

    route,
    navigate,

    search,
    setSearch,

    currentMovie,
    setCurrentMovie,

    watchlist,
    addToWatchlist,
  };

  const renderPage = () => {
    switch (route) {
      case "movies":
        return <MoviesPage />;

      case "genres":
        return <GenresPage />;

      case "search":
        return <SearchPage />;

      case "movie":
        return <MovieDetailPage />;

      case "profile":
        return <ProfilePage />;

      case "watchlist":
        return <WatchlistPage />;

      default:
        return <HomePage />;
    }
  };

  return (
    <Ctx.Provider value={value}>
      <GlobalStyles />

      {!user ? (
        <AuthPage />
      ) : (
        <>
          <Navbar />

          {renderPage()}
        </>
      )}
    </Ctx.Provider>
  );
};

export default App;