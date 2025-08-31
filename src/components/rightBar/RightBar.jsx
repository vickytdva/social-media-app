import "./rightBar.scss"

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://img.hotimg.com/b7a424fa178ea03e67e7398d1d36eebb.jpeg" alt="" />
              <span>Alexander Porter</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://img.hotimg.com/167ae4065bd58e4aaf3f9776a1e74db5.jpeg" alt="" />
              <span>Peter Lee</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://img.hotimg.com/b7a424fa178ea03e67e7398d1d36eebb.jpeg" alt="" />
              <p>
               <span>James Smith</span>
                Posted new photo
              </p>
            </div>
            <span>1 min ago</span>
          </div>
         <div className="user">
            <div className="userInfo">
              <img src="https://img.hotimg.com/167ae4065bd58e4aaf3f9776a1e74db5.jpeg" alt="" />
              <p>
               <span>John Sparrow</span>
                Posted new photo
              </p>
            </div>
            <span>10 min ago</span>
         </div>
         <div className="user">
            <div className="userInfo">
              <img src="https://img.hotimg.com/b7a424fa178ea03e67e7398d1d36eebb.jpeg" alt="" />
              <p>
               <span>James Smith</span>
                Wrote new post
              </p>
            </div>
            <span>1 day ago</span>
         </div>
      </div>
      <div className="item">
      <span>Online friends</span>
        <div className="user">
            <div className="userInfo">
              <img src="https://img.hotimg.com/b7a424fa178ea03e67e7398d1d36eebb.jpeg" alt="" />
              <div className="online"/>
               <span>James Smith</span>
            </div>
         </div>
         <div className="user">
            <div className="userInfo">
              <img src="https://img.hotimg.com/41bfb1f54b134e0056d4f0ea1c824649.jpeg" alt="" />
              <div className="online"/>
               <span>Kate Brown</span>
            </div>
         </div>
         <div className="user">
            <div className="userInfo">
              <img src="https://img.hotimg.com/0ad03b9c1720450f11659ec3395afa12.jpeg" alt="" />
              <div className="online"/>
               <span>Madeline Forbs</span>
            </div>
         </div>
      </div>
    </div>
  </div>
  )
}

export default RightBar