import { Link } from "react-router-dom"
import "../styles/Home.css"
import forestImage from "../assets/forest.jpg"

export default function Home() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${forestImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">地域コミュニティイベントへようこそ</h1>
        <p className="hero-subtitle">
          自然と人がつながる場所。気軽にイベントを見つけて参加しよう。
        </p>
        <Link to="/events">
          <button className="hero-button">イベントを探す</button>
        </Link>
      </div>
    </div>
  )
}