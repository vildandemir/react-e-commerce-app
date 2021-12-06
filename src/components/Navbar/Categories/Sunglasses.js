import React from "react";
import Card from "../../Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid } from "@chakra-ui/react";

function Sunglasses() {
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
      <Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {data

            .filter((item) => item.categories.includes("sunglass"))
            .map((item, key) => (
              <Card key={key} item={item} />
            ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Sunglasses;
