// src/pages/Profile.js
import React from 'react';
import "../assets/styles/Profile.css";

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Phone Number:</strong> {user.phone}</p>
      <p><strong>Location:</strong> {user.location}</p>
      <h3>Past History</h3>
      <ul>
        {user.history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;