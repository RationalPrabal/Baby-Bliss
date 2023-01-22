import axios from 'axios'
import React from 'react'
import BoySidebar from '@/components/BoySidebar'
import { Grid,Box } from '@chakra-ui/react'
import ProductItems from '@/components/ProductItems'
const boys = ({T_shirts}) => {
  const [shirts,set_shirts]= React.useState(T_shirts)
  
// function for sort by price
 const OrderPrice=async(order)=>{
let res =  await axios.get(`https://troubled-organized-denim.glitch.me/boys?_sort=price&_order=${order}`)
console.log(res.data)
set_shirts(res.data)
 }

 // function for sort by discount
 const OrderDiscount=async(order)=>{
  let res =  await axios.get(`https://troubled-organized-denim.glitch.me/boys?_sort=discount&_order=${order}`)
  console.log(res.data)
  set_shirts(res.data)
   }



  // function for filtering by price
  const FilterPrice=async(lowerRange,higherRange)=>{
    let res =  await axios.get(`https://troubled-organized-denim.glitch.me/boys?price_gte=${lowerRange}&price_lte=${higherRange}`)
    console.log(res.data)
    set_shirts(res.data)
     }

     // function for filtering by category

     const FilterCategory=async(query)=>{
      let res =  await axios.get(`https://troubled-organized-denim.glitch.me/boys?q=${query}`)
      console.log(res.data)
      set_shirts(res.data)
       }
 
  return (
    <Box display="flex" w={{base:"100%",sm:"100%", md:"80%"}} m="auto">
    <Box w={{base:"30%", sm:"30%",md:"20%"}}>
      <BoySidebar OrderPrice={OrderPrice} OrderDiscount={OrderDiscount} FilterPrice={FilterPrice} FilterCategory={FilterCategory}/>
    </Box>
    <Box w={{base:"70%", sm:"70%",md:"80%"}}>
    <Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)'}} gap={{base:0,sm:2,md:6}} w={{base:"100%",sm:"100%",md:"100%"}}>
    {shirts.map((el,id)=> <ProductItems key={id} title={el.title} price={el.price} image={el.img} mrp={el.mrp} id={el.id} discount={el.discount} lft={el.lft} />)
}
        </Grid>
        </Box>
        </Box>
  )
}

export default boys

export async function getStaticProps(){
    let response = await axios.get("https://troubled-organized-denim.glitch.me/boys")
    return {
        props:{
        T_shirts: response.data
        }
      }
}