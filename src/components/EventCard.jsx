import { useNavigate } from "react-router-dom"
import { Card, CardHeader, CardBody, Heading, Text, Button } from "@chakra-ui/react"

export default function EventCard({ event, category }) {
  const navigate = useNavigate()

  return (
    <Card>
      <CardHeader>
        <Heading size="md">{event.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>日付: {event.date}</Text>
        <Text>場所: {event.location}</Text>
        <Text>年齢制限: なし</Text>
        <Button
          mt={3}
          colorScheme="teal"
          onClick={() => navigate(`/events/${event.id}?category=${category}`)}
        >
          詳細を見る
        </Button>
      </CardBody>
    </Card>
  )
}
