import React, { useContext } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Image,
  useColorModeValue,
  Link,
  useToast,
} from "@chakra-ui/react";
import { auth, provider } from "../components/firebase";
import { FcGoogle } from "react-icons/fc";

import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "@/Context/AuthContext";
import Form from "./UserDetails";
const Registration = () => {
  const router = useRouter();
  const [registerdetails, setregisterdetails] = useState({});
  const toast = useToast();
  const { isAuth } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      let data = await signInWithPopup(auth, provider);
      let userdata = {
        name: data.user.displayName,
        email: data.user.email,
        phone: data.user.phoneNumber,
        img: data.user.photoURL,
        id: data.user.uid,
        cart: [],
        wishlist: [],
        orders: 0,
      };
      await axios
        .post(`${process.env.NEXT_PUBLIC_baseURL}/user`, userdata)
        .then(() => router.push("/"))
        .catch((e) => {
          console.log(e.message);
        });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setregisterdetails({ ...registerdetails, [name]: value });
  };

  const handleSubmit = async () => {
    let res = await createUserWithEmailAndPassword(
      auth,
      registerdetails.email,
      registerdetails.password
    );
    let userobj = {
      id: res.user.uid,
      img: "",
      name: registerdetails.name,
      email: registerdetails.email,
      phone: registerdetails.phone,
      cart: [],
      wishlist: [],
      orders: [],
    };
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_baseURL}/user`, userobj);

      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 2000,
        variant: "solid",
        isClosable: true,

        position: "bottom-right",
      });
      router.push("/login");
    } catch (error) {
      console.log("can not create the account");
    }
  };

  return isAuth ? (
    <Form />
  ) : (
    <>
      <Flex
        color={"rgb(243,171,24)"}
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.60", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Image
              src="https://i.postimg.cc/QxQdTXsg/Whats-App-Image-2023-01-17-at-10-32-51-PM.jpg"
              alt="..."
              width={150}
              height={100}
            />
            <Heading fontSize={"4xl"} textAlign={"center"}>
              SignUp/SignIn in one Click with Google
            </Heading>
          </Stack>
          <Flex
            justifyContent={"center"}
            gap="6"
            alignItems={"center"}
            border={"2px solid red"}
            bg="#ffe69e"
          >
            <Text w={"10%"} color={"rgb(255,255,0)"}>
              <FcGoogle
                cursor={"pointer"}
                fontSize={"48"}
                onClick={handleLogin}
              />
            </Text>
            <Text
              fontSize={"lg"}
              cursor={"pointer"}
              as="b"
              color="#ff3d00"
              onClick={handleLogin}
              w={"50%"}
            >
              Sign with Google
            </Text>
          </Flex>
          <Text as="b" color={"black"} textAlign={"center"}>
            Or Fill below form
          </Text>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="user" isRequired></FormControl>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      borderColor={"gray.600"}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      name="Lname"
                      borderColor={"gray.600"}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="phone" isRequired>
                <FormLabel>Phone No</FormLabel>
                <Input
                  type="Phone"
                  borderColor={"gray.600"}
                  name="phone"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  borderColor={"gray.600"}
                  name="email"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Text fontSize={10} color={"red"}>
                  Password must be of atleast 8 characters and must contain
                  atleast one alphabet, one number and one symbol
                </Text>
                <InputGroup>
                  <Input
                    borderColor={"gray.600"}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
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
                </InputGroup>
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  isDisabled={
                    registerdetails.password?.length < 8 ||
                    registerdetails.phone?.length < 10 ||
                    /[a-zA-Z]/.test(registerdetails.phone) ||
                    !/@/.test(registerdetails.email) ||
                    !/[!@#$%^&*(),.?":{}|<>]/.test(registerdetails.password) ||
                    !/[a-zA-Z]/.test(registerdetails.password) ||
                    !/\d/.test(registerdetails.password)
                  }
                  loadingText="Submitting"
                  size="lg"
                  bg={"yellow.300"}
                  color={"white"}
                  _hover={{
                    bg: "yellow.500",
                  }}
                  onClick={handleSubmit}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"} onClick={() => router.push("/login")}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};
export default Registration;
