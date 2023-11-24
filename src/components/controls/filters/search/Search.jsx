import React from "react";
import s from "./search.module.scss";
import { IoSearch } from "react-icons/io5";
import MyInput from "../../../UI/Input/MyInput";

const Search = ({ search, setSearch, setPaginate }) => {
  return (
    <label className={s.search}>
      <IoSearch size={18} />
      <MyInput
        placeholder="Search for a country..."
        type="search"
        value={search}
        onChange={(evt) => {
          setSearch(evt.target.value);
          setPaginate(8)
        }}
      />
    </label>
  );
};

export default Search;
