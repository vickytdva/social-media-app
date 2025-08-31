import "./videos.scss"

const Videos = () => {
  return (
    <div className="videos">
      <div className="container">
        <h1>Videos</h1>
        
        <div className="noVideos">
          <div className="icon">��</div>
          <h2>No videos yet</h2>
          <p>Upload your first video to get started!</p>
          <button className="uploadVideoBtn">
            + Upload Video
          </button>
        </div>
      </div>
    </div>
  )
}

export default Videos
