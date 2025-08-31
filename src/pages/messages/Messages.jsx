import "./messages.scss"
import { useState } from "react"

const Messages = () => {
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim()) {
      setChatHistory(prev => [...prev, { 
        id: Date.now(), 
        text: message, 
        sender: "You", 
        time: new Date().toLocaleTimeString() 
      }])
      setMessage("")
    }
  }

  return (
    <div className="messages">
      <div className="container">
        <h1>Messages</h1>
        
        {chatHistory.length === 0 ? (
          <div className="noMessages">
            <div className="icon">💬</div>
            <h2>No messages yet</h2>
            <p>Start chatting with your friends!</p>
          </div>
        ) : (
          <div className="chatContainer">
            <div className="chatHistory">
              {chatHistory.map(msg => (
                <div key={msg.id} className={`message ${msg.sender === "You" ? "sent" : "received"}`}>
                  <div className="messageContent">
                    <p>{msg.text}</p>
                    <span className="time">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <form onSubmit={handleSendMessage} className="messageForm">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Messages