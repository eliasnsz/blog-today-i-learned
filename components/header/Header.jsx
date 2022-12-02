import { Box, Text, Flex, List, ListItem } from "@chakra-ui/react"
import { EditIcon, ChatIcon } from '@chakra-ui/icons'
import Link from "next/link"

export default function Header() {

  return(
    <Box 
      bg="#292934"
      p={5}
    >

      <Flex align="center" justify="space-between">
        <Flex
          gap={2}
          align="center"
        >
          <Link href="/">
            <Flex align="center" gap={2}>
              <EditIcon
                role="group"
                _hover={{cursor: "pointer"}}
                boxSize={6}
                color="#fff"
              />
              <Text
                _hover={{cursor: "pointer"}}
                fontWeight="600"
                color="#fff"
                display={["none", "none", "block"]}
                fontSize="sm"
              >
                TIL Blog
              </Text>
            </Flex>
          </Link>
          <List
            color="#fff"
            fontWeight="600"
            fontSize="sm"
            display="flex"
            gap={3}
            ml={3}
          >
            <ListItem _hover={{ color: "gray.300", textDecor:"underline" }}>
              <Link href="/">Posts</Link>
            </ListItem>
            <ListItem  _hover={{ color: "gray.300", textDecor:"underline"}}>
              <Link href="/sobre">Sobre</Link>
            </ListItem>
          </List>
        </Flex>

        <Link href="/publicar">
          <ChatIcon
            _hover={{cursor: "pointer", color: "gray.300"}}
            boxSize={6}
            color="#fff"
          />
        </Link>
      </Flex>

    </Box>
  )
}