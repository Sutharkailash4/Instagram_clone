import React from "react";

import Layout from "../components/layout";

import Story_Feed from "../features/stories/components/story_feed";

import Post_Feed from "../features/posts/components/post_feed";

const Home = () => {
  return (
    <Layout>
      <div className="home-page-container">
        <Story_Feed />

        <Post_Feed />
      </div>
    </Layout>
  );
};

export default Home;
