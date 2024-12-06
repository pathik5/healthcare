// src/pages/Settings.js
import React, { useState } from 'react';

const Settings = ({ user, onUpdateUser }) => {
  const [newPhoneNumber, setNewPhoneNumber] = useState(user.phoneNumber);

  const handleSave = () => {
    // Save settings or update user information
    onUpdateUser({ ...user, phoneNumber: newPhoneNumber });
    alert('Settings updated!');
  };

  return (
    <div>
      <h1>Settings</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <label>
        Phone Number:
        <input
          type="text"
          value={newPhoneNumber}
          onChange={(e) => setNewPhoneNumber(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Settings;