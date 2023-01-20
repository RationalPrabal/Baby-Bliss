import React, { useState } from "react";
import { FormControl, FormLabel, Input, Radio, Button,Grid,GridItem,Box,Heading,Text,Spacer,Stack, Flex,Image, Container, VStack, HStack } from "@chakra-ui/react";

import UserInput from "../components/UserInput";


const Form = () => {
  const [formData, setFormData] = useState({
  
    name: "",
    dateOfBirth: "",
    gender: "",
    weight: "",
    height:""
  });

  const [allData, setAllData] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      id :  Math.random(),[e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setAllData([...allData, formData]);
    setFormData({ name: "", dateOfBirth: "", gender: "", weight: "" ,height:""});
  };

  const handleCancel = () => {
    setFormData({name: "", dateOfBirth: "", gender: "", weight: "",height:"" });
  };



  function handleDelete(id) {
    const removeItem = allData.filter((el) => {
      return el.id !== id;
    });
    setAllData(removeItem);
  }


  return (
    <>

      <Grid  templateColumns='repeat(2, 1fr)' width="90%" mt="200px" marginLeft="80px" gap={2}>

                      <GridItem  width="40%" height="100%" h='10' bg='white' >
                              
                        <Heading  height={8} fontSize="lg" bg="grey" color="blackAlpha">Account</Heading>
                        <Box mt={5}>

                          <Text  mb={2}>Order History</Text>
                          <Text  mb={2}>Manage Returns</Text>
                          <Text  mb={2}>Quick Reorder</Text>
                          <Text  mb={2}>Track Order</Text>
                          <Text  mb={2}>Your Queries</Text>
                          
                        </Box>

                        <Heading  mt={5} fontSize="lg" bg="grey" height={8} color="blackAlpha">Cash in My Account</Heading>
                        <Box mt={5}>

                          <Text  mb={2}>Club Cash</Text>
                          <Text mb={2}>Cash refund</Text>
                          <Text  mb={2}>My Payment Details</Text>
                          <Text  mb={2}>Cash Coupons</Text>
                          <Text mb={2}>Cashback Codes</Text>
                          <Text>My Refunds</Text>
                          
                        </Box>
                        
                      </GridItem>
              

      {/*  ///////////////////////////  Profile Details ////////////////////////////////////////// */}

     <GridItem width="70%" h='100%' bg='white'>

           <Heading  fontSize='lg' backgroundColor="grey">Profile</Heading> 
                 <Container marginBottom="40px" width="100%" >  
               
            <Flex gap={20} >   
               <Box marginTop="50px">
                    <Text  fontSize='lg'  as='b'>Yogesh Nishad</Text>
                    
                </Box>
                <Spacer />
                    <Box>

                        <Image width="100px" height="120px" 
                        src='https://static.vecteezy.com/system/resources/previews/002/002/427/non_2x/man-avatar-character-isolated-icon-free-vector.jpg'>

                        </Image>
                   </Box>
              </Flex> 
                 </Container>  

       {/*////////////////////////////   PENDING SIGNUP DATA FECTH HERE  //////////////////// */}
     {/* M///////////////////////////////////  My Conatct Details   ////////////////////////////////////////////////////////// */}

                 <Heading  height="30px" fontSize='lg'  backgroundColor="grey">My Contact</Heading> 
              <Flex justifyContent="space-between">
                 <Box marginTop="50px" >
                     <HStack marginBottom="20px">
                  
                          <Text fontSize='sm'  as='b'>Email:</Text>
                          <Text> yogiatoy27518@gmail.com</Text>
                  </HStack>

                     <HStack>

                          <Text fontSize='sm'  as='b'>Mobile No :
                         </Text><Text> 7999959808</Text>
                    </HStack>  

                  </Box>
                     
                     <Spacer/>
                <Box marginLeft="80px" marginTop="40px"  mb={10}>

                   <Text fontSize='sm'  as='b'>
                   Your Mobile Number is Verified
                   </Text>
                 
                 <HStack>
                   <Text > 
                    Your Mobile Number is VerifiedBy verifying your mobile number with us you can now Shop'n'Earn Club Cash at our FirstCry.com stores too! To earn Club Cash on store purchases,
                   simply provide your verified mobile number at the time of billing.
                   </Text>
                   </HStack>
                </Box>   
          </Flex>

                     {/*/////////////////////////////////////// Form Input ////////////////////////////// */}  

                     <UserInput/>  
                     <br/>
                     <br/>
              
             <form onSubmit={handleSubmit}>
                          <FormControl as='fieldset'>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input  size='sm' maxW="250px" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
                          </FormControl>
                          <FormControl>
                            <FormLabel htmlFor="dateOfBirth">Date of Birth</FormLabel>
                            <Input  size='sm' maxW="250px" type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required/>
                          </FormControl>
                          <FormControl>
                            <FormLabel>Gender</FormLabel>
                            <Radio value="Boy" id="Boy" name="gender" checked={formData.gender === "Boy"} onChange={handleChange} required>
                              Boy
                            </Radio>
                            <Radio value="Girl" id="Girl" name="gender" checked={formData.gender === "Girl"} onChange={handleChange} required>
                              Girl
                            </Radio>
                          
                          </FormControl>

                          <Flex gap={1}>
                          <FormControl>
                            <FormLabel htmlFor="age">Weight</FormLabel>
                            <Input size='sm' maxW={20} type="number" id="weight" name="weight" value={formData.age} onChange={handleChange} required/>
                          </FormControl>

                          <FormControl>
                            <FormLabel htmlFor="height">Height</FormLabel>
                            <Input size='sm' maxW={20} type="number" id="height" name="height" value={formData.height} onChange={handleChange} required/>
                          </FormControl>
                          </Flex>
                          <Button colorScheme='orange' variantColor="orange" mr={3} mt={5} type="submit">Save</Button>
                          <Button mt={5} variant="outline" onClick={handleCancel}>Cancel</Button>
                        </form>

                        <br />
                        <br />

        <Box maxW='420px' bg='white' p='6'>
                        
                    {allData.map((data, i) => (
                      
                    
          <Stack spacing={3} key={i}>
                      <Heading my='4' size='lg'>
                      {data.name}
                    </Heading>

                    <Flex gap={2}>
                    <Text>Date of Birth:</Text><Text as="b"> {data.dateOfBirth}</Text>
                    </Flex>

                    <Flex gap={2}>
                    <Text>Gender:</Text><Text as="b"> {data.gender}</Text>
                    </Flex>
                    
                    <Flex gap={2}>
                    <Text>Weight:</Text><Text as="b"> {data.weight}</Text>
                    </Flex>
                      
                    <Flex gap={2}>
                    <Text>Height:</Text><Text as="b"> {data.height}</Text>
                    </Flex>

                    
                    <Button onClick={()=>handleDelete(data.id)}>Delete</Button>

           </Stack>
  
         ))}
        </Box>
      </GridItem>
     </Grid>

      
    </>
  )

}

export default Form;


