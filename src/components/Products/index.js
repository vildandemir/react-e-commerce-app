import React from "react";
import Card from "../Card";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Image, Badge, Grid, Button } from "@chakra-ui/react";

// import { Link } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://6196420eaf46280017e7df35.mockapi.io/api/clothes"
      );
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Carousel />
      <Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {data.map((item, key) => (
            <Card key={key} item={item} />
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Products;
