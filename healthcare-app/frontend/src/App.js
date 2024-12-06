import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Import Sidebar component
import Profile from './pages/Profile'; // Import Profile page
import Login from './pages/Login'; // Import Login page
import Signup from './pages/Signup'; // Import Signup page
import LocatorPage from './pages/LocatorPage'; // Import Locator page
import SymptomCheckerPage from './pages/SymptomChecker'; // Import Symptom Checker page
import Settings from './pages/Settings'; // Import Settings page
import Consultation from './pages/Consultation'; // Import Consultation page
import History from './pages/History'; // Import History page
import './assets/styles/main.css'; // Import global styles

const App = () => {
  const [user, setUser] = useState(null);

  // Check if user is saved in local storage on initial load
  useEffect(() => {
    const fetchedUser = localStorage.getItem('user');
    if (fetchedUser) {
      setUser(JSON.parse(fetchedUser)); // Set user state from local storage
    }
  }, []);

  // Handle user sign out (clear user data)
  const signOut = () => {
    localStorage.removeItem('user'); // Remove user from local storage
    setUser(null); // Reset user state
    alert('You have been signed out.');
  };

  // Protected route to prevent unauthorized access
  const ProtectedRoute = ({ element }) => {
    return user ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="app-container">
        {/* Pass user and logout function to Sidebar */}
        {user && <Sidebar user={user} logout={signOut} />} {/* Show sidebar only if user is logged in */}

        <div className="main-content">
          <Routes>
            {/* If not logged in, redirect to login page */}
            <Route path="/" element={user ? <Navigate to="/profile" /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/locator" element={<LocatorPage />} />
            <Route path="/symptoms" element={<SymptomCheckerPage />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/settings" element={<ProtectedRoute element={<Settings user={user} />} />} />
            <Route path="/profile" element={<ProtectedRoute element={<Profile user={user} />} />} />
            <Route path="/history" element={<ProtectedRoute element={<History />} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;