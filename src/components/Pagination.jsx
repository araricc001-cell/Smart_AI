import React from 'react';
const Pagination = ({ page, setPage }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>

      <span>{page}</span>

      <button onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;