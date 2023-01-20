import { Box, Button, Divider, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const product = {
  img: "https://cdn.fcglcdn.com/brainbees/images/products/219x265/10443213a.jpg",
  desc: "3 to 18 Months, A great spout sipper bottle for your baby made from BPA...",
  price: "1010.88",
  mrp: "1296",
  discount: "(upto 23% Off)",
  title: "R for Rabbit Steebo Giffy Spout Cup Pink - 300 ml",
};

function singleProduct() {
  return (
      <Grid p={6} overflow={"hidden"} gridTemplateColumns={"35% 65%"} gap={10} margin={"auto"} mt={12} border={"1px solid black"} w={"85%"}>
          <GridItem>
              <Image w={"100%"} src={product.img} />
          </GridItem>
          <GridItem>
              <Text fontSize={"5xl"} as={"b"}>{product.title}</Text>
              <Text>{product.desc}</Text>
              <Divider my={4} mr={2} borderColor={"gray.300"} w={"90%"} />
              <Flex>
                  <Text mr={2} fontSize={"2xl"} as={"b"}>₹{product.price}</Text>
                  <Text mr={2} color={"rgba(117, 117, 117, 1)"} fontSize={"2xl"} as={"b"}>MRP: ₹{product.mrp}</Text>
                  <Text color={"rgba(255, 112, 67, 1)"} fontSize={"2xl"} as={"b"}>{product.discount}</Text>
              </Flex>
              <Flex>
                  
              </Flex>
                  <Flex mt={6}>
                      <Button size={"lg"} leftIcon={<AiOutlineShoppingCart />} mr={4}>ADD TO CART</Button>
                      <Button size={"lg"} leftIcon={<AiOutlineHeart />}>WISHLIST</Button>
                  </Flex>
          </GridItem>
    </Grid>
  )
}

export default singleProduct;