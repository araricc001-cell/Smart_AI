
const Spinner = () => {
  return (
    <div className="skeleton-grid">
      {[...Array(8)].map((_, index) => (
        <div
          className="skeleton-card"
          key={index}
        >
          <div className="skeleton-image"></div>

          <div className="skeleton-content">
            <div className="skeleton-title"></div>

            <div className="skeleton-text"></div>

            <div className="skeleton-btn"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Spinner;