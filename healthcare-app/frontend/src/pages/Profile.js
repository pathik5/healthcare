import React from 'react';
import "../assets/styles/Profile.css";

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <h2>User Profile</h2>

      <div className="profile-details">
        <p><strong>Name:</strong> {user.name || 'Not Provided'}</p>
        <p><strong>Phone Number:</strong> {user.phone || 'Not Provided'}</p>
        <p><strong>Location:</strong> {user.location ? user.location : 'Location not set'}</p>
      </div>

      <div className="history-section">
        <h3>Past History</h3>
        {user.history && user.history.length > 0 ? (
          <ul>
            {user.history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No history available.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;