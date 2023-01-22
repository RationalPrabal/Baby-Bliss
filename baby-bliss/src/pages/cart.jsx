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
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import CartOrderSummary from "@/components/CartOrderSummary";
import CartItem from "@/components/CartItem";

function cart({ cartItems }) {

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
      <CartOrderSummary />
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
