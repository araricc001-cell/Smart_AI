import { useApp } from "../context/AppContext";

const Navbar = () => {
  const {
    navigate,
    setSearch,
    logout,
  } = useApp();

  return (
    <nav className="navbar">
      <h2 onClick={() => navigate("home")}>
        CineVault
      </h2>

      <div className="nav-links">
        <button onClick={() => navigate("home")}>
          Home
        </button>

        <button onClick={() => navigate("movies")}>
          Movies
        </button>

        <button onClick={() => navigate("genres")}>
          Genres
        </button>

        <button onClick={() => navigate("watchlist")}>
          Watchlist
        </button>

        <button onClick={() => navigate("profile")}>
          Profile
        </button>
      </div>

      <div className="nav-search">
        <input
          type="text"
          placeholder="Search movie..."
          onChange={(e) => {
            setSearch(e.target.value);
            navigate("search");
          }}
        />

        <button onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
