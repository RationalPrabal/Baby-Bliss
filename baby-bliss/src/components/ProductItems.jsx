import React from 'react'
import Image from 'next/image'
import { Button, GridItem,Text,Box ,Badge,useToast} from '@chakra-ui/react';
import axios from 'axios';
import { CartContext } from '@/Context/CartContext';
import { useContext } from 'react';
import { AuthContext } from '@/Context/AuthContext';

const ProductItems = ({id,image,price,title,mrp,discount,lft}) => {
  const {cartCount,setCartCount}= useContext(CartContext);
  const {auth}= useContext(AuthContext)
  const [text,setText]= React.useState("Add To Cart")
  const [data,setData]= React.useState([])
  const toast=useToast()
  const AddToCart=async()=>{
    if(!auth){
toast({
  title: 'Please Login first',
      
          status: 'error',
          duration: 4000,
          isClosable: true,
})
    }
    else{
   await axios.post("https://troubled-organized-denim.glitch.me/cart",{
      id,img:image,price,mrp,discount,quantity:1,title
  }
  
  )
 //setText("Added")
  getCart()
  setCartCount(data.length)
}
  }

  const AddToWishlist=async()=>{
    await axios.post("https://troubled-organized-denim.glitch.me/wishlist",{
       id,img:image,price,mrp,discount,lft,title
   }
   
   )
  //setText("Added")
  
   }
  const getCart=async()=>{
  let res=  await axios.get("https://troubled-organized-denim.glitch.me/cart")
setData(res.data)
setCartCount(res.data.length)

  }
  //console.log(data)

  React.useEffect(()=>{
getCart()
setCartCount(data.length)


  },[])

  React.useEffect(()=>{
for(var i=0;i<data.length;i++){
  if(data[i].id==id){
    setText("Added")
  }
}
  },[getCart])
  

   
  
 
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
 <Button bg="#ff7043" _hover="" onClick={()=>AddToCart()}>{text}</Button>
}

    <Button mx="3" disabled={true} border={"1px solid tomato"} onClick={()=>AddToWishlist()}>WISHLIST</Button>
 
</Box>


        </GridItem>
    </Box>
  )
}

export default ProductItems