import { useState } from "react"
import { useLocation } from "react-router-dom"
import { Box, Heading, Select, SimpleGrid } from "@chakra-ui/react"
import { events } from "../data/events"
import EventCard from "../components/EventCard"

export default function EventList() {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const initialCategory = queryParams.get("category") || "すべて"

  const [category, setCategory] = useState(initialCategory)

  const filteredEvents =
    category === "すべて"
      ? events
      : events.filter((event) => event.category === category)

  return (
    <Box p={6}>
      <Heading mb={4}>イベント一覧</Heading>
      <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        mb={6}
      >
        <option value="すべて">すべて</option>
        <option value="祭り">祭り</option>
        <option value="自然体験">自然体験</option>
        <option value="季節行事">季節行事</option>
      </Select>

      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} category={category} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
