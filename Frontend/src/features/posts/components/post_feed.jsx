import React from "react";

import usePosts from "../hooks/usePosts";

import Post_Card from "./post_card";

const Post_Feed = () => {
  const { posts, loading } = usePosts();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="post-feed-container">
      {posts.map((post) => (
        <Post_Card key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Post_Feed;
