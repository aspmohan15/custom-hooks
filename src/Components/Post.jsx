import React from "react";
import { Loader } from "./Loader";

const Post = ({ posts, loading }) => {
  return (
    <>
      <ul className="list-group mb-4">
        {posts.map((post) => (
          <like key={post.id} className="list-group-item">
            {post.title}
          </like>
        ))}
      </ul>
      {loading && <Loader />}
    </>
  );
};

export default Post;
