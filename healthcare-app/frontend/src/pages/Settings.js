// src/pages/Settings.js
import React, { useState } from 'react';
import "../assets/styles/Settings.css";
const Settings = ({ user }) => {
  const [newName, setNewName] = useState(user.name);

  const handleNameChange = (e) => setNewName(e.target.value);

  const saveChanges = () => {
    alert(`New name: ${newName}`);
    // Update the user data and save it to local storage or your database
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="form">
        <label>Name:</label>
        <input type="text" value={newName} onChange={handleNameChange} />
      </div>
      <button onClick={saveChanges}>Save Changes</button>
    </div>
  );
};

export default Settings;