import React from "react";
import Card from "../../Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid } from "@chakra-ui/react";
import Footer from "../../Footer";

function Jackets() {
  const [data, setData] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://6196420eaf46280017e7df35.mockapi.io/api/clothes"
      );
      setData(response.data);
      setDataIsLoaded(true);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {data

            .filter((item) => item.categories.includes("jacket"))
            .map((item, key) => (
              <Card key={key} item={item} />
            ))}
        </Grid>
      </Box>
      {dataIsLoaded === true && <Footer />}
    </div>
  );
}

export default Jackets;
