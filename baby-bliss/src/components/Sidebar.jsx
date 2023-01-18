import React from 'react'
import { Box,Select,option } from '@chakra-ui/react'
const Sidebar = ({order,setOrder}) => {
  return (
    <Box>
<Select onChange={(e)=>{
    if(e.target.value=="option1"){
        setOrder("asc")
    }
    else setOrder("des")
}} placeholder='Sort By Price'>
  <option value='option1'>Low to High</option>
  <option value='option2'>High to Low</option>

</Select>
    </Box>
  )
}

export default Sidebar