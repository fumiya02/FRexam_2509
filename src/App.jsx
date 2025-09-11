import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import EventList from "./pages/EventList"
import EventDetail from "./pages/EventDetail"
import StaffRecruit from "./pages/StaffRecruit"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <Router>
      <Navbar />   {/* ← 共通ナビゲーションを配置 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/staff" element={<StaffRecruit />} />
      </Routes>
    </Router>
  )
}

