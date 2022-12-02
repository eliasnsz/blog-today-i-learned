import { OrderedList, ListItem, Text, Skeleton, Stack, Center  } from "@chakra-ui/react"
import Link from "next/link";
import useFetch from "../../hooks/useFetch";

export default function Posts() {

  const { data: posts, isFetching } = useFetch('api/getPosts')

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
      <OrderedList 
        display="flex" 
        flexDir="column" 
        gap={2}
        fontWeight={600}
        fontSize={16}
      >

      {!isFetching && !posts.length && <Center mt="60px" color={"gray"}> Nenhuma publicação encontrada!.</Center>}

      {!isFetching && posts.slice().reverse().map(post => {
        return (
          
            <ListItem key={post._id}>
              <Link href={`/post/${post._id}`}>
                <Text
                  _hover={{
                    textDecoration: "underline"
                  }} 
                >{post.title}</Text>
              </Link>
              <Text
                color="gray.500"
                fontWeight="400"
                fontSize={12}
                letterSpacing={0.3}
              >
                { (post.author || "Anônimo") + " · " + formattedData(post.date)}
              </Text>
            </ListItem>
          
          )
        })}
        
      </OrderedList>
    </div>  
  )
}