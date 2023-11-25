import React from "react";
import s from "./detail.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { filterByCode } from "../../API/config";
import { useNavigate } from "react-router-dom";

const Detail = ({
  name,
  flags,
  capital,
  population,
  region,
  subregion,
  tld,
  currencies = {},
  languages = {},
  borders = [],
}) => {
  const push = useNavigate();
  let nativeName = Object.values(name.nativeName);
  let currencyArray = Object.values(currencies);
  let languagesArray = Object.values(languages);

  const [neighbours, setNeighbours] = useState([]);
  useEffect(() => {
    if (borders.length)
      axios
        .get(filterByCode(borders))
        .then(({ data }) => setNeighbours(data.map((c) => c.name.common)));
  }, [borders]);
  return (
    <div className={s.detail}>
      <div className={s.detail__wrapper}>
        <img className={s.detail__img} src={flags.svg} alt={flags.alt} />
        <div className={s.detail__data}>
          <h2 className={s.detail__title}>{name.common}</h2>
          <div className={s.detail__lists}>
            <ul className={s.detail__list}>
              <li className={s.detail__item}>
                <b>Native name:</b> {nativeName[0].common}
              </li>
              <li className={s.detail__item}>
                <b>Population:</b> {population}
              </li>
              <li className={s.detail__item}>
                <b>Region:</b> {region}
              </li>
              <li className={s.detail__item}>
                <b>Sub Region:</b> {subregion}
              </li>
              <li className={s.detail__item}>
                <b>Capital:</b> {capital}
              </li>
            </ul>
            <ul className={s.detail__list}>
              <li className={s.detail__item}>
                <b>Top Level Domain: </b> {tld?.join(" ")}
              </li>
              <li className={s.detail__item}>
                <b>Currencies:</b>{" "}
                {currencyArray.map((c) => (
                  <div key={c.name}>
                    {c.name} ({c.symbol})
                  </div>
                ))}
              </li>
              <li className={s.detail__item}>
                <b>Languages:</b> {languagesArray.join(", ")}
              </li>
            </ul>
          </div>
          <div className={s.detail__borders}>
            <b className={s.detail__subtite}>Border Countries: </b>
            {!borders.length ? (
              <span>There are no border countries</span>
            ) : (
              <div className={s.detail__buttons}>
                {neighbours.map((b) => (
                  <button
                    className={s.detail__button}
                    key={b}
                    onClick={() => push(`/country/${b}`)}
                  >
                    {b}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
