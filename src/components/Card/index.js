import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Image, Badge, Grid } from "@chakra-ui/react";

function Card() {
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
          {data.map((repo) => (
            <Box key={repo.id} w="100%" h="200" bg="blue.500">
              <Box>Name : {repo.name}</Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Card;
