import Post from "../post/Post.jsx";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery(["posts", userId], () =>
    makeRequest
      .get(userId ? "/posts?userId=" + userId : "/posts")
      .then((res) => res.data)
  );

  return (
    <div className="posts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading..."
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};


export default Posts;