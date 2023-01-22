import React from 'react'
import Image from 'next/image'
import { Button, GridItem,Text,Box ,Badge} from '@chakra-ui/react';
import axios from 'axios';
import { CartContext } from '@/Context/CartContext';
import { useContext } from 'react';
const ProductItems = ({id,image,price,title,mrp,discount,lft}) => {
  const {cartCount,setCartCount}= useContext(CartContext);

  const [text,setText]= React.useState("Add To Cart")
  const [data,setData]= React.useState([])
  const AddToCart=async()=>{
   await axios.post("https://troubled-organized-denim.glitch.me/cart",{
      id,img:image,price,mrp,discount,quantity:1,title
  }
  
  )
 //setText("Added")
  getCart()
  setCartCount(data.length)
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
    <Box mt="20">
        <GridItem textAlign={"left"}>
     
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


{
 text==="Added" ?  <Button isDisabled={true} bg="green" onClick={()=>AddToCart()} >Added To Cart</Button>: 
 <Button bg="red" _hover="" onClick={()=>AddToCart()}>{text}</Button>
}

    <Button mx="3" disabled={true} border={"1px solid tomato"} onClick={()=>AddToWishlist()}>WISHLIST</Button>
 
</Box>


        </GridItem>
    </Box>
  )
}

export default ProductItems