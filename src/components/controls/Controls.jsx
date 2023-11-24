import React from "react";
import Search from "./filters/search/Search";
import MySelect from "./filters/select/Select";
import s from "./controls.module.scss";
import Container from "../container/Container";

const Controls = ({ filter, setFilter, setPaginate }) => {
  return (
    <Container>
      <div className={s.controls}>
        <Search
          value={filter.search}
          setSearch={(value) => setFilter({ ...filter, search: value })}
          setPaginate={setPaginate}
        />
        <MySelect
          defaultValue={"Filter by Region"}
          options={[
            { value: "", label: "No filter" },
            { value: "Africa", label: "Africa" },
            { value: "Americas", label: "Americas" },
            { value: "Asia", label: "Asia" },
            { value: "Europe", label: "Europe" },
            { value: "Oceania", label: "Oceania" },
          ]}
          value={filter.region}
          onChange={(selectedFilter) =>
            setFilter({ ...filter, region: selectedFilter })
          }
          setPaginate={setPaginate}
        />
      </div>
    </Container>
  );
};

export default Controls;
