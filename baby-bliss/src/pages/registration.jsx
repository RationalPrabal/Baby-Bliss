import React from 'react'



import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    Image,
    useColorModeValue,
    Link,
    useToast,
  } from '@chakra-ui/react';

import logo from "./Image/logo.png"
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
  

  const Registration = () => {

    const router = useRouter()
   const [registerdetails,setregisterdetails] =useState({})
    const toast=useToast()
  
     const [showPassword, setShowPassword] = useState(false);

const handleChange=(e)=>{
  const {name, value} = e.target;setregisterdetails({ ...registerdetails, [name] : value})
}


   const handleSubmit = async()=>{
 try { 
   let res=await fetch("https://troubled-organized-denim.glitch.me/user",
 { 
  method:"POST", 
   body:JSON.stringify(registerdetails), 
  headers:{"Content-Type": "application/json"}
    }) 
     let datahai=await res.json() 
       console.log(datahai)
       toast({
        title: `Registered sucessfully`,
        status: "success",
        isClosable: true,
      });
    router.push("/login")
     }
       catch (error) {
   console.log("error", error.response.data);
 }


//  try {
//     const res = await axios.post("https://troubled-organized-denim.glitch.me/user",registerdetails)
//  }
//  catch (error) {
//    console.log(error.response.data);
// }

    console.log(registerdetails)

   }
   
   useEffect(()=>{
     let users = fetch("https://troubled-organized-denim.glitch.me/user")
       .then((res) => res.json())
       .then((res) => res)
       .catch((err) => console.log(err));
      users=users.then((res)=>res)
      console.log(users)
    //   let obj = {}
    //  users.forEach((el)=>{
    //   obj[el.email]=el.email
    //  })
    //  console.log(obj)
   })



    return (
      <Flex
      color="green"
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Image src="https://i.postimg.cc/QxQdTXsg/Whats-App-Image-2023-01-17-at-10-32-51-PM.jpg" alt="..." width={150} height={100} />
            <Heading fontSize={'4xl'} textAlign={'center'} >
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            <FormControl id="user" isRequired>
                <FormLabel>UserName</FormLabel>
                <Input type="user" name="user" onChange={handleChange}/>
              </FormControl>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text"  name="name" onChange={handleChange}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text"  name="Lname" onChange={handleChange}/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="phn" isRequired>
                <FormLabel>Phone No</FormLabel>
                <Input type="Phone"  name="phn" onChange={handleChange}/>
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email"  name="email" onChange={handleChange}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}  name="password" onChange={handleChange} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.200'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSubmit}
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  export default Registration