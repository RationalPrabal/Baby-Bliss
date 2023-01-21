import React from 'react'
import { Box,Select,option,Text,Checkbox } from '@chakra-ui/react'
const NurserySidebar = ({OrderPrice,OrderDiscount,FilterPrice,FilterCategory}) => {
  return (
    <Box >

        {/* sort by price */}
      <Text as="b">Sort By Price</Text>
<Select onChange={(e)=>{
    if(e.target.value=="option1"){
        OrderPrice("asc")
    }
    else OrderPrice("desc")
}} placeholder='Sort By Price'>
  <option value='option1'>Low to High</option>
  <option value='option2'>High to Low</option>

</Select>

{/* sort by discount */}
<Text as="b">Sort By Discount</Text>
<Select onChange={(e)=>{
    if(e.target.value=="option1"){
        OrderDiscount("asc")
    }
    else OrderDiscount("desc")
}} placeholder='Sort By Discount'>
  <option value='option1'>Low to High</option>
  <option value='option2'>High to Low</option>

</Select>

{/* filter by price */}
<Box display={"grid"}>
  <Text as="b" >Filter by Price</Text>
  <Checkbox onChange={(e)=>{if(e.target.checked){
  
      FilterPrice(0,300)
    }
  }
  } colorScheme='red' >
    Less than ₹ 300
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterPrice(300,500)
}
}
} colorScheme='red' >
    ₹ 300-₹ 500
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterPrice(500,1000)
}
}
} colorScheme='red' >
    ₹ 500-₹ 1000
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterPrice(1000,1500)
}
}
} colorScheme='red' >
    ₹ 1000-₹ 1500
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterPrice(1500,100000)
}
}
} colorScheme='red' >
    ₹ 1500 and More
  </Checkbox>

</Box>


{/* filter by color */}

<Box display={"grid"}>
  <Text as="b" >Filter by Color</Text>
  
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("Navy")
}
}
} colorScheme='red' >
    Navy
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("black")
}
}
} colorScheme='red' >
    Black
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("brown")
}
}
} colorScheme='red' >
 Brown
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("grey")
}
}
} colorScheme='red' >
    Grey
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("White")
}
}
} colorScheme='red' >
    White
  </Checkbox>
  <Checkbox onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("red")
}
}
} colorScheme='red' >
Red
</Checkbox>

<Checkbox  onChange={(e)=>{if(e.target.checked){

FilterCategory("orange")
}
}
} colorScheme='red' >
    Orange
</Checkbox>
<Checkbox  onChange={(e)=>{if(e.target.checked){

FilterCategory("yellow")
}
}
} colorScheme='red' >
    Yellow
</Checkbox>

<Checkbox  onChange={(e)=>{if(e.target.checked){

FilterCategory("multi")
}
}
} colorScheme='red' >
    Multi Color
</Checkbox>
<Checkbox  onChange={(e)=>{if(e.target.checked){

FilterCategory("")
}
}
} colorScheme='red' >
    All
</Checkbox>
</Box>

{/* filter by brand */}


<Box display={"grid"}>
  <Text as="b" >Filter by Brand</Text>
  
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("babyhug")
}
}
} colorScheme='red' >
Babyhug
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("bee")
}
}
} colorScheme='red' >
BabyBee
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("donn")
}
}
} colorScheme='red' >
Brandonn
  </Checkbox>
  
  
</Box>


    </Box>
  
  )
}

export default NurserySidebar