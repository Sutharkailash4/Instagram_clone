import React, { useState } from "react";

import { toast } from "react-toastify";

import { createPostApiCall } from "../../../services/posts/post.api";

const Create_Post = () => {
  const [caption, setCaption] = useState("");

  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      return toast.error("Post Image is Required");
    }

    try {
      setLoading(true);

      await createPostApiCall({
        caption,
        post_image: image,
      });

      toast.success("Post Created Successfully");

      setCaption("");
      setImage("");
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-post-container">
      <h2>Create Post</h2>

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <textarea
          placeholder="Write Caption"
          value={caption}
          onChange={(e) => {
            setCaption(e.target.value);
          }}
        ></textarea>

        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />

        <button disabled={loading}>
          {loading ? "Posting..." : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default Create_Post;
