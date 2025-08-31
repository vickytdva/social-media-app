import "./location.scss"

const Location = () => {
  return (
    <div className="location">
      <div className="container">
        <h1>Location</h1>
        
        <div className="noLocations">
          <div className="icon">��</div>
          <h2>No new locations</h2>
          <p>Check in to share where you are!</p>
          <button className="checkInBtn">
            + Check In
          </button>
        </div>
      </div>
    </div>
  )
}

export default Location
