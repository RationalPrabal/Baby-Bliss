import React, { useState } from 'react'
import { FormControl, FormLabel, Input, Box, Button, Flex, HStack ,Text,InputLeftAddon, InputGroup, VStack} from '@chakra-ui/react'
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
    axios.post('http://localhost:4040/userDetails', formData)
      .then(res => {
        console.log(res)
        setData([...data, res.data])
        setIsSubmitted(true)
      })
      .catch(err => console.log(err))
  }

{/* //////////////////   hadle DETET FUNCTION ///////////////*/}

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4040/userDetails/${id}`)
      .then(res => {
        console.log(res)
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
        console.log(res)
        setEditId(null)
        setData(data.map(entry => (entry.id === editId ? res.data : entry)))
      })
      .catch(err => console.log(err))
  }

  return (
    <Box  >
      {!isSubmitted ? (
        <form onSubmit={handleAdd} >
          <FormControl mb={5}>
            <HStack spacing="25px">
            <Text mr={10}>Name</Text>
            <Input  variant='filled' placeholder='Enter Name' size='sm'  maxW={400} id="name" value={editId ? data[editId].name : formData.name}  onChange={e => setFormData({ ...formData, name: e.target.value })}  required/>
            </HStack>
          </FormControl>
          <FormControl mb={5}>

            <HStack spacing="20px">
            <Text mr={5} >HouseNo</Text>
            <Input variant='filled' placeholder='Enter House Number' size='sm' maxW={400} id="street" value={editId ? data[editId].street : formData.street}  onChange={e => setFormData({ ...formData, street: e.target.value })} required/>
            </HStack>
          </FormControl>

          <FormControl mb={5}>
          <HStack spacing={16}>
          <Text  >Street</Text>
            <Input variant='filled' placeholder='Enter Street Number' size='sm' maxW={400} id="houseNumber" value={editId ? data[editId].houseNumber : formData.houseNumber} onChange={e => setFormData({ ...formData, houseNumber: e.target.value })} required />
            </HStack>
          </FormControl>

          
          <FormControl mb={5}>
          <HStack spacing={12}>
            <Text >Pincode </Text>
            <Input  variant='filled' placeholder='Enter Pincode' size='sm' maxW={400} id="pincode" value={editId ? data[editId].pincode : formData.pincode} onChange={e => setFormData({ ...formData, pincode: e.target.value })} required/>
            </HStack>
          </FormControl>

          <FormControl mb={5}>
          <HStack spacing={20}>
            <Text>City </Text>
            <Input variant='filled' placeholder='Enter City' size='sm' maxW={400} id="city" value={editId ? data[editId].city : formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })}  required/>
            </HStack>
          </FormControl>

          <FormControl mb={5}>
          <HStack spacing={14}>
            <Text marginRight="12px" >State </Text>
            <Input  variant='filled' placeholder='Enter State' size='sm' maxW={400} id="state" value={editId ? data[editId].state : formData.state} onChange={e => setFormData({ ...formData, state: e.target.value })} required/>
            </HStack>
          </FormControl>

          <FormControl mb={5}>
          <HStack spacing={10}>
            <Text marginRight="5px">Country </Text>
            <Input  variant='filled' placeholder='Enter Country' size='sm' maxW={400} id="country" value={editId ? data[editId].country : formData.country} onChange={e => setFormData({ ...formData, country: e.target.value })}  required
            />
            </HStack>
          </FormControl>


          <FormControl mb={5}>
          <HStack gap={10}>
            <Text marginRight="-1px">Mobile </Text>
            <InputGroup>
            <InputLeftAddon  size='sm' children='+91'  height="40px"/>
            <Input variant='filled' placeholder='Enter Your Mobile Number' type='number' size='sm' height="40px" maxW={340} id="mobile" value={editId ? data[editId].mobile : formData.mobile} onChange={e => setFormData({ ...formData, mobile: e.target.value })} required
             />
            </InputGroup>
            </HStack>
          </FormControl>

          {/* <Button type='submit'>Submit</Button> */}
          <Button colorScheme='orange' variantColor="orange" mr={3} mt={5} type="submit">Save</Button>
        <Button mt={5} variant="outline" onClick={handleCancel}>Cancel</Button>
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
                
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input size='sm' variant='filled' maxW={400} id="name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
            
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="houseNumber">HouseNo</FormLabel>
              <Input  size='sm' maxW={400} id="houseNumber" value={formData.houseNumber} onChange={e => setFormData({ ...formData, houseNumber: e.target.value })}  />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="street">Street</FormLabel>
              <Input size='sm' maxW={400} id="street" value={formData.street} onChange={e => setFormData({ ...formData, street: e.target.value })} />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="pincode">Pincode</FormLabel>
              <Input  size='sm' maxW={400} id="pincode" value={formData.pincode} onChange={e => setFormData({ ...formData, pincode: e.target.value })}  />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="city">City</FormLabel>
              <Input  size='sm' maxW={400} id="city" value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })}  />
            </FormControl>
              
            <FormControl>
              <FormLabel htmlFor="state">State</FormLabel>
              <Input  size='sm' maxW={400} id="state" value={formData.state} onChange={e => setFormData({ ...formData, state: e.target.value })}  />
            </FormControl>

                
            <FormControl>
              <FormLabel htmlFor="country">Country</FormLabel>
              <Input  size='sm' maxW={400} id="country" value={formData.country} onChange={e => setFormData({ ...formData, country: e.target.value })}  />
            </FormControl>
            
            <FormControl>
              <FormLabel htmlFor="mobile">Mobile No</FormLabel>
              <Input  size='sm' maxW={400} id="mobile" type="number" value={formData.mobile} onChange={e => setFormData({ ...formData, mobile: e.target.value })}  />
            </FormControl>
          

            <Button onClick={() => handleUpdate(entry.id)}>Save</Button>
          </>
        ) : (

            
          <>
             <Text  fontSize='lg'  as='b'>{entry.name}</Text>
            <p>Street: {entry.street}</p>
            <p>House Number: {entry.houseNumber}</p>
            <p>Street: {entry.street}</p>
            <p>Pincode: {entry.pincode}</p>
            <p>State: {entry.state}</p>
            <p>Country: {entry.country}</p>
            <p>Mobile: {entry.mobile}</p>
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