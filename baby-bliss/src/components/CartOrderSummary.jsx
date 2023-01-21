import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react'

function CartOrderSummary({total}) {
  return (
    <Card>
      <CardHeader>
        <Heading size="md"> Order summary</Heading>
      </CardHeader>
      <CardBody>
        <Flex justifyContent={"space-between"}>
          <Text>Subtotal</Text>
          <Text>{total}</Text>
        </Flex>
        <Flex mt={3} justifyContent={"space-between"}>
          <Text>Shipping</Text>
          <Text>FREE</Text>
        </Flex>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
  );
}

export default CartOrderSummary