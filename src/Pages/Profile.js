import React from "react";
import profileImage from "../assets/profile.jpeg";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h2 className="profile-name">User Name</h2>
      <p className="profile-job-title">Job Title: <strong>Software Developer</strong></p>
      <p className="profile-company">Company Name: <strong>Meta</strong></p>
      <p className="profile-location">Location: <strong>Sillicon Valley</strong></p>
      
    </div>
  );
}

export default Profile;
