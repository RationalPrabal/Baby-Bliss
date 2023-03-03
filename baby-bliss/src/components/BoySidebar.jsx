import React from 'react'
import { Box,Select,option,Text,Checkbox,Button } from '@chakra-ui/react'
import MobileFilterBoys from './MobileFilterBoys'
const BoySidebar = ({OrderPrice,OrderDiscount,FilterPrice,FilterCategory}) => {
  const [show,setShow]= React.useState(false)
  return (
    <>
    <Box display={{base:"none",sm:"grid"}} position={"fixed"} top="20" w="20%" pl="10" py="5" overflow={"auto"} left="0"  h="90%" bg="white">
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
  
  FilterCategory("Jeans")
}
}
} colorScheme='red' >
    Pants/Jeans
  </Checkbox>
  
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("Sweatshirt")
}
}
} colorScheme='red' >
    Sweatshirts
  </Checkbox>
  <Checkbox onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("T-Shirt")
}
}
} colorScheme='red' >
T-Shirts
</Checkbox>
<Checkbox  onChange={(e)=>{if(e.target.checked){

FilterCategory("shirt")
}
}
} colorScheme='red' >
Shirts
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
  
  FilterCategory("pine")
}
}
} colorScheme='red' >
Pine Kids
  </Checkbox>
<Checkbox  onChange={(e)=>{if(e.target.checked){

FilterCategory("")
}
}
} colorScheme='red' >
All
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

{/* filter by sleeve */}

<Box display={"grid"}>
  <Text as="b" >Filter by Sleeve Length</Text>
  
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("half")
}
}
} colorScheme='red' >
   Half Length
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("Full")
}
}
} colorScheme='red' >
Full Sleeve
  </Checkbox>
<Checkbox  onChange={(e)=>{if(e.target.checked){

FilterCategory("")
}
}
} colorScheme='red' >
All
</Checkbox>
</Box>

{/* filter by style */}

<Box display={"grid"}>
  <Text as="b" >Filter by Style</Text>
  
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("polo")
}
}
} colorScheme='red' >
   Polo
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("hooded")
}
}
} colorScheme='red' >
Hooded
  </Checkbox>
<Checkbox  onChange={(e)=>{if(e.target.checked){

FilterCategory("")
}
}
} colorScheme='red' >
All
</Checkbox>
</Box>

{/* filter by pattern */}

<Box display={"grid"}>
  <Text as="b" >Filter by Pattern</Text>
  
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("striped")
}
}
} colorScheme='red' >
   Striped
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("pattern")
}
}
} colorScheme='red' >
Pattern
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("washed")
}
}
} colorScheme='red' >
   Washed
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("printed")
}
}
} colorScheme='red' >
Printed
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("solid")
}
}
} colorScheme='red' >
   Solid
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("patch")
}
}
} colorScheme='red' >
Patched
  </Checkbox>
  <Checkbox  onChange={(e)=>{if(e.target.checked){
  
  FilterCategory("checked")
}
}
} colorScheme='red' >
   Checked
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
    <Box display={{base:"grid",sm:"none"}} w="100%"  position={"fixed"} top="16"  zIndex="111">
    <Button  onClick={()=>setShow(!show)}>Use Filter and Sorting</Button>
    {
      show ? <MobileFilterBoys OrderPrice={OrderPrice} OrderDiscount={OrderDiscount} FilterPrice={FilterPrice}FilterCategory= {FilterCategory}/> : ""
    }
    </Box>
    </>
  
  )
}

export default BoySidebar