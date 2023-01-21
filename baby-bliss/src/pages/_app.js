import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import CartContextProvider from '@/Context/CartContext'
import Navbaar from '@/components/Navbaar'
import NavbaarF from 'Component/Navbaar/NavbaarF'
import Footer from './footer'
export default function App({ Component, pageProps }) {
  return  <CartContextProvider>
  <ChakraProvider>
    {/* <NavbaarF/>
    <Navbaar/>
 */}
  

    {/* <NavbaarF/> */}
   
    <Navbaar/>
    <Component {...pageProps} />
    </ChakraProvider>
    </CartContextProvider>
}
