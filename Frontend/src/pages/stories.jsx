import React from "react";

import Layout from "../components/layout";

import Create_Story from "../features/stories/components/create_story";

import Story_Feed from "../features/stories/components/story_feed";

const Stories = () => {
  return (
    <Layout>
      <div className="stories-page-container">
        <Create_Story />

        <Story_Feed />
      </div>
    </Layout>
  );
};

export default Stories;
