import { Flex, Heading, Textarea, Input, FormControl, FormErrorMessage, Button  } from "@chakra-ui/react"
import axios from "axios"
import Link from "next/link"
import { useState } from "react"

export default function Publicar() {

  const [ title, setTitle ] = useState("")
  const [ body, setBody ] = useState("")
  const [ author, setAuthor ] = useState("")
  
  
  function handleSubmit() {
    const password = +prompt("Insira a senha de acesso:")
    if (password === 1245) {
      const post = {title, body, author}
    
      axios.post("../api/getPosts", post)
      window.location.href = "/"
    } else {
      alert("Senha incorreta!")
      window.location.href = "/"
    }
  }

  const handleInputChange = (e, func) => func(e.target.value)


  return(
    <div>
      <Flex direction="column" gap={5}>
        <Heading fontWeight="500">
          Nova publicação
        </Heading>
        <FormControl>
          <Input value={title} onChange={(event) => handleInputChange(event, setTitle)} placeholder='Titulo da publicação' />
        </FormControl>
        <FormControl>
          <Textarea value={body} onChange={(event) => handleInputChange(event, setBody)} rows="18" placeholder='Conteúdo da publicação' />
        </FormControl>
        <FormControl>
          <Input value={author} onChange={(event) => handleInputChange(event, setAuthor)} placeholder='Autor' />
        </FormControl>
        
        <Flex justify={"flex-end"} gap={1}>
          <Link href="/"><Button w={20} size="sm" colorScheme="gray">Cancelar</Button></Link>
          <Button onClick={handleSubmit} w={20} size="sm" colorScheme="green">Enviar</Button>
        </Flex>
      </Flex>
      
    </div>
  )
}