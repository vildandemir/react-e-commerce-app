import { Box, Image, Badge, Grid, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";

function Card({ item }) {
  return (
    <div>
      <Box key={item.id} w="100%" h="400" bg="blue.200">
        <Link to={`/product/${item.id}`}>
          <Image src={item.image}></Image>
          <Box>{item.name}</Box>
          <Box>{item.color}</Box>
          <Box>{item.price}</Box>
          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < item.rating ? "teal.500" : "gray.300"}
                />
              ))}
          </Box>
        </Link>
      </Box>
    </div>
  );
}

export default Card;
