import React from 'react'
import Image from 'next/image'
import { Button, GridItem,Text,Box ,Badge,useToast} from '@chakra-ui/react';
import axios from 'axios';
import {auth} from "./firebase"
import 'firebase/auth';
import { CartContext } from '@/Context/CartContext';
import { AuthContext } from '@/Context/AuthContext';
import { useContext } from 'react';
const ProductItems = ({id,image,price,title,mrp,discount,lft}) => {
  const {user,getUserData}= useContext(CartContext);
  const {isAuth}=useContext(AuthContext)
  const [text,setText]= React.useState("Add To Cart")

  const toast=useToast()

  

  const AddToCart=async(id,image,price,title,mrp,discount)=>{
    
      if (isAuth) {
        
        user?.cart?.push({
          id,img:image,price,mrp,discount,quantity:1,title })
         
          try{
       let data=    await axios.patch(`${process.env.NEXT_PUBLIC_baseURL}/user/${user.id}`,{cart:user.cart})
    
           toast({
            title: 'Item added to cart',
                
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
          })
          getUserData(user.id)
          }
          catch{
            toast({
              title: 'can not add item to cart',
                  
                      status: 'error',
                      duration: 4000,
                      isClosable: true,
            })

          }

      }
      else {
     
        toast({
          title: 'Please Login first',
              
                  status: 'error',
                  duration: 4000,
                  isClosable: true,
        })
      
    };
    
  }

  const AddToWishlist=async()=>{
    if (isAuth) {
        
      user?.wishlist?.push({
        id,img:image,price,mrp,discount,title , quantity:1})
       
        try{
     let data=    await axios.patch(`${process.env.NEXT_PUBLIC_baseURL}/user/${user.id}`,{wishlist:user.wishlist})
    
         toast({
                   title: 'Item added to the wishlist',
                  status: 'success',
                  duration: 4000,
                  isClosable: true,
        })
        getUserData(user.id)
        }
        catch{
          toast({
            title: 'can not add item to the wishlist',
                
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
          })

        }

    }
    else {
   
      toast({
        title: 'Please Login first',
            
                status: 'error',
                duration: 4000,
                isClosable: true,
      })
    
  };
  
  
   }


  React.useEffect(()=>{
for(var i=0;i<user?.cart.length;i++){
  if(user?.cart[i].id==id){
    setText("Added")
  }
}
  },[])
  

   
  
 
  return (
    <Box mt="20" w="100%" m="auto">
        <GridItem textAlign={"left"} w="80%" m="auto" >
     
<Image src={image} width="300"  height="250" margin="auto" alt="img" placeholder="blur"
  blurDataURL="/assets/image-placeholder.png" />

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
<Box display={"flex"} mt="2" w="100%"  justifyContent={"space-between"}  zIndex="0">


{
 text==="Added" ?  <Button zIndex="0" isDisabled={true} bg="green" onClick={()=>AddToCart()} >Added To Cart</Button>: 
 <Button bg="#ff7043" _hover="" onClick={()=>AddToCart(id,image,price,title,mrp,discount)}>{text}</Button>
}

    <Button mx="3" disabled={true} border={"1px solid tomato"} onClick={()=>AddToWishlist(id,image,price,title,mrp,discount)}>WISHLIST</Button>
 
</Box>


        </GridItem>
    </Box>
  )
}

export default ProductItems