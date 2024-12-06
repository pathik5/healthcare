// src/pages/Profile.js
import React from 'react';

const Profile = ({ user }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Medical Strength:</strong> {user.medicalStrength}</p>
      <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
      <p><strong>Address:</strong> {user.address}</p>
    </div>
  );
};

export default Profile;