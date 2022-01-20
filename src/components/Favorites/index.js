import { useEffect } from "react";
import { useFavorites } from "../../context/FavoritesContext";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  Box,
  List,
  ListItem,
} from "@chakra-ui/react";

function Favorites() {
  const { currentUser, authListener } = useAuth();

  useEffect(() => {
    authListener();
    console.log(currentUser);
  }, []);

  //get necessery states from your own favorites hook
  const { products, removeItemFromFavorites } = useFavorites();
  console.log(products);

  return (
    <div>
      {products.length < 1 && (
        <Alert status="warning">
          <AlertIcon />
          You have not any product in your favorite list.
        </Alert>
      )}
      {products.length > 0 && (
        <>
          <Text
            fontSize={"2xl"}
            fontWeight={"900"}
            color={"pink.500"}
            textAlign={"center"}
            mt={"15px"}
          >
            Favorites
          </Text>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <Box>
                  <Stack
                    borderWidth="1px"
                    borderRadius="lg"
                    w={{ md: "60%" }}
                    height={{ md: "11rem" }}
                    direction={{ base: "column", md: "row" }}
                    bg={"gray.50"}
                    boxShadow={"2xl"}
                    padding={4}
                    mt={"10px"}
                    ml={"20%"}
                  >
                    <Flex flex={1}>
                      <Link to={`/product/${product.id}`}>
                        <Image
                          w={"150px"}
                          h={"150px"}
                          src={product.image}
                          alt="cart item"
                        />
                      </Link>
                      <List mt={"15%"} ml={"11%"} spacing={2}>
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
                    </Flex>
                    <Stack
                      flex={1}
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      p={1}
                      pt={2}
                    >
                      <Text mt={5}>
                        {product.name} - {product.price} $
                      </Text>
                      <Button
                        onClick={() => removeItemFromFavorites(product.id)}
                        size="sm"
                        ml={5}
                        bg={"pink.900"}
                        color={"white"}
                        mt={5}
                      >
                        Remove From Favorites
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </li>
            ))}
          </ul>
        </>
      )}
      <Footer />
    </div>
  );
}

export default Favorites;
