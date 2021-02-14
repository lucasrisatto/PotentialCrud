import React from "react";

interface PaginationProps {
  page: number;
  count: number;
  setPage: Function;
}

const Pagination: React.FC<PaginationProps> = ({ page, count, setPage }) => {
  const totalPages = Math.ceil(count / 20);

  function toPage(numPage = 1) {
    setPage(numPage);
  }

  function nextPage() {
    setPage(page + 1);
  }

  function firstPage() {
    setPage(1);
  }

  function previousPage() {
    setPage(page - 1);
  }

  return (
    <ul className="pagination pagination-sm m-0 float-right">
      {page > 1 && (
        <>
          <li className="page-item" onClick={previousPage}>
            <a className="page-link">&laquo;</a>
          </li>
          <li className="page-item" onClick={firstPage}>
            <a className="page-link">1</a>
          </li>
        </>
      )}
      {page > 2 && (
        <li
          className="page-item"
          onClick={() => {
            toPage(page - 1);
          }}
        >
          <a className="page-link">{page - 1}</a>
        </li>
      )}
      <li className="page-item active">
        <a className="page-link">{page}</a>
      </li>
      {page < totalPages - 1 && (
        <li
          className="page-item"
          onClick={() => {
            toPage(page + 1);
          }}
        >
          <a className="page-link">{page + 1}</a>
        </li>
      )}
      {page < totalPages - 1 && (
        <li className="page-item">
          <a className="page-link">...</a>
        </li>
      )}
      {page < totalPages && (
        <>
          <li className="page-item" onClick={() => toPage(totalPages)}>
            <a className="page-link">{totalPages}</a>
          </li>
          <li className="page-item" onClick={nextPage}>
            <a className="page-link" aria-label="Next">
              &raquo;
            </a>
          </li>
        </>
      )}
    </ul>
  );
};

export default Pagination;
