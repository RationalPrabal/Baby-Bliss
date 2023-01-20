import React from 'react'
import Image from 'next/image'
import { Button, GridItem,Text,Box } from '@chakra-ui/react';
import axios from 'axios';
const ProductItems = ({id,image,price,title,mrp,discount,lft}) => {
  const AddToCart=async()=>{
   await axios.post("http://localhost:8080/cart",{
      id,img:image,price,mrp,discount,lft,title
  }
  )
  }
  return (
    <Box>
        <GridItem border={"2px solid red"} textAlign={"left"}>
<Image src={image} width="300"  height="250" margin="auto" alt="img" />

<Text mt="2" w="90%" fontFamily={"RobotoLR"} noOfLines={3}
fontSize={"15px"}
lineHeight={"12px"}
fontWeight={"400"}
>{title}</Text>

<Box display={"flex"} justifyContent={"space-between"} w="75%" mt="2">
<Text as="b"> ₹ {price}</Text>
<Text as="s"> ₹ {mrp}</Text>
<Text color={"red"}>{discount}</Text>
</Box>
<Text fontSize={12}>{lft}</Text>
<Box display={"flex"} mt="2">
    <Button _hover={""} bg={"red"} color="white" onClick={AddToCart}>ADD TO CART</Button>
    <Button mx="3" border={"1px solid tomato"}>WISHLIST</Button>
</Box>


        </GridItem>
    </Box>
  )
}

export default ProductItems