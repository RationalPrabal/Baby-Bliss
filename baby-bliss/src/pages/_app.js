import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import CartContextProvider from '@/Context/CartContext'
import Navbaar from '@/components/Navbaar'
import Footer from "@/components/Footer"
export default function App({ Component, pageProps }) {
  return  (<CartContextProvider>
  <ChakraProvider>
<Navbaar/> 
<Component {...pageProps} />
<Footer/>
</ChakraProvider>
</CartContextProvider>
  )
}