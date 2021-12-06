import { Box, Image, Badge, Grid, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { BsTruck } from "react-icons/bs";

function Card({ item }) {
  return (
    <div>
      <Box key={item.id} w="100%" h="400" bg="blue.200">
        <Link to={`/product/${item.id}`}>
          <Image src={item.image} boxSize="200px"></Image>
          <Box>{item.name}</Box>
          <Box>{item.color}</Box>
          <Box>{item.price} $ </Box>
          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < item.rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {item.reviewCount} reviews
            </Box>
          </Box>
          <br />
          <Box as="span" ml="5" color="gray.600" fontSize="md">
            <BsTruck ml="36" />
            Shipping within 3 days
          </Box>
        </Link>
      </Box>
    </div>
  );
}

export default Card;
