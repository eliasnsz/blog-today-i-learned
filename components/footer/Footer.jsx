import { Divider, Box, Text, Flex } from "@chakra-ui/react"

export default function Footer() {

  return(
    <Box color="gray.500" fontSize={13} maxW="3xl" textAlign="center" pb={4} m="auto">
      <Divider borderColor="#00000032" mb={4} mt={32}/>
      <Text mb={2}>Criado por Elias Souza</Text>
      <Flex gap={10} justify="center">
        <Text 
          as={"a"} 
          href="https://github.com/eliasnsz" 
          target="_blank" 
          color={"blue.500"} 
          _hover={{textDecor: "underline"}}
        >
          Github
        </Text>
        <Text 
          as={"a"} 
          href="https://eliasnsz.com.br"
          target="_blank" 
          color={"blue.500"} 
          _hover={{textDecor: "underline"}}
        >
          Portfólio
        </Text>
        <Text 
          as={"a"} 
          href="https://www.linkedin.com/in/elias-souza-522a95242/" 
          target="_blank" 
          color={"blue.500"} 
          _hover={{textDecor: "underline"}}
        >
          Linkedin
        </Text>
        <Text 
          as={"a"} 
          href="https://api.whatsapp.com/send?phone=5519971495393" 
          target="_blank" 
          color={"blue.500"} 
          _hover={{textDecor: "underline"}}
        >
          Contato
        </Text>
      </Flex>
    </Box>
  )
}