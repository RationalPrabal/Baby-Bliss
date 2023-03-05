import React from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'


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
import {auth,provider} from "../components/firebase"
import logo from "./Image/logo.png"
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import {signInWithPopup} from "firebase/auth" 








  const Registration = () => {
const router=useRouter()
// const [user,setuser]=useState({})

    const handleLogin = async () => {


      try {
        let data =  await signInWithPopup(auth,provider)
     let userdata = {name:data.user.displayName ,email:data.user.email,phone:data.user.phoneNumber,img:data.user.photoURL,id:data.user.uid,cart:[],wishlist:[],orders:0}
       await  axios.post(`${process.env.NEXT_PUBLIC_NEXT_PUBLIC_baseURL}/user`,userdata).then(()=>
        router.push("/")
       ).catch(e =>{
        console.log(e.message)
     
       })   
       router.push("/")
      } catch (error) {
        console.log(error)
      
      }

   
     

    

    }    





   const [registerdetails,setregisterdetails] =useState({})
    const toast=useToast()
  
     const [showPassword, setShowPassword] = useState(false);

const handleChange=(e)=>{
  const {name, value} = e.target;setregisterdetails({ ...registerdetails, [name] : value})

}


   const handleSubmit = async()=>{
 try { 
   let res=await fetch(`${process.env.NEXT_PUBLIC_NEXT_PUBLIC_baseURL}/user`,
 { 
  method:"POST", 
   body:JSON.stringify(registerdetails), 
  headers:{"Content-Type": "application/json"}
} 

) 
let datahai=await res.json() 
      
       
       toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          variant: "solid",
          isClosable: true,
       
          position: "bottom-right",
        })
  

   
    
    router.push("/login")
     }
       catch (error) {
   console.log("can not create the account");
 }





   }
   
   useEffect(()=>{
     let users = fetch(`${process.env.NEXT_PUBLIC_NEXT_PUBLIC_baseURL}/user`)
       .then((res) => res.json())
       .then((res) => res)
       .catch((err) => console.log(err));
      users=users.then((res)=>res)
     
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
                <Text fontSize={10} color={"red"}>Password must be of atleast 8 characters and must contain atleast one alphabet, one number and one symbol</Text>
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
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Button type="email" onClick={handleLogin}>Sign with Google</Button>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                isDisabled={registerdetails.password?.length<8||registerdetails.phn?.length<10||/[a-zA-Z]/.test(registerdetails.phn)||!/@/.test(registerdetails.email)||!/[!@#$%^&*(),.?":{}|<>]/.test(registerdetails.password)||!/[a-zA-Z]/.test(registerdetails.password)||!/\d/.test(registerdetails.password)}
                  loadingText="Submitting"
                  size="lg"
                  bg={'yellow.300'}
                  color={'white'}
                  _hover={{
                    bg: 'yellow.500',
                  }}
                  onClick={handleSubmit}
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}
                onClick={()=>router.push("/login")}
                >
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