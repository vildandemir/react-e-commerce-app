import { useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
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
import Footer from "../Footer";

function Cart() {
  const { currentUser, authListener } = useAuth();

  useEffect(() => {
    authListener();
    console.log(currentUser);
  }, []);

  const { items, removeItemFromCart } = useCart();
  console.log(items);

  const totalPrice = items.reduce((acc, obj) => acc + obj.price, 0);

  return (
    <div>
      {items.length < 1 && (
        <Alert status="warning">
          <AlertIcon />
          You have not any product in your cart.
        </Alert>
      )}
      {items.length > 0 && (
        <>
          <Text
            fontSize={"2xl"}
            fontWeight={"900"}
            color={"yellow.500"}
            textAlign={"center"}
            mt={"15px"}
          >
            Shopping Cart
          </Text>

          <ul>
            {items.map((item) => (
              <li key={item.id}>
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
                  >
                    <Flex flex={1}>
                      <Link to={`/product/${item.id}`}>
                        <Image
                          w={"150px"}
                          h={"150px"}
                          src={item.image}
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
                        {item.name} - {item.price} $
                      </Text>
                      <Button
                        onClick={() => removeItemFromCart(item.id)}
                        size="sm"
                        ml={5}
                        bg={"red.800"}
                        color={"white"}
                        mt={5}
                      >
                        Remove From Cart
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
                <Stack
                  position={"absolute"}
                  bg={"gray.50"}
                  top={"14%"}
                  left={"67%"}
                  borderWidth="1px"
                  borderRadius="lg"
                  w={{ md: "25%" }}
                  height={{ md: "11rem" }}
                  direction={{ md: "row" }}
                  bg={"gray.50"}
                  boxShadow={"2xl"}
                  padding={4}
                  display={"column"}
                >
                  <Box textAlign={"center"} mt={"10%"}>
                    <Box>
                      <Text fontSize={"2xl"}>Subtotal : {totalPrice} $</Text>
                    </Box>

                    <Box>
                      <Button
                        onClick={() => {
                          if (!currentUser) {
                            alert("You must be a member to buy products!");
                          }
                        }}
                        mt={"5px"}
                        width={"200px"}
                        bg={"yellow.400"}
                      >
                        BUY NOW
                      </Button>
                    </Box>
                  </Box>
                </Stack>
              </li>
            ))}
          </ul>
        </>
      )}

      <Footer />
    </div>
  );
}

export default Cart;
