import React, { useState } from 'react';
import "../assets/styles/Settings.css";

const Settings = ({ user }) => {
  const [newName, setNewName] = useState(user.name);
  const [newPhone, setNewPhone] = useState(user.phone);
  const [newLocation, setNewLocation] = useState(user.location || '');
  const [error, setError] = useState('');

  const handleNameChange = (e) => setNewName(e.target.value);
  const handlePhoneChange = (e) => setNewPhone(e.target.value);
  const handleLocationChange = (e) => setNewLocation(e.target.value);

  const saveChanges = () => {
    // Basic validation to check if the fields are filled
    if (!newName || !newPhone || !newLocation) {
      setError("Please fill in all fields.");
      return;
    }

    // Save the updated data in localStorage
    const updatedUser = {
      ...user,
      name: newName,
      phone: newPhone,
      location: newLocation,
    };

    localStorage.setItem('user', JSON.stringify(updatedUser));

    // Provide user feedback
    alert("Changes saved successfully!");
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      
      {error && <p className="error-message">{error}</p>}
      
      <div className="form">
        <label>Name:</label>
        <input type="text" value={newName} onChange={handleNameChange} />
      </div>

      <div className="form">
        <label>Phone Number:</label>
        <input type="text" value={newPhone} onChange={handlePhoneChange} />
      </div>

      <div className="form">
        <label>Location:</label>
        <input type="text" value={newLocation} onChange={handleLocationChange} />
      </div>

      <button onClick={saveChanges}>Save Changes</button>
    </div>
  );
};

export default Settings;