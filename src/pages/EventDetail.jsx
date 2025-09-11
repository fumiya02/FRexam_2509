import { useParams, useNavigate, useLocation } from "react-router-dom"
import { Box, Heading, Text, Button } from "@chakra-ui/react"
import { events } from "../data/events"
import "../styles/EventDetail.css"

export default function EventDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const category = queryParams.get("category") || "すべて"

  const event = events.find((e) => e.id.toString() === id)

  if (!event) {
    return (
      <Box className="event-detail">
        <div className="event-overlay"></div>
        <div className="event-content">
          <Heading>イベントが見つかりません</Heading>
        </div>
        <Button
          className="back-button"
          colorScheme="teal"
          onClick={() => navigate(`/events?category=${category}`)}
        >
          一覧に戻る
        </Button>
      </Box>
    )
  }

  return (
    <Box
      className="event-detail"
      style={{ backgroundImage: `url(${event.background})` }}
    >
      {/* 背景オーバーレイ */}
      <div className="event-overlay"></div>

      {/* コンテンツ */}
      <div className="event-content">
        <Heading mb={4}>{event.title}</Heading>
        <Text mb={2}>日付: {event.date}</Text>
        <Text mb={2}>場所: {event.location}</Text>
        <Text mb={6}>{event.description}</Text>
      </div>

      {/* 下部固定ボタン */}
      <Button
        className="back-button"
        colorScheme="teal"
        onClick={() => navigate(`/events?category=${category}`)}
      >
        一覧に戻る
      </Button>
    </Box>
  )
}
