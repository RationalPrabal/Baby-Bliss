import {
  Flex,
  Grid,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  useColorModeValue,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { CheckCircleIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { CartContext } from "@/Context/CartContext";
import { useContext } from "react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CartItem from "@/components/CartItem";
import WishlistItem from "@/components/WishlistItem";
import Addresses from "@/components/Addresses";
import { AddressModal } from "@/components/Address.Modal";

function cart() {
  const { user } = useContext(CartContext);
  const [order, setOrder] = useState(false);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [step, setStep] = useState(1);
  const [fname, setfname] = useState("");
  const [add, setAdd] = useState("");
  const [app, setApp] = useState("");
  const [city, setCity] = useState("");
  const [num, setNum] = useState("");
  const [cartItems, setCartItems] = React.useState(user?.cart);
  const [wishItems, setWishItems] = React.useState(user?.wishlist);
  const nameError = fname === "";
  const addError = add === "";
  const appError = app === "";
  const cityError = city === "";
  const numError = num === "";
  const [show, setShow] = React.useState(false);

  const handleForm = () => {
    if (step === 2) {
      setStep(3);
    }
  };

  const confirmOrder = () => {
    setLoading(true);
    setTimeout(completeOrder, 5000);
  };

  const completeOrder = async () => {
    setLoading(false);
    setOrder(true);
    let deliveryAddress = user.addresses.filter((el) => el.id === address);

    let userCart = [...user.cart];

    let orderWithDeliveryAddress = userCart.map((el) => {
      el.address = deliveryAddress[0];
      return el;
    });
    let orders = [...user.orders, ...orderWithDeliveryAddress];
    let updatedUserData = { ...user, cart: [], orders };
    console.log(updatedUserData);
    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_baseURL}/user/${user.id}`,
        updatedUserData
      );
    } catch (err) {
      console.log(err);
    }
    setTimeout(redirect, 3000);
  };

  React.useEffect(() => {
    setCartItems(user?.cart);
  }, [user]);
  React.useEffect(() => {
    setWishItems(user?.wishlist);
  }, [user]);
  const redirect = () => {
    location.href = "/";
  };
  function validateField(value) {
    let error;
    if (!value) {
      error = "This field is required";
    }
    return error;
  }

  useEffect(() => {
    let sum = 0;
    cartItems?.map((item) => {
      sum += item.price * item.quantity;
    });
    setTotal(sum.toFixed(2));
  }, [cartItems]);

  if (order) {
    return (
      <Box mt={"100px"} textAlign="center" py={10} px={6}>
        <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Order placed successfully
        </Heading>
        <Text color={"gray.500"}>
          You will recieve an email with tracking information once your goods
          have shipped.
        </Text>
      </Box>
    );
  }

  if (step === 3) {
    return (
      <Grid
        gridTemplateColumns={{ base: "1 1fr", sm: "1 1fr", md: "3 1fr" }}
        gap={6}
        w={"80%"}
        m={"auto"}
        mt={"100px"}
      >
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box w={"100%"}>
                <FormControl id="name" isRequired>
                  <FormLabel>CARDHOLDER'S NAME</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired id="CVV">
                  <FormLabel>CVV</FormLabel>
                  <Input
                    type="number"
                    onInput={(e) =>
                      (e.target.value = e.target.value.slice(0, 3))
                    }
                  />
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box w={"100%"}>
                <FormControl id="email" isRequired>
                  <FormLabel>CARD NUMBER</FormLabel>
                  <Input
                    onInput={(e) =>
                      (e.target.value = e.target.value.slice(0, 16))
                    }
                    type="number"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="email" isRequired>
                  <FormLabel>EXPIRATION DATE</FormLabel>
                  <Flex alignItems={"center"}>
                    <Input
                      onInput={(e) =>
                        (e.target.value = e.target.value.slice(0, 2))
                      }
                      type="number"
                    />
                    <Text mx={2}>/</Text>
                    <Input
                      onInput={(e) =>
                        (e.target.value = e.target.value.slice(0, 2))
                      }
                      type="number"
                    />
                  </Flex>
                </FormControl>
              </Box>
            </HStack>

            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
                isLoading={loading === true}
                onClick={() => confirmOrder()}
                loadingText="PLEASE WAIT WHILE WE CONFIRM YOUR PAYMENT"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                className="bg-blue-500"
              >
                CONFIRM ORDER
              </Button>
            </Stack>
          </Stack>
        </Box>

        {cartItems.length > 0 ? (
          <Card h={"max-content"}>
            <CardHeader>
              <Heading size="md">Order summary</Heading>
            </CardHeader>
            <CardBody>
              <Flex justifyContent={"space-between"}>
                <Text>Subtotal</Text>
                <Text>₹{total}</Text>
              </Flex>
              <Flex mt={3} justifyContent={"space-between"}>
                <Text>Tax</Text>
                <Text>₹{(total * 0.05).toFixed(2)}</Text>
              </Flex>
              <Flex mt={3} justifyContent={"space-between"}>
                <Text>Shipping</Text>
                <Text color={"#00A300"}>FREE</Text>
              </Flex>
              <Flex mt={3} justifyContent={"space-between"}>
                <Text as={"b"}>GRAND TOTAL</Text>
                <Text>₹{(Number(total) + total * 0.05).toFixed(2)}</Text>
              </Flex>
            </CardBody>
            <CardFooter>
              <Button className="bg-red-500" onClick={() => setStep(2)}>
                GO BACK
              </Button>
            </CardFooter>
          </Card>
        ) : null}
      </Grid>
    );
  }

  if (step === 2) {
    return (
      <Grid
        gridTemplateColumns={{ base: "1 1fr", sm: "1 1fr", md: "3fr 1fr" }}
        gap={6}
        w={"80%"}
        className="w-[80%] sm:w-full"
        m={"auto"}
        mt={"100px"}
      >
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <fieldset>
            <legend>Select an address for delivery:</legend>
            <AddressModal />
            {user?.addresses.map((el) => {
              return (
                <div className="flex">
                  <input
                    type="radio"
                    id={el.id}
                    name="address"
                    value={el.id}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <label for={el.id}>
                    <Addresses address={el} />
                  </label>
                </div>
              );
            })}
          </fieldset>

          <button
            onClick={() => handleForm()}
            disabled={address === ""}
            className={` text-white font-bold p-4 rounded mt-8 ${
              address === "" ? "bg-blue-100" : "bg-blue-500"
            } ${address === "" ? "cursor-not-allowed" : "pointer"}  `}
          >
            PROCEED TO PAYMENT
          </button>
        </Box>

        {cartItems.length > 0 ? (
          <Card h={"max-content"}>
            <CardHeader>
              <Heading size="md">Order summary</Heading>
            </CardHeader>
            <CardBody>
              <Flex justifyContent={"space-between"}>
                <Text>Subtotal</Text>
                <Text>₹{total}</Text>
              </Flex>
              <Flex mt={3} justifyContent={"space-between"}>
                <Text>Tax</Text>
                <Text>₹{(total * 0.05).toFixed(2)}</Text>
              </Flex>
              <Flex mt={3} justifyContent={"space-between"}>
                <Text>Shipping</Text>
                <Text color={"#00A300"}>FREE</Text>
              </Flex>
              <Flex mt={3} justifyContent={"space-between"}>
                <Text as={"b"}>GRAND TOTAL</Text>
                <Text>₹{(Number(total) + total * 0.05).toFixed(2)}</Text>
              </Flex>
            </CardBody>
            <CardFooter>
              <Button className="bg-red-500" onClick={() => setStep(1)}>
                GO BACK
              </Button>
            </CardFooter>
          </Card>
        ) : null}
      </Grid>
    );
  }

  return (
    <Grid
      gridTemplateColumns={{ base: "1 1fr", sm: "1 1fr", md: "3 1fr" }}
      gap={6}
      w={"80%"}
      m={"auto"}
      mt={"100px"}
    >
      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab onClick={() => setShow(false)}>Shopping Cart</Tab>
          <Tab onClick={() => setShow(true)}>Wishlist</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {cartItems?.length === 0 ? (
              <Flex
                flexDirection={"column"}
                m={"auto"}
                mt={6}
                w={"max-content"}
                textAlign={"center"}
              >
                <Image
                  m={"auto"}
                  w={"320px"}
                  src="https://cdn.fcglcdn.com/brainbees/checkout/empty_cart.gif"
                />
                <Text fontSize={"xl"} as={"b"} mt={4}>
                  Your shopping cart is empty
                </Text>
                <Link href="/">Continue browsing</Link>
              </Flex>
            ) : (
              cartItems?.map((item) => {
                return (
                  <CartItem
                    mpr={item.mrp}
                    title={item.title}
                    price={item.price}
                    desc={item.desc ? item.desc : null}
                    qty={item.quantity}
                    img={item.img}
                    id={item.id}
                    discount={item.discount}
                  />
                );
              })
            )}
          </TabPanel>
          <TabPanel>
            {wishItems?.length == 0 ? (
              <Text>
                {" "}
                Nothing to show here, please add items in the wishlist
              </Text>
            ) : (
              wishItems?.map((item) => (
                <WishlistItem
                  mpr={item.mrp}
                  title={item.title}
                  price={item.price}
                  desc={item.desc ? item.desc : null}
                  img={item.img}
                  id={item.id}
                  discount={item.discount}
                />
              ))
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>

      {cartItems?.length > 0 && !show ? (
        <Card h={"max-content"}>
          <CardHeader>
            <Heading size="md">Order summary</Heading>
          </CardHeader>
          <CardBody>
            <Flex justifyContent={"space-between"}>
              <Text>Subtotal</Text>
              <Text>₹{total}</Text>
            </Flex>
            <Flex mt={3} justifyContent={"space-between"}>
              <Text>Tax</Text>
              <Text>₹{(total * 0.05).toFixed(2)}</Text>
            </Flex>
            <Flex mt={3} justifyContent={"space-between"}>
              <Text>Shipping</Text>
              <Text color={"#00A300"}>FREE</Text>
            </Flex>
            <Flex mt={3} justifyContent={"space-between"}>
              <Text as={"b"}>GRAND TOTAL</Text>
              <Text>₹{(Number(total) + total * 0.05).toFixed(2)}</Text>
            </Flex>
          </CardBody>
          <CardFooter>
            <button
              className="bg-blue-500 text-white font-bold p-4 rounded"
              onClick={() => setStep(2)}
            >
              PROCEED TO CHECKOUT
            </button>
          </CardFooter>
        </Card>
      ) : null}
    </Grid>
  );
}

export default cart;
