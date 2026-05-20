import React, { useState } from "react";

import { toast } from "react-toastify";

import { updateProfileApiCall } from "../../../services/profile/profile.api";

const Edit_Profile_Form = ({ profile, getProfile }) => {
  const [username, setUsername] = useState(profile.username);

  const [bio, setBio] = useState(profile.bio);

  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await updateProfileApiCall({
        username,
        bio,
        profile_image: image,
      });

      toast.success("Profile Updated Successfully");

      getProfile();
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edit-profile-container">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => {
            setBio(e.target.value);
          }}
        ></textarea>

        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />

        <button disabled={loading}>
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default Edit_Profile_Form;
