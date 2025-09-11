import { Link } from "react-router-dom"
import { Flex, Box, Button } from "@chakra-ui/react"

export default function Navbar() {
  return (
    <Flex as="nav" bg="teal.500" color="white" p={4} justify="space-between">
      <Box fontWeight="bold">地域イベントアプリ</Box>
      <Flex gap={4}>
        <Link to="/">
          <Button colorScheme="teal" variant="ghost">ホーム</Button>
        </Link>
        <Link to="/events">
          <Button colorScheme="teal" variant="ghost">イベント一覧</Button>
        </Link>
        <Link to="/staff">
          <Button colorScheme="teal" variant="ghost">イベントスタッフ募集</Button>
        </Link>
      </Flex>
    </Flex>
  )
}
