import { useApp } from "../context/AppContext";

const ProfilePage = () => {
  const {
    user,
    watchlist,
  } = useApp();

  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-top">
          <div className="avatar">
            {user.name[0]}
          </div>

          <div>
            <h1>{user.name}</h1>

            <p>{user.email}</p>
          </div>
        </div>

        <div className="profile-stats">

          <div className="stat-box">
            <h2>
              {watchlist.length}
            </h2>

            <p>Saved Movies</p>
          </div>

          <div className="stat-box">
            <h2>Premium</h2>

            <p>Subscription</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;