// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Sidebar.css';

const Sidebar = ({ user, logout }) => {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/locator">Near Hospitals</Link></li>
        <li><Link to="/symptoms">Symptom Checker</Link></li>
        <li><Link to="/consultation">Consultation</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        {user && <li><button onClick={logout}>Logout</button></li>}
      </ul>
    </nav>
  );
};

export default Sidebar;