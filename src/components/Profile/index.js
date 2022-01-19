import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useAuth } from "../../context/AuthContext";
import Footer from "../Footer";

export default function Profile() {
  const { currentUser, logout } = useAuth();

  return (
    <div>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
          textAlign={"center"}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            User Profile
          </Heading>
          <FormControl id="userName">
            <Stack ml={"35%"} direction={["column", "row"]} spacing={6}>
              <Center>
                <Avatar size="xl">
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                  />
                </Avatar>
              </Center>
            </Stack>
          </FormControl>

          <FormControl id="email">
            <FormLabel fontWeight={"700"} textAlign={"center"}>
              Email address :
            </FormLabel>
            <Text>{JSON.stringify(currentUser.email)}</Text>
          </FormControl>

          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg={"red.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "blue.500",
              }}
              onClick={() => {
                logout();
              }}
            >
              <Link to="/auth">Logout</Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Footer />
    </div>
  );
}
