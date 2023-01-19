import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbaar from 'Component/Navbaar/Navbaar'
import NavbaarF from 'Component/Navbaar/NavbaarF'
import Footer from './footer'
export default function App({ Component, pageProps }) {
  return <ChakraProvider>
    <NavbaarF/>
    <Navbaar/>
    <Footer/>
<Component {...pageProps} />

  </ChakraProvider>
  
}
