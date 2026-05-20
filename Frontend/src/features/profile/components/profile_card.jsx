import React from "react";

import Follow_Button from "../../follows/components/follow_button";

const Profile_Card = ({ profile }) => {
  return (
    <div className="profile-card-container">
      <img src={profile.profile_image} alt="profile" width={120} />

      <h2>{profile.username}</h2>

      <p>{profile.bio}</p>

      <Follow_Button userId={profile._id} />
    </div>
  );
};

export default Profile_Card;
