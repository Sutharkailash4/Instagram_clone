import React from "react";

import { useParams } from "react-router-dom";

import useProfile from "../hooks/useProfile";

import Profile_Card from "../components/profile_card";

import Edit_Profile_Form from "../components/edit_profile_form";

const Profile = () => {
  const { userId } = useParams();

  const { profile, loading, getProfile } = useProfile({
    userId,
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!profile) {
    return <h1>User Not Found</h1>;
  }

  return (
    <div className="profile-page-container">
      <Profile_Card profile={profile} />

      <Edit_Profile_Form profile={profile} getProfile={getProfile} />
    </div>
  );
};

export default Profile;
