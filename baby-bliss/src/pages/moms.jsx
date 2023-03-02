import axios from 'axios'
import React from 'react'
import MomSidebar from '@/components/MomSidebar'
import { Grid,Box ,Img} from '@chakra-ui/react'
import ProductItems from '@/components/ProductItems'
const boys = ({initialData}) => {
  const [data,set_data]= React.useState(initialData)
  const [loader,setLoader]= React.useState(false)
// function for sort by price
 const OrderPrice=async(order)=>{
  setLoader(true)
let res =  await axios.get(`https://troubled-organized-denim.glitch.me/moms?_sort=price&_order=${order}`)
console.log(res.data)
set_data(res.data)
setLoader(false)
 }

 // function for sort by discount
 const OrderDiscount=async(order)=>{
  setLoader(true)
  let res =  await axios.get(`https://troubled-organized-denim.glitch.me/moms?_sort=discount&_order=${order}`)
  console.log(res.data)
  set_data(res.data)
  setLoader(false)
   }



  // function for filtering by price
  const FilterPrice=async(lowerRange,higherRange)=>{
    setLoader(true)
    let res =  await axios.get(`https://troubled-organized-denim.glitch.me/moms?price_gte=${lowerRange}&price_lte=${higherRange}`)
    console.log(res.data)
    set_data(res.data)
    setLoader(false)
     }

     // function for filtering by category

     const FilterCategory=async(query)=>{
      setLoader(true)
      let res =  await axios.get(`https://troubled-organized-denim.glitch.me/moms?q=${query}`)
      console.log(res.data)
      set_data(res.data)
      setLoader(false)
       }
 
  return (
    <Box display="flex" w={{base:"100%",sm:"100%", md:"80%"}} m="auto">
    <Box w={{base:"30%", sm:"30%",md:"20%"}}>
      <MomSidebar OrderPrice={OrderPrice} OrderDiscount={OrderDiscount} FilterPrice={FilterPrice} FilterCategory={FilterCategory}/>
    </Box>
    { loader ?<Box w="30%" m="auto">
        <Img src="./loader.gif" w="100%"/>
       </Box> :
    <Box w={{base:"70%", sm:"70%",md:"80%"}}>
    <Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)'}} gap={{base:0,sm:2,md:6}} w={{base:"100%",sm:"100%",md:"100%"}}>
    {data.map((el,id)=> <ProductItems key={id} title={el.title} price={+el.price} image={el.img} mrp={el.mrp}  discount={el.discount}  />)
}
        </Grid>
        </Box>
}
        </Box>
  )
}

export default boys

export async function getStaticProps(){
    let response = await axios.get("https://troubled-organized-denim.glitch.me/moms")
    return {
        props:{
        initialData: response.data
        }
      }
}