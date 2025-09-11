import { Heading, Text, Card, CardHeader, CardBody, Button } from "@chakra-ui/react"
import { events } from "../data/events"
import "../styles/StaffRecruit.css"  

export default function StaffRecruit() {
  return (
    <div className="staff-recruit">
      <Heading className="staff-heading">イベントスタッフ募集</Heading>
      {events.map((event) => (
        <Card key={event.id} className="staff-card">
          <CardHeader>
            <Heading size="md">{event.title}</Heading>
          </CardHeader>
          <CardBody>
            <Text>募集枠: ボランティアスタッフ募集中</Text>
            <Button mt={3} colorScheme="teal" size="sm">
              応募する
            </Button>
          </CardBody>
        </Card>
      ))}
    </div>
  )
}
