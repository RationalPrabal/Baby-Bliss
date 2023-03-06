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
import { AiFillGoogleCircle } from 'react-icons/ai';
import logo from "./Image/logo.png"
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import {signInWithPopup, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth" 









const Registration = () => {
  
  // const [user,setuser]=useState({})
  const router = useRouter()
  const [registerdetails,setregisterdetails] =useState({})
  const toast=useToast()
  
   const [showPassword, setShowPassword] = useState(false);
//////////////////////// login with google ///////////////////
    const handleLogin = async () => {
      try {
        let data =  await signInWithPopup(auth,provider)
     let userdata = {name:data.user.displayName ,email:data.user.email,phone:data.user.phoneNumber,img:data.user.photoURL,id:data.user.uid,cart:[],wishlist:[],orders:0}
       await  axios.post("https://troubled-organized-denim.glitch.me/user",userdata).then((res)=>console.log(res)).catch(e => console.log(e))   
      
      } catch (error) {
        console.log(error)
      }

   
      // setuser({email:data.user.email,name:data.user.displayName ,phone:data.user.phoneNumber ,photoURL:data.user.photoURL})
    }    

const handleChange=(e)=>{
  const {name, value} = e.target;setregisterdetails({ ...registerdetails, [name] : value})
  console.log(registerdetails.user)
}

   const handleSubmit = async()=>{
    let res= await createUserWithEmailAndPassword(auth,registerdetails.email , registerdetails.password)
    console.log(res,"ressss")

     let userobj={
      id:res.user.uid,
      img:"",
      name:registerdetails.name,
      email:registerdetails.email,
      phone:registerdetails.phone,
      cart:[],
      wishlist:[],
      order:0
     }
 try { 
   let res=await fetch("https://troubled-organized-denim.glitch.me/user",
 { 
  method:"POST", 
   body:JSON.stringify(userobj), 
  headers:{"Content-Type": "application/json"}
} 

) 

       toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: "success",
          duration: 2000,
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
     let users = fetch("https://troubled-organized-denim.glitch.me/user")
       .then((res) => res.json())
       .then((res) => res)
       .catch((err) => console.log(err));
      users=users.then((res)=>res)
      // console.log(users)
    //   let obj = {}
    //  users.forEach((el)=>{
    //   obj[el.email]=el.email
    //  })
    //  console.log(obj)
   })



    return (
      <Flex
      color={"rgb(243,171,24)"} 
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.60', 'gray.800')}>
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
                    <Input type="text"  name="name" borderColor={"gray.600"} onChange={handleChange}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text"  name="Lname" borderColor={"gray.600"} onChange={handleChange}/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="phone" isRequired>
                <FormLabel>Phone No</FormLabel>
                <Input type="Phone"  borderColor={"gray.600"} name="phone" onChange={handleChange}/>
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email"  borderColor={"gray.600"} name="email" onChange={handleChange}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Text fontSize={10} color={"red"}>Password must be of atleast 8 characters and must contain atleast one alphabet, one number and one symbol</Text>
                <InputGroup>
                  <Input borderColor={"gray.600"} type={showPassword ? 'text' : 'password'}  name="password" onChange={handleChange} />
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
                isDisabled={registerdetails.password?.length<8||registerdetails.phone?.length<10||/[a-zA-Z]/.test(registerdetails.phone)||!/@/.test(registerdetails.email)||!/[!@#$%^&*(),.?":{}|<>]/.test(registerdetails.password)||!/[a-zA-Z]/.test(registerdetails.password)||!/\d/.test(registerdetails.password)}
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
              <Flex   justifyContent={"center"} >
              <Text  w={"20%"} color={"rgb(255,255,0)"}  >
               <AiFillGoogleCircle size={"60%"}/>
               </Text>
               <Text  onClick={handleLogin} w={"50%"} color={"blue.300"} >
               Sign with Google
               </Text>
              </Flex>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  export default Registration