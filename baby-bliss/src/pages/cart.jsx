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
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CartItem from "@/components/CartItem";

function cart({ cartItems }) {
    const [showPassword, setShowPassword] = useState(false);
    const [total, setTotal] = useState(0)
    const [step, setStep] = useState(1)

    useEffect(() => {
        let sum = 0
        cartItems.map((item) => {
            sum += item.price * item.quantity
        })
        setTotal(sum.toFixed(2))
        console.log(typeof total)
    }, [])
    
    if (step === 2) {
        return (
            <Grid
            gridTemplateColumns={"3fr 1fr"}
            gap={6}
            w={"80%"}
            m={"auto"}
            mt={4}>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? "text" : "password"} />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}>
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user? <Link href={"#"} color={"blue.400"}>Login</Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>

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
                  <Text>{(total * 0.05).toFixed(2)}</Text>
                </Flex>
                <Flex mt={3} justifyContent={"space-between"}>
                  <Text>Shipping</Text>
                  <Text>FREE</Text>
                </Flex>
                <Flex mt={3} justifyContent={"space-between"}>
                  <Text as={"b"}>GRAND TOTAL</Text>
                  <Text>₹{(Number(total) + total * 0.05).toFixed(2)}</Text>
                </Flex>
              </CardBody>
              <CardFooter>
                <Button onClick={() => setStep(2)}>PROCEED TO CHECKOUT</Button>
              </CardFooter>
            </Card>
          </Grid>
        );
    }

  return (
    <Grid gridTemplateColumns={"3fr 1fr"} gap={6} w={"80%"} m={"auto"} mt={4}>
      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab>Shopping Cart</Tab>
          <Tab>Wishlist</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {cartItems.length === 0 ? (
              <Flex
                flexDirection={"column"}
                m={"auto"}
                mt={6}
                w={"max-content"}
                textAlign={"center"}>
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
              cartItems.map((item) => {
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
            <p>Wishlist</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
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
            <Text>{(total * 0.05).toFixed(2)}</Text>
          </Flex>
          <Flex mt={3} justifyContent={"space-between"}>
            <Text>Shipping</Text>
            <Text>FREE</Text>
          </Flex>
          <Flex mt={3} justifyContent={"space-between"}>
            <Text as={"b"}>GRAND TOTAL</Text>
            <Text>₹{(Number(total) + total * 0.05).toFixed(2)}</Text>
          </Flex>
        </CardBody>
        <CardFooter>
          <Button onClick={()=>setStep(2)}>PROCEED TO CHECKOUT</Button>
        </CardFooter>
      </Card>
    </Grid>
  );
}

export default cart;

export async function getStaticProps() {
  let response = await axios.get("https://baby-bliss-backend.vercel.app/cart");
  return {
    props: {
      cartItems: response.data,
    },
  };
}
