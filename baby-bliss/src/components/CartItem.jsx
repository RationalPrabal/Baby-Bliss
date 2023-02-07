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
import { WindowSharp } from "@mui/icons-material";

function CartItem({ img, title, desc, price, qty, id, discount}) {
    const [quantity, setQuantity] = useState(qty)
    
    const incQuantity =async (id) => {
      await  axios.put(`https://troubled-organized-denim.glitch.me/cart/${id}`, {
          img: img,
          title: title,
          desc: desc,
          price: price,
          quantity: quantity + 1,
          id: id ? id : null,
          discount: discount,
        });
        setQuantity(quantity + 1)
        setTimeout(refreshData, 1000)
    //  setReset(reset+1)
    }
    
    const decQuantity =async (id) => {
   await   axios.put(`https://troubled-organized-denim.glitch.me/cart/${id}`, {
        img: img,
        title: title,
        desc: desc,
        price: price,
        quantity: quantity - 1,
        id: id ? id : null,
        discount: discount,
      });
        setQuantity(quantity - 1);
        setTimeout(refreshData, 1000);
     // setReset(reset+1)
    };

    const deleteItem =async (id) => {
     await   axios.delete(`https://troubled-organized-denim.glitch.me/cart/${id}`);
        setTimeout(refreshData, 1000);
    //  setReset(reset+1)
    }

    const refreshData = () => {
        location.reload();
    }

  return (
    <Box>
      <Card
     
        direction={{ base: "column", sm: "row" }}
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
                onClick={() => decQuantity(id)}
                isDisabled={quantity === 1}>
                -
              </Button>
              <Text mx={2}>{quantity}</Text>
              <Button onClick={() => incQuantity(id)}>+</Button>
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
