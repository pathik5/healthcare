import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../assets/styles/Dashboard.css';  // Import Dashboard styles

const Dashboard = ({ user }) => {
  // Redirect if user is not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome to the Healthcare Dashboard</h1>

      <div className="dashboard-content">
        <div className="section">
          <h2>Your Profile</h2>
          <p>Manage your profile details and view your medical history.</p>
          <Link to="/profile" className="dashboard-link">Go to Profile</Link>
        </div>

        <div className="section">
          <h2>Find a Hospital</h2>
          <p>Locate nearby hospitals and healthcare facilities.</p>
          <Link to="/locator" className="dashboard-link">Go to Locator</Link>
        </div>

        <div className="section">
          <h2>Symptom Checker</h2>
          <p>Use the symptom checker to identify possible conditions based on your symptoms.</p>
          <Link to="/symptoms" className="dashboard-link">Start Symptom Check</Link>
        </div>

        <div className="section">
          <h2>Consultation</h2>
          <p>Connect with doctors for a consultation.</p>
          <Link to="/consultation" className="dashboard-link">Consult with Doctor</Link>
        </div>

        <div className="section">
          <h2>Settings</h2>
          <p>Manage your account and application settings.</p>
          <Link to="/settings" className="dashboard-link">Go to Settings</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;