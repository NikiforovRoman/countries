import React from "react";
import Container from "../container/Container";
import s from "./pagination.module.scss";

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Container>
      <ul className={s.pagination}>
        {pageNumbers.map((number) => (
          <li className={s.pagination__item} key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Pagination;
