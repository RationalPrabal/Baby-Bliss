import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React from "react";

const temp = {
  img: "https://cdn.fcglcdn.com/brainbees/images/products/219x265/12214478a.jpg",
  desc: "0 Months+, product dimensions L 24 x W 4.50 cm, durable, easy to attach.",
  price: "739.03",
  mrp: "1999",
  discount: "(63% Off)",
  title: "Little Story Premium Stroller Hooks Pack of 2 - Yellow",
};

function cart({ cartItems }) {
  return (
    <Tabs w={"80%"} m={"auto"} mt={4} size="md" variant="enclosed">
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
            <Box>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline">
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={temp.img}
                  alt="Caffe Latte"
                />

                <Stack>
                  <CardBody>
                    <Heading size="md">{temp.title}</Heading>

                    <Text py="2">{temp.desc ? temp.desc : null}</Text>
                  </CardBody>

                  <CardFooter>
                    <Button mr={6} variant="solid" colorScheme="blue">
                      REMOVE
                    </Button>
                    <Button variant="solid" colorScheme="blue">
                      ADD TO WISHLIST
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </Box>
          )}
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
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
