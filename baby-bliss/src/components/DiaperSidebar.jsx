import React from 'react'
import { Box,Select,option,Text,Checkbox,Button } from '@chakra-ui/react'
import MobileFilterDiapering from './MobileFilterDiapering'
const DiaperSidebar = ({OrderPrice,OrderDiscount,FilterPrice,FilterCategory}) => {
   const [show,setShow]= React.useState(false)
  return (
    <>
    <Box display={{base:"none",sm:"grid"}} position={"fixed"} top="20" w="20%" pl="10" py="5" overflow={"auto"} left="0"  h="90%" bg="white" >

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
{/* filter by category */}
<Box display={"grid"}>
  <Text as="b" >Filter by Category</Text>
  
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("diaper")
}
}
} colorScheme='red' >
    Baby Diapers
  </Checkbox>
  
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("wipes")
}
}
} colorScheme='red' >
    Baby Wipes
  </Checkbox>
  <Checkbox onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("cream")
}
}
} colorScheme='red' >
Rash Creams
</Checkbox>
<Checkbox  onChange={(e)=>{if(e.target.checked){

FilterCategory("pants")
}
}
} colorScheme='red' >
Pants
</Checkbox>

<Checkbox  onChange={(e)=>{if(e.target.checked){

FilterCategory("")
}
}
} colorScheme='red' >
All
</Checkbox>
</Box>


{/* filter by size*/}

<Box display={"grid"}>
  <Text as="b" >Filter by Size</Text>
  
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("small")
}
}
} colorScheme='red' >
    Small
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("medium")
}
}
} colorScheme='red' >
    Medium
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("large")
}
}
} colorScheme='red' >
 Large
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("Extra Large")
}
}
} colorScheme='red' >
    Extra Large
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("XXL")
}
}
} colorScheme='red' >
    XX Large
  </Checkbox>
  <Checkbox onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("XXXL")
}
}
} colorScheme='red' >
XXX Large
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
  
  FilterCategory("huggies")
}
}
} colorScheme='red' >
Huggies
  </Checkbox>
  
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("mamy")
}
}
} colorScheme='red' >
    Mamy Poko
  </Checkbox>
  <Checkbox onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("pampers")
}
}
} colorScheme='red' >
Pampers
</Checkbox>

<Checkbox  onChange={(e)=>{if(e.target.checked){

FilterCategory("")
}
}
} colorScheme='red' >
All
</Checkbox>
</Box>


    </Box>
    <Box display={{base:"grid",sm:"none"}} w="100%" position={"fixed"}  top="16"  zIndex="111">
    <Button  onClick={()=>setShow(!show)}>Use Filter and Sorting</Button>
    {
      show ? <MobileFilterDiapering OrderPrice={OrderPrice} OrderDiscount={OrderDiscount} FilterPrice={FilterPrice}FilterCategory= {FilterCategory}/> : ""
    }
    </Box>
  </>
  )
}

export default DiaperSidebar