/* eslint-disable react/prop-types */
import style from './Pagination.module.css'

const Pagination = ({ countriesPerPage, countries, paginado, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(countries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className={style.paginado}>
        {pageNumbers.map(number => {
          return (
            <button className={`${style.number} ${currentPage === number ? style.active : ""}`} key={number} onClick={() => paginado(number)}>
              {number}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Pagination;






