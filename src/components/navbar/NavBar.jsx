import "./navBar.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">MySocial</span>
        </Link>
      </div>
      <div className="right">
        {currentUser ? (
          <>
            <Link to={`/profile/${currentUser.id}`} style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
              <img
                src={currentUser.profilePic ? "/upload/" + currentUser.profilePic : "/upload/default.png"}
                alt="profile"
                style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover", marginRight: 8 }}
              />
              <span className="username">{currentUser.name}</span>
            </Link>
            <button className="logoutBtn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="loginBtn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
