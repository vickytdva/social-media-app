import "./friends.scss"
import { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Link } from "react-router-dom"

const Friends = () => {
  const [friends, setFriends] = useState([])

  const { data: friendsData, isLoading } = useQuery({
    queryKey: ["friends"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:8800/api/users")
      return res.data.filter(user => user.id !== 1) // Exclude current user
    }
  })

  useEffect(() => {
    if (friendsData) {
      setFriends(friendsData)
    }
  }, [friendsData])

  if (isLoading) return <div className="loading">Loading friends...</div>

  return (
    <div className="friends">
      <div className="container">
        <h1>My Friends</h1>
        <div className="friendsList">
          {friends.map(friend => (
            <div key={friend.id} className="friendCard">
              <div className="friendInfo">
                <img 
                  src={friend.profilePic ? `/upload/${friend.profilePic}` : "/upload/default.png"} 
                  alt={friend.name} 
                />
                <div className="friendDetails">
                  <h3>{friend.name}</h3>
                  <p className="city">{friend.city || "Location not set"}</p>
                  <p className="bio">{friend.website || "No bio available"}</p>
                </div>
              </div>
              <Link to={`/profile/${friend.id}`} className="viewProfile">
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Friends 