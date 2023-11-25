import { useEffect, useState } from "react";
import axios from "axios";
import Controls from "../components/controls/Controls";
import { ALL_COUNTRIES } from "../API/config";
import List from "../components/list/List";
import { useCountries } from "../hooks/useCountries";
import { CircularProgress } from "@mui/material";

function HomePage({ countries, setCountries }) {
  const [filter, setFilter] = useState({ search: "", region: "" });
  const [paginate, setPaginate] = useState(8);

  const filteredAndSearchedCountries = useCountries(
    countries,
    filter.search,
    filter.region
  );

  useEffect(() => {
    if (!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));  
  });

  return (
    <div>
      <Controls
        filter={filter}
        setFilter={setFilter}
        setPaginate={setPaginate}
      />
      {!countries.length ? (
        <CircularProgress style={{position: 'absolute', right: '50%'}} />
      ) : (
        <List
          countries={filteredAndSearchedCountries}
          paginate={paginate}
          setPaginate={setPaginate}
        />
      )}
    </div>
  );
}

export default HomePage;
