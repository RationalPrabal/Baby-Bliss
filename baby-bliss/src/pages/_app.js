import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbaar from 'Component/Navbaar/Navbaar'
export default function App({ Component, pageProps }) {
  return <ChakraProvider>
    <Navbaar/>
<Component {...pageProps} />

  </ChakraProvider>
  
}
