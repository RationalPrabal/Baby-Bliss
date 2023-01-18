import React, { useState } from "react";
import { FormControl, FormLabel, Input, Radio, Button,Grid,GridItem,Box,Heading,Text,HStack, Stack, Flex } from "@chakra-ui/react";

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

      <Grid  templateColumns='repeat(2, 1fr)' width="90%" mt="200px" marginLeft="150px" gap={2}>

                      <GridItem  width="40%" h='10' bg='tomato' >
                              
                            SIDEBAR
                        
                      </GridItem>
              

      

           <GridItem width="70%" h='100%' bg='white'>
              
              
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


