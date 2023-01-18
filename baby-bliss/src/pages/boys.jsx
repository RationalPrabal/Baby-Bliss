import axios from 'axios'
import React from 'react'
import Sidebar from '@/components/Sidebar'
import { Grid,Box } from '@chakra-ui/react'
import ProductItems from '@/components/ProductItems'
const boys = ({T_shirts}) => {
  const [order,setOrder]= React.useState("asc")
  return (
    <Box display="flex" w={{base:"100%",sm:"100%", md:"80%"}} m="auto">
    <Box w={{base:"30%", sm:"30%",md:"20%"}}>
      <Sidebar order={order} setOrder={setOrder}/>
    </Box>
    <Box w={{base:"70%", sm:"70%",md:"80%"}}>
    <Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)'}} gap={{base:0,sm:2,md:6}} w={{base:"100%",sm:"100%",md:"100%"}}>
    {T_shirts.map((el)=> <ProductItems key={el.id} title={el.title} price={el.price} image={el.img} mrp={el.mrp} id={el.id} discount={el.discount} lft={el.lft} />)
}
        </Grid>
        </Box>
        </Box>
  )
}

export default boys

export async function getStaticProps(){
    let response = await axios.get("http://localhost:8080/boy-tshirts")
    return {
        props:{
        T_shirts: response.data
        }
      }
}