import React, { useEffect, useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  
  const Login = () => {
    const [email,setemail] =useState("")
    const [password,setpassword] =useState("")

const validate=()=>{
    let result = true;
    if(email===""|| email===null){
        result = false
        alert("Please enter email")
    }
    if(password===""|| password===null){
        result = false
        alert("Please enter password")
    }
}


const [data,setdata]= useState([])

 const signin=(e)=>{
e.preventDefault()

const LoginVal = data.filter((el)=>(

    el.email===email && el.password===password
    
))
if(LoginVal.length>0){
   alert("Logined")
}
else{
alert("Failed")
}
console.log(LoginVal)
 }

 
 
useEffect(()=>{
    fetch('https://baby-bliss-backend.vercel.app/user')
.then((response) => response.json())
.then((data) => setdata(data));

},[])

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email"  value={email} onChange={(e)=>setemail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"  value={password}onChange={(e)=>setpassword(e.target.value)}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={signin}
                  >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }


 
  
  
  export default Login