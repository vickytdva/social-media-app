import "./leftBar.scss"
import Friends from "../../assets/1.png"
import Gallery from "../../assets/2.png"
import Videos from '../../assets/3.png'
import Messages from '../../assets/4.png'
import Groups from '../../assets/6.png'
import Location from '../../assets/5.png'
import { AuthContext } from "../../context/authContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

const LeftBar = () => {
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    switch(item) {
      case 'friends':
        navigate('/friends');
        break;
      case 'messages':
        navigate('/messages');
        break;
      case 'groups':
        navigate('/groups');
        break;
      case 'gallery':
        navigate('/gallery');
        break;
      case 'videos':
        navigate('/videos');
        break;
      case 'location':
        navigate('/location');
        break;
      default:
        break;
    }
  };

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menue">
          <div className="user">
            <img src={currentUser.profilePic ? "/upload/" + currentUser.profilePic : "/upload/default.png"} alt=""/>
            <span>{currentUser.name}</span>
          </div>
          <div className="item" onClick={() => handleItemClick('friends')} style={{cursor: 'pointer'}}>
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item" onClick={() => handleItemClick('messages')} style={{cursor: 'pointer'}}>
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
          <div className="item" onClick={() => handleItemClick('groups')} style={{cursor: 'pointer'}}>
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item" onClick={() => handleItemClick('gallery')} style={{cursor: 'pointer'}}>
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item" onClick={() => handleItemClick('videos')} style={{cursor: 'pointer'}}>
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item" onClick={() => handleItemClick('location')} style={{cursor: 'pointer'}}>
            <img src={Location} alt="" />
            <span>Location</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar