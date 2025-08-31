import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import LeftBar from "../../components/leftBar/LeftBar"
import RightBar from "../../components/rightBar/RightBar"
import NavBar from "../../components/navbar/NavBar"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="homeContainer">
        <LeftBar />
        <div className="feed">
          <Stories/>
          <Share/>
          <Posts/>
        </div>
        <RightBar />
      </div>
    </div>
  )
}

export default Home