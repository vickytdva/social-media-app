import LeftBar from "../leftBar/LeftBar"
import RightBar from "../rightBar/RightBar"
import NavBar from "../navbar/NavBar"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      <div className="layoutContainer">
        <LeftBar />
        <div className="mainContent">
          {children}
        </div>
        <RightBar />
      </div>
    </div>
  )
}

export default Layout 