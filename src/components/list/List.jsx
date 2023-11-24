import React from "react";
import s from "./list.module.scss";
import Container from "../container/Container";
import Card from "../card/Card";
import { useNavigate } from "react-router-dom";

const List = ({ countries, paginate, setPaginate }) => {
  const push = useNavigate();
  const loadMore = () => {
    setPaginate((prev) => prev + 8);
  };
  return (
    <Container>
      <section className={s.list}>
        {countries.slice(0, paginate).map((c) => {
          const countryInfo = {
            img: c.flags.svg,
            name: c.name.common,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital[0],
              },
            ],
          };
          return (
            <Card
              key={countryInfo.name}
              onClick={() => push(`/country/${c.name.common}`)}
              {...countryInfo}
            />
          );
        })}
      </section>
      {countries.length === 0 && <span>There are no such countries</span>}
      {countries.length > countries.slice(0, paginate).length && (
        <button className={s.list__pagination} onClick={loadMore}>
          Load more
        </button>
      )}
    </Container>
  );
};

export default List;
