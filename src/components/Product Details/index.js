import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";
import { useAuth } from "../../context/AuthContext";
import Footer from "../Footer";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";

function ProductDetails() {
  const { currentUser, authListener } = useAuth();
  const [data, setData] = useState([]);
  const { product_id } = useParams();
  const { addToCart, items } = useCart();
  const { addToFavorites, products } = useFavorites();
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://6196420eaf46280017e7df35.mockapi.io/api/clothes/${product_id}`
      );
      setData(response.data);
      setDataIsLoaded(true);
      authListener();
    };
    fetchData();
  }, []);

  const findCardItem = items.find((item) => item.id === product_id);

  const findFavoriteItem = products.find(
    (product) => product.id === product_id
  );

  return (
    <div>
      <Container maxW={"6xl"}>
        <SimpleGrid
          columns={{ base: 3 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 19 }}
        >
          <Flex>
            <Image
              mt={"20px"}
              rounded={"md"}
              alt={"product image"}
              src={data.image}
              // fit={"cover"}
              align={"center"}
              w={"400px"}
              h={"400px"}
            />
          </Flex>
          <Stack spacing={{ base: 6 }} ml={"20px"} mt={"20px"} w={"sm"}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.7}
                fontWeight={600}
                fontSize={{ base: "3xl" }}
              >
                {data.name}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                $ {data.price}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"md"}
                  fontWeight={"300"}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text>
              </VStack>
              <Box display={"flex"}>
                <Box>
                  <Text
                    fontSize={{ base: "15px" }}
                    color={useColorModeValue("yellow.500", "yellow.300")}
                    fontWeight={"700"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Features
                  </Text>

                  <SimpleGrid columns={{ base: 2 }}>
                    <List spacing={2}>
                      <ListItem>Chronograph</ListItem>
                      <ListItem>Tachymeter</ListItem>
                    </List>
                  </SimpleGrid>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: "15px" }}
                    color={useColorModeValue("yellow.500", "yellow.300")}
                    fontWeight={"700"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Product Details
                  </Text>
                  <List spacing={2}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Between lugs:
                      </Text>{" "}
                      20 mm
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Bracelet:
                      </Text>{" "}
                      leather strap
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Stack>
          </Stack>
          <Stack ml={"70px"} mt={"90px"} spacing={{ base: 5 }}>
            <Button
              rounded={"none"}
              w={"250px"}
              mt={8}
              size={"md"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={() => {
                if (!currentUser) {
                  alert("You must be a member to add to cart!");
                } else {
                  addToCart(data, findCardItem);
                }
              }}
            >
              Add to cart
            </Button>
            <Button
              w={"250px"}
              rounded={"none"}
              mt={8}
              size={"md"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={() => {
                if (!currentUser) {
                  alert("You must be a member to add to favorites!");
                } else {
                  addToFavorites(data, findFavoriteItem);
                }
              }}
            >
              Add to favorites
            </Button>

            <Button
              w={"250px"}
              rounded={"none"}
              mt={8}
              size={"md"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              <Link to="/"> Back to Homepage </Link>
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      {dataIsLoaded && <Footer />}
    </div>
  );
}

export default ProductDetails;
