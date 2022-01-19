import { Box, Image, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { BsTruck } from "react-icons/bs";

function Card({ item }) {
  return (
    <div>
      <Box
        mt={10}
        key={item.id}
        w="100%"
        h="350"
        bg="gray.50"
        textAlign={"center"}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow={"xl"}
      >
        <Link to={`/product/${item.id}`}>
          <Image ml={"10%"} src={item.image} boxSize="200px"></Image>
          <Box mt={"10px"} fontWeight={"600"}>
            {item.name}
          </Box>
          {/* <Box>{item.color}</Box> */}
          <Box mt={"10px"}>{item.price} $ </Box>
          <Box ml={"12%"} display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < item.rating ? "gray.600" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {item.reviewCount} reviews
            </Box>
          </Box>
          <br />
          <Box as="span" color="gray.600" fontSize="md">
            <Icon mr={"10px"} as={BsTruck} />
            Shipping within 3 days
          </Box>
        </Link>
      </Box>
    </div>
  );
}

export default Card;
