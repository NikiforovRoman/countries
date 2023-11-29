import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";
import Container from "../components/container/Container";
import { searchByCountry } from "../API/config";
import MyButton from "../components/UI/button/MyButton";
import Detail from "../components/detail/Detail";
import { CircularProgress } from "@mui/material";

const Details = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <>
      <Container>
        <MyButton>
          <IoArrowBack style={{ marginRight: "0.4rem" }} size={16} /> Back
        </MyButton>
        {!country && <CircularProgress style={{position: 'absolute', right: '50%'}} />}
        {country && <Detail {...country} />}
      </Container>
    </>
  );
};

export default Details;
