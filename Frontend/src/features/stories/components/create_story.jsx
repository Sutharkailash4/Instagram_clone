import React, { useState } from "react";

import { toast } from "react-toastify";

import { createStoryApiCall } from "../../../services/story/story.api";

const Create_Story = () => {
  const [storyImage, setStoryImage] = useState("");

  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!storyImage) {
      return toast.error("Story Image is Required");
    }

    try {
      setLoading(true);

      await createStoryApiCall({
        story_image: storyImage,
      });

      toast.success("Story Created Successfully");

      setStoryImage("");
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-story-container">
      <h2>Create Story</h2>

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="file"
          onChange={(e) => {
            setStoryImage(e.target.files[0]);
          }}
        />

        <button disabled={loading}>
          {loading ? "Uploading..." : "Create Story"}
        </button>
      </form>
    </div>
  );
};

export default Create_Story;
