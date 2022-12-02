import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Heading, Text, Flex, Divider, Tag } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../../components/header/Header";
import useFetch from "../../hooks/useFetch";

export default function Post() {
  
  const { data: posts, isFetching } = useFetch('../api/getPosts')
  const router = useRouter()
  const uuid = router.query.uuid
  const thisPost = !isFetching && (posts.find(post => post._id === uuid))
  
  function handleDelete() {
    const password = +prompt("Insira a senha de acesso:")

    if (password === 1245) {
      axios.delete("../api/getPosts", { data: { uuid } })
    } else {
      alert("Senha incorreta!")
    }
    window.location.href = "/"
  }

  const formattedData = date => {
    const currentDate = new Date()
    const postDate = new Date(date)

    const dateDiffInMs = currentDate - postDate
    const daysDiff = +(dateDiffInMs / (1000 * 60 * 60 * 24)).toFixed()
    const hoursDiff = +(dateDiffInMs / (1000 * 60 * 60 )).toFixed()
    const minutesDiff = +(dateDiffInMs / (1000 * 60)).toFixed()
    const secondsDiff = +(dateDiffInMs / (1000)).toFixed()

    if (daysDiff > 0) {
      const message = daysDiff === 1 ? " dia atrás" : " dias atrás"
      return daysDiff + message
    }
    if (hoursDiff > 0) {
      const message = hoursDiff === 1 ? " hora atrás" : " horas atrás"
      return hoursDiff + message
    }
    if (minutesDiff > 0) {
      const message = minutesDiff === 1 ? " minuto atrás" : " minutos atrás"
      return minutesDiff + message
    }
    const message = secondsDiff === 1 ? " segundo atrás" : " segundos atrás"
    return secondsDiff + message
  }

  return(
    <div>
      <Box borderLeft={"1px solid #00000032"} maxW={"5xl"} px={4} my="32px">
          <Flex align="center" my={1}>
            <Tag colorScheme="blue" size="sm" color="blue.500">{thisPost.author || "Anônimo"}</Tag>
            <Text mx={3} fontSize={12} display={"inline"}>
              {formattedData(thisPost.date)}
            </Text>
          </Flex>
        
        <Flex align="center" justify='space-between'>
          <Heading fontWeight={500}>{thisPost.title}</Heading>
          <DeleteIcon onClick={handleDelete} color="gray.400" _hover={{color: "black", cursor: "pointer"}} />
        </Flex>
        <Divider borderColor="#00000032" my="10px"/>
        <Text>
          {thisPost.body}`
        </Text>
      </Box>
    </div>
  )
}