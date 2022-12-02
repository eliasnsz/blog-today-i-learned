import { ChakraProvider, Container } from "@chakra-ui/react"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider>
    <Header/>

    <Container maxW={"5xl"} px={8} my="32px">
      <Component {...pageProps} />      
    </Container>

    <Footer/>
  </ChakraProvider>
  )
}

export default MyApp
