import React from 'react'
import { Box,Select,option,Text ,Checkbox} from '@chakra-ui/react'
const Sidebar = ({OrderFun,FilterFun}) => {
  return (
    <Box position={"fixed"}>
      <Text as="b">Sort By Price</Text>
<Select onChange={(e)=>{
    if(e.target.value=="option1"){
        OrderFun("asc")
    }
    else OrderFun("desc")
}}>
  <option value='option1'>Low to High</option>
  <option value='option2'>High to Low</option>

</Select>

<Box display={"grid"}>
  <Text as="b" >Filter by Price</Text>
  <Checkbox onChange={(e)=>{if(e.target.checked){
  
      FilterFun(0,300)
    }
  }
  } colorScheme='red' >
    Less than ₹ 300
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterFun(300,500)
}
}
} colorScheme='red' >
    ₹ 300-₹ 500
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterFun(500,1000)
}
}
} colorScheme='red' >
    ₹ 500-₹ 1000
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterFun(1000,1500)
}
}
} colorScheme='red' >
    ₹ 1000-₹ 1500
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterFun(1500,100000)
}
}
} colorScheme='red' >
    ₹ 1500 and More
  </Checkbox>

</Box>
    </Box>
  )
}

export default Sidebar