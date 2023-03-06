import React, { useState } from 'react'
import { FormControl, FormLabel, Input, Box, Button, Flex, HStack ,Text,InputLeftAddon, InputGroup, VStack, Heading} from '@chakra-ui/react'
import axios from 'axios'

function UserInput() {
  const [formData, setFormData] = useState({ name:"", street:"", houseNumber:"" , pincode:"",city:"",state:"",country:"",mobile:""})
  const [editId, setEditId] = useState(null)
  const [data, setData] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)



  
  const handleCancel = () => {
    setFormData({ name:"", street:"", houseNumber:"" , pincode:"",city:"",state:"",country:"",mobile:""});
  };


  {/* //////////////////  ADD FUNCTION ///////////////*/}

  const handleAdd = (e) => {
    e.preventDefault();
    axios.post(`${process.env.NEXT_PUBLIC_baseURL}/userDetails`, formData)
      .then(res => {
  
        setData([...data, res.data])
        setIsSubmitted(true)
      })
      .catch(err => console.log(err))
  }

{/* //////////////////   hadle DETET FUNCTION ///////////////*/}

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4040/userDetails/${id}`)
      .then(res => {
      
        setData(data.filter(entry => entry.id !== id))
        setIsSubmitted(false)
        setFormData({name: "", street: "", houseNumber: "" })
      })
      .catch(err => console.log(err))
  }

{/* //////////////////   //////////////// ///////////////*/}
  const handleEdit = (id) => {
    setEditId(id)
    setFormData(data.find(entry => entry.id === id))
  }

  {/* //////////////////   EDIT UPADATE FUNCTION ///////////////*/}
const handleUpdate = (editId) => {
    axios.put(`http://localhost:4040/userDetails/${editId}`, formData)
      .then(res => {
      
        setEditId(null)
        setData(data.map(entry => (entry.id === editId ? res.data : entry)))
      })
      .catch(err => console.log(err))
  }

  return (

    
    <Box  >
<Heading  height={8} fontSize="lg" bg="grey" color="blackAlpha"> Parent Address</Heading>
 

      {!isSubmitted ? (
        <form ml={5}  onSubmit={handleAdd} >
          <FormControl mt={10} mb={5}>
            <HStack spacing="25px">
            <Text mr={10} color="grey" fontSize="18px">Name</Text>
            <Input color="grey"  variant='filled' placeholder='Enter Name' size='sm'  maxW={400} id="name" value={editId ? data[editId].name : formData.name}  onChange={e => setFormData({ ...formData, name: e.target.value })}  required/>
            </HStack>
          </FormControl>
          <FormControl mb={5}>

            <HStack spacing="20px">
            <Text mr={5} color="grey" fontSize="18px">HouseNo</Text>
            <Input color="grey" variant='filled' placeholder='Enter House Number' size='sm' maxW={400} id="street" value={editId ? data[editId].street : formData.street}  onChange={e => setFormData({ ...formData, street: e.target.value })} required/>
            </HStack>
          </FormControl>

          <FormControl mb={5}>
          <HStack spacing={16}>
          <Text color="grey" fontSize="18px" >Street</Text>
            <Input color="grey" variant='filled' placeholder='Enter Street Number' size='sm' maxW={400} id="houseNumber" value={editId ? data[editId].houseNumber : formData.houseNumber} onChange={e => setFormData({ ...formData, houseNumber: e.target.value })} required />
            </HStack>
          </FormControl>

          
          <FormControl mb={5}>
          <HStack spacing={12}>
            <Text color="grey" fontSize="18px" >Pincode </Text>
            <Input color="grey"   variant='filled' placeholder='Enter Pincode' size='sm' maxW={400} id="pincode" value={editId ? data[editId].pincode : formData.pincode} onChange={e => setFormData({ ...formData, pincode: e.target.value })} required/>
            </HStack>
          </FormControl>

          <FormControl mb={5}>
          <HStack spacing={20}>
            <Text color="grey" fontSize="18px">City </Text>
            <Input color="grey" variant='filled' placeholder='Enter City' size='sm' maxW={400} id="city" value={editId ? data[editId].city : formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })}  required/>
            </HStack>
          </FormControl>

          <FormControl mb={5}>
          <HStack spacing={14}>
            <Text color="grey" fontSize="18px" marginRight="12px" >State </Text>
            <Input color="grey"  variant='filled' placeholder='Enter State' size='sm' maxW={400} id="state" value={editId ? data[editId].state : formData.state} onChange={e => setFormData({ ...formData, state: e.target.value })} required/>
            </HStack>
          </FormControl>

          <FormControl mb={5}>
          <HStack spacing={10}>
            <Text color="grey" fontSize="18px" marginRight="5px">Country </Text>
            <Input color="grey"  variant='filled' placeholder='Enter Country' size='sm' maxW={400} id="country" value={editId ? data[editId].country : formData.country} onChange={e => setFormData({ ...formData, country: e.target.value })}  required
            />
            </HStack>
          </FormControl>


          <FormControl mb={5}>
          <HStack gap={10}>
            <Text color="grey" fontSize="18px" marginRight="-1px">Mobile </Text>
            <InputGroup>
            <InputLeftAddon color="grey"   size='sm' children='+91'  height="40px"/>
            <Input color="grey"  variant='filled' placeholder='Enter Your Mobile Number' type='number' size='sm' height="40px" maxW={340} id="mobile" value={editId ? data[editId].mobile : formData.mobile} onChange={e => setFormData({ ...formData, mobile: e.target.value })} required
             />
            </InputGroup>
            </HStack>
          </FormControl>

          {/* <Button type='submit'>Submit</Button> */}
          <Button colorScheme='orange' variantColor="orange" mr={3} mt={5} type="submit">Save</Button>
        <Button mt={5} colorScheme="blackAlpha" onClick={handleCancel}>Cancel</Button>
          </form>
      )
      :(
        <Box>
          {data.map(entry => (
    <Flex key={entry.id}>
      <Box>
        { editId === entry.id ? (
          <>


            <FormControl>
          
              <FormLabel htmlFor="name" fontSize="18px" color="grey">Name</FormLabel>
              <Input color="grey"  size='sm' variant='filled' maxW={400} id="name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
            
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="houseNumber" fontSize="18px" color="grey">HouseNo</FormLabel>
              <Input  color="grey" variant="filled" size='sm' maxW={400} id="houseNumber" value={formData.houseNumber} onChange={e => setFormData({ ...formData, houseNumber: e.target.value })}  />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="street" fontSize="18px" color="grey">Street</FormLabel>
              <Input color="grey" variant="filled" size='sm' maxW={400} id="street" value={formData.street} onChange={e => setFormData({ ...formData, street: e.target.value })} />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="pincode" fontSize="18px" color="grey">Pincode</FormLabel>
              <Input color="grey" variant="filled"  size='sm' maxW={400} id="pincode" value={formData.pincode} onChange={e => setFormData({ ...formData, pincode: e.target.value })}  />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="city" fontSize="18px" color="grey">City</FormLabel>
              <Input color="grey" variant="filled" size='sm' maxW={400} id="city" value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })}  />
            </FormControl>
              
            <FormControl>
              <FormLabel htmlFor="state" fontSize="18px" color="grey">State</FormLabel>
              <Input color="grey" variant="filled" size='sm' maxW={400} id="state" value={formData.state} onChange={e => setFormData({ ...formData, state: e.target.value })}  />
            </FormControl>

                
            <FormControl>
              <FormLabel htmlFor="country" fontSize="18px" color="grey">Country</FormLabel>
              <Input color="grey" variant="filled" size='sm' maxW={400} id="country" value={formData.country} onChange={e => setFormData({ ...formData, country: e.target.value })}  />
            </FormControl>
            
            <FormControl>
              <FormLabel htmlFor="mobile" fontSize="18px" color="grey">Mobile No</FormLabel>
              <Input color="grey" variant="filled"  size='sm' maxW={400} id="mobile" type="number" value={formData.mobile} onChange={e => setFormData({ ...formData, mobile: e.target.value })}  />
            </FormControl>
          

            <Button colorScheme='orange' variantColor="orange" onClick={() => handleUpdate(entry.id)}>Save</Button>
          </>
        ) : (

            
          <>
             <Text  fontSize='lg'  as='b' color="grey">{entry.name}</Text>

             <HStack>
             <Text  as='b' color="grey" >Street:</Text> 
             <Text  as='b' color="black" >{entry.street}</Text>
             </HStack>

             <HStack>
             <Text  as='b' color="grey" >House Number:</Text> 
             <Text  as='b' color="black" >{entry.houseNumber}</Text>
             </HStack>
            
             <HStack>
             <Text  as='b' color="grey" >Street:</Text> 
             <Text  as='b' color="black" > {entry.street}</Text>
             </HStack>
             
             <HStack>
             <Text  as='b' color="grey" >Pincode:</Text> 
             <Text  as='b' color="black" > {entry.pincode}</Text>
             </HStack>

             <HStack>
                <Text  as='b' color="grey" >State:</Text> 
                <Text  as='b' color="black" > {entry.state}</Text>
             </HStack>

             <HStack>
                <Text  as='b' color="grey" >Country: </Text> 
                <Text  as='b' color="black" > {entry.country}</Text>
             </HStack>
              
             <HStack>
                <Text  as='b' color="grey" >Mobile: </Text> 
                <Text  as='b' color="black" > {entry.mobile}</Text>
             </HStack>
          
          
          
            <Box mt={5}>

         <HStack spacing={5}>
              <Button colorScheme='orange' onClick={() => handleEdit(entry.id)}>Edit</Button>
               <Button colorScheme="blackAlpha" onClick={() => handleDelete(entry.id)}>Delete</Button>
         </HStack>
        </Box>
            
          </>
        )}
        
     
      </Box>
      
      

     </Flex>

           ))}

   </Box>

   )}
   
   
     </Box>

 )
         

}

export default UserInput;