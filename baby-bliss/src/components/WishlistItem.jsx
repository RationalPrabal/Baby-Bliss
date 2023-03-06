import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    useToast,
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
  function WishlistItem({ img, title, desc, price, id, discount}) {
    const {user,getUserData}= useContext(CartContext)
   const toast= useToast()
   
  
      const deleteItem =async (id) => {
  
        const  newUserWishlist = user?.wishlist.filter((el)=>{
          return el.id!==id
       })
       try{
       await   axios.patch(`${process.env.NEXT_PUBLIC_baseURL}/user/${user.id}`, {
    wishlist:newUserWishlist
       });
       toast({
        title: 'Item deleted from wishlist',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      getUserData(user.id)
      }
      catch{
        toast({
            title: 'Could not delete item from wishlist',
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
      }
       
    
      }
  
      const AddToCart=async(id)=>{

        //only the item
        const  newUserCart = user?.wishlist.filter((el)=>{
          return el.id==id
       })
       //without that item
       const  newUserWishlist = user?.wishlist.filter((el)=>{
        return el.id!==id
     })
       user.wishlist=newUserWishlist
       user?.cart?.push(newUserCart[0])
  
       try{
        await   axios.patch(`${process.env.NEXT_PUBLIC_baseURL}/user/${user.id}`, {
     cart:user.cart,
     wishlist:user.wishlist
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
              <Text fontSize={"xl"} as={"b"} py="2">
              ₹{price }   </Text>
           
            </CardBody>
            <CardFooter>
              <Button
                  onClick={()=>deleteItem(id)}
                leftIcon={<BsTrash />}
                mr={6}
                variant="solid"
                colorScheme="blue">
                Remove from Wishlist
              </Button>
              <Button
          onClick={()=>AddToCart(id)}
                leftIcon={<BsTrash />}
                mr={6}
                variant="solid"
                colorScheme="blue">
            Move to Cart
              </Button>
              
            </CardFooter>
          </Stack>
        </Card>
      </Box>
    );
  }
  
  export default WishlistItem;
  