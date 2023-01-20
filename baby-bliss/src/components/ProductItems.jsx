import React from 'react'
import Image from 'next/image'
import { Button, GridItem,Text,Box ,Badge} from '@chakra-ui/react';
import axios from 'axios';
const ProductItems = ({id,image,price,title,mrp,discount,lft}) => {
  const [text,setText]= React.useState("Add To Cart")
  const [data,setData]= React.useState([])
  const AddToCart=async()=>{
   await axios.post("http://localhost:8080/cart",{
      id,img:image,price,mrp,discount,lft,title
  }
  
  )
 //setText("Added")
  getCart()
  }

  const AddToWishlist=async()=>{
    await axios.post("http://localhost:8080/wishlist",{
       id,img:image,price,mrp,discount,lft,title
   }
   
   )
  //setText("Added")
  
   }
  const getCart=async()=>{
  let res=  await axios.get("http://localhost:8080/cart")
setData(res.data)


  }
  //console.log(data)

  React.useEffect(()=>{
getCart()



  },[])

  React.useEffect(()=>{
for(var i=0;i<data.length;i++){
  if(data[i].id==id){
    setText("Added")
  }
}
  },[getCart])
  

   
  
 
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


{
 text==="Added" ?  <Button isDisabled={true} bg="green" onClick={()=>AddToCart()} >Added</Button>: 
 <Button bg="red" _hover="" onClick={()=>AddToCart()}>{text}</Button>
}

    <Button mx="3" disabled={true} border={"1px solid tomato"} onClick={()=>AddToWishlist()}>WISHLIST</Button>
 
</Box>


        </GridItem>
    </Box>
  )
}

export default ProductItems