import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

function CartOrderSummary({ total }) {
  return (
    <Card h={"max-content"}>
      <CardHeader>
        <Heading size="md">Order summary</Heading>
      </CardHeader>
      <CardBody>
        <Flex justifyContent={"space-between"}>
          <Text>Subtotal</Text>
          <Text>₹{total}</Text>
        </Flex>
        <Flex mt={3} justifyContent={"space-between"}>
          <Text>Tax</Text>
          <Text>{(total * 0.05).toFixed(2)}</Text>
        </Flex>
        <Flex mt={3} justifyContent={"space-between"}>
          <Text>Shipping</Text>
          <Text>FREE</Text>
        </Flex>
        <Flex mt={3} justifyContent={"space-between"}>
          <Text as={"b"}>GRAND TOTAL</Text>
          <Text>₹{(Number(total) + (total * 0.05)).toFixed(2)}</Text>
        </Flex>
      </CardBody>
      <CardFooter>
        <Button>PROCEED TO CHECKOUT</Button>
      </CardFooter>
    </Card>
  );
}

export default CartOrderSummary;