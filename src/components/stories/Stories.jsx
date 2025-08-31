import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["stories"], () =>
    makeRequest.get("/stories").then((res) => {
      return res.data;
    })
  );

  const fallbackStories = [
    { id: "local-1", img: "/upload/story1.jpg", name: "Kate Brown" },
    { id: "local-2", img: "/upload/story2.jpg", name: "Madeline Forbs" },
    { id: "local-3", img: "/upload/story3.jpg", name: "James Smith" },
  ];

  const stories = error || isLoading ? [] : data;
  const toRender = stories && stories.length > 0 ? stories : fallbackStories;

  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {toRender.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;