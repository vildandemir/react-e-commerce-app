import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Footer from "../Footer";

export default function Auth() {
  const [showPassword, setShowPassword] = useState(false);

  //get necessary states from your own hook
  const {
    register,
    login,
    email,
    setEmail,
    password,
    setPassword,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    isSubmitting,
  } = useAuth();

  return (
    <div>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={4} mx={"auto"} minW={"md"} py={12} px={6}>
          {hasAccount && (
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Sign in
              </Heading>
              )
              <Text fontSize={"lg"} color={"gray.600"}>
                to do all your shopping ✌️
              </Text>
            </Stack>
          )}
          {!hasAccount && (
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Sign up
              </Heading>
              )
              <Text fontSize={"lg"} color={"gray.600"}>
                to do all your shopping ✌️
              </Text>
            </Stack>
          )}

          <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  autoComplete="email"
                  required
                />
                <Text>{emailError}</Text>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    name="password"
                    autoComplete="password"
                    required
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                  <Text>{passwordError}</Text>
                </InputGroup>
              </FormControl>

              <Stack spacing={10} pt={2}>
                {/* has account button toggle */}
                {hasAccount ? (
                  <Stack>
                    <Button
                      loadingText="Submitting"
                      size="lg"
                      bg={"yellow.400"}
                      color={"white"}
                      _hover={{
                        bg: "yellow.500",
                      }}
                      isLoading={isSubmitting}
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        login(email, password);
                      }}
                    >
                      Sign in
                    </Button>
                    <Stack pt={6}>
                      <Text align={"center"}>
                        Don't have an account?{" "}
                        <Link
                          color={"blue.500"}
                          to="/login"
                          onClick={() => {
                            setHasAccount(!hasAccount);
                          }}
                        >
                          Sign up
                        </Link>
                      </Text>
                    </Stack>
                  </Stack>
                ) : (
                  <Stack>
                    <Button
                      loadingText="Submitting"
                      size="lg"
                      bg={"yellow.400"}
                      color={"white"}
                      _hover={{
                        bg: "yellow.500",
                      }}
                      isLoading={isSubmitting}
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        register(email, password);
                      }}
                    >
                      Sign up
                    </Button>
                    <Stack pt={6}>
                      <Text align={"center"}>
                        Already a user?{" "}
                        <Link
                          color={"blue.500"}
                          to="/login"
                          onClick={() => {
                            setHasAccount(!hasAccount);
                          }}
                        >
                          Login
                        </Link>
                      </Text>
                    </Stack>
                  </Stack>
                )}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </div>
  );
}
