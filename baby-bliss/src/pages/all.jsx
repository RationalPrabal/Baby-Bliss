import axios from 'axios'
import React from 'react'
import Loader from "@/components/Loader"
import { CartContext } from '@/Context/CartContext';
import { useContext } from 'react';
import AllSidebar from '@/components/AllSidebar'
import { Grid,Box,Text, Img } from '@chakra-ui/react'

import ProductItems from '@/components/ProductItems'
const boys = ({initialData}) => {
  const [loader,setLoader]= React.useState(false)
  const [data,set_data]= React.useState(initialData)

  const {text}= useContext(CartContext);
// function for sort by price
 const OrderPrice=async(order)=>{
  setLoader(true)
let res =  await axios.get(`${process.env.NEXT_PUBLIC_baseURL}/all?_sort=price&_order=${order}`)

set_data(res.data)
setLoader(false)
 }
 const Search=async()=>{

  try{
    let res =  await axios.get(`${process.env.NEXT_PUBLIC_baseURL}/all?q=${text}`)
    set_data(res.data)
    
  }
  catch(err){
    console.log(err)
  }
 }

 React.useEffect(()=>{
   Search()
 },[text])

 // function for sort by discount
 const OrderDiscount=async(order)=>{
  setLoader(true)
  let res =  await axios.get(`${process.env.NEXT_PUBLIC_baseURL}/all?_sort=discount&_order=${order}`)

  set_data(res.data)
  setLoader(false)
   }



  // function for filtering by price
  const FilterPrice=async(lowerRange,higherRange)=>{
    setLoader(true)
    let res =  await axios.get(`${process.env.NEXT_PUBLIC_baseURL}/all?price_gte=${lowerRange}&price_lte=${higherRange}`)
  
    set_data(res.data)
    setLoader(false)
     }

     // function for filtering by category

     const FilterCategory=async(query)=>{
      setLoader(true)
      let res =  await axios.get(`${process.env.NEXT_PUBLIC_baseURL}/all?q=${query}`)

      set_data(res.data)
      setLoader(false)
       }
 
  return <Box display={{base:"grid",sm:"flex"}} w={{base:"100%",sm:"100%", md:"80%"}} m="auto">
    <Box w={{base:"30%", sm:"30%",md:"20%"}}>
      <AllSidebar OrderPrice={OrderPrice} OrderDiscount={OrderDiscount} FilterPrice={FilterPrice} FilterCategory={FilterCategory}/>
    </Box>
       { loader ?<Box w={{base:"100%",sm:"30%"}} m="auto" mt="50">
        <Img src="./loader.gif" w="100%"/>
       </Box> :   data?.length==0 ? <Box w="30%" m="auto">
       <Img src="./noItemsFound.png" w="100%"/>
      </Box>: <Box w={{base:"100%", sm:"70%",md:"80%"}} mt={{base:"40",sm:"20",md:"20"}}>
    <Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)'}} gap={{base:0,sm:2}} w={{base:"100%",sm:"100%",md:"100%"}}  m="auto" >
    {data.map((el,id)=> <ProductItems key={id} title={el.title} price={el.price} image={el.img} mrp={el.mrp} id={el.id} discount={el.discount} lft={el.lft} />)
}
        </Grid>
        </Box>
}
        </Box>
  
}

export default boys

export async function getServerSideProps(){
    let response = await axios.get(`${process.env.NEXT_PUBLIC_baseURL}/all`)
    return {
        props:{
        initialData: response.data
        }
      }
}