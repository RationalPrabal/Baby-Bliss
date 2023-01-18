import React from 'react'
import { Box,Select,option } from '@chakra-ui/react'
const Sidebar = ({OrderFun}) => {
  return (
    <Box>
<Select onChange={(e)=>{
    if(e.target.value=="option1"){
        OrderFun("asc")
    }
    else OrderFun("desc")
}} placeholder='Sort By Price'>
  <option value='option1'>Low to High</option>
  <option value='option2'>High to Low</option>

</Select>
    </Box>
  )
}

export default Sidebar