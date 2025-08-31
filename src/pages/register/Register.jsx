import "./register.scss"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Register = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    email: "",   
    password: "",
    name: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/login"); // ако регистрацията е успешна -> към login
    } catch (err) {
      setErr(err.response?.data || err.message);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>MySocial</h1>
          <p>
            Welcome to MySocial!The social media for travelers,
            where they can share their experiences and find new friends!
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input 
              type="text" 
              placeholder="Username" 
              name="username" 
              onChange={handleChange} 
            />
            <input 
              type="email" 
              placeholder="email" 
              name="email" 
              onChange={handleChange} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              name="password" 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              placeholder="Name" 
              name="name" 
              onChange={handleChange} 
            />
            {err && <span style={{ color: "red" }}>{typeof err === "string" ? err : err?.message || "Registration failed"}</span>}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
