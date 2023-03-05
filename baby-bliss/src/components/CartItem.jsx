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
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";

import { CartContext } from '@/Context/CartContext';
import { useContext } from 'react';
function CartItem({ img, title, desc, price, qty, id, discount}) {
  const {user,getUserData}= useContext(CartContext)
  const [quantity, setQuantity] = useState(qty)
    
 const changeQuantity=async(id,change)=>{
  const newUserCart=user?.cart.map((el)=>{
   if(el.id==id){
 
    return {
      ...el,quantity:el.quantity+change
    }
   }
   else return el
 })
 
 console.log(newUserCart)
try{
 await axios.patch(`https://troubled-organized-denim.glitch.me/user/${user.id}`,{
  cart:newUserCart
 }
 )
 setQuantity(quantity+change)
 getUserData(user.id)
}
catch{

}
 }

    const deleteItem =async (id) => {

      const  newUserCart = user?.cart.filter((el)=>{
        return el.id!==id
     })
     try{
     await   axios.patch(`https://troubled-organized-denim.glitch.me/user/${user.id}`, {
  cart:newUserCart
     });
    getUserData(user.id)
    }
    catch{

    }
     
  
    }

   

  return (
    <Box>
      <Card
     
        direction={{ base: "column", sm: "column",md:"row"}}
        overflow="hidden"
        variant="outline">
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "100%" }}
          src={img}
          alt="Caffe Latte"
        />
        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>
            <Text py="2">{desc ? desc : null}</Text>
            <Text fontSize={"xl"} as={"b"} py="2">
              ₹{(price * quantity).toFixed(2)}
            </Text>
            <Flex mt={4} alignItems={"center"}>
              <Button
                onClick={() =>changeQuantity(id,-1)}
                isDisabled={quantity === 1}>
                -
              </Button>
              <Text mx={2}>{quantity}</Text>
              <Button onClick={() => changeQuantity(id,1)}>+</Button>
            </Flex>
          </CardBody>
          <CardFooter>
            <Button
                onClick={()=>deleteItem(id)}
              leftIcon={<BsTrash />}
              mr={6}
              variant="solid"
              colorScheme="blue">
              REMOVE
            </Button>
            <Button
              leftIcon={<AiOutlineHeart />}
              variant="solid"
              colorScheme="blue">
              MOVE TO WISHLIST
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
}

export default CartItem;
