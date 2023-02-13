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
    Image,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
  } from '@chakra-ui/react';
  import { useRouter } from 'next/router'
  

import { AuthContext } from '@/Context/AuthContext';
import { useContext } from 'react';
import { AiOutlineConsoleSql } from 'react-icons/ai';

  const Login = () => {
    const [email,setemail] =useState("")
    const [password,setpassword] =useState("")
const {auth,setAuth,setName}= useContext(AuthContext)
    const router = useRouter()

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
const toast=useToast()
  

 const signin=(e)=>{
e.preventDefault()

const LoginVal = data.filter((el)=>(

    el.email===email && el.password===password
    
))


if(LoginVal.length>0){
 
  setAuth(true)
  
  setName(LoginVal[0].user)
  toast({
    title: `Successfully Logged In`,
    status: "success",
    isClosable: true,
  });
  router.push("/boys")
}
else{
  toast({
    title: ` Please Fill Correct details`,
    status: "error",
    isClosable: true,
  });
}
console.log(LoginVal)
 }

 
 
useEffect(()=>{
    fetch('https://troubled-organized-denim.glitch.me/user')
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
          <Image src="https://i.postimg.cc/QxQdTXsg/Whats-App-Image-2023-01-17-at-10-32-51-PM.jpg" alt="..." width={150} height={100} />
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