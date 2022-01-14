import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

export default function Profile() {
  const { currentUser, logout, profile, authListener } = useAuth();

  // useEffect(() => {
  //   authListener();
  //   console.log(currentUser);
  // }, []);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      {
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            User Profile
          </Heading>
          <FormControl id="userName">
            <FormLabel>User Icon</FormLabel>
            <Stack direction={["column", "row"]} spacing={6}>
              <Center>
                <Avatar size="xl" src="https://bit.ly/sage-adebayo">
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
            <FormLabel>Email address</FormLabel>
            <Text>{JSON.stringify(currentUser)}</Text>
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
      }
    </Flex>
  );
}
