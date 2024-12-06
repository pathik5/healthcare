import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LocatorPage from './pages/LocatorPage';
import SymptomCheckerPage from './pages/SymptomCheckerPage';
import Settings from './pages/Settings';
import './assets/styles/main.css';

// Simulating a user state, replace with actual user authentication logic
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetching user data or checking user authentication
    const fetchedUser = localStorage.getItem('user'); // Example: Check localStorage for user info
    if (fetchedUser) {
      setUser(JSON.parse(fetchedUser)); // Set user state based on data
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  // Protected route component to redirect unauthenticated users
  const ProtectedRoute = ({ element }) => {
    return user ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="App">
        {/* Navigation bar */}
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/locator">Locator</Link>
            </li>
            <li>
              <Link to="/symptoms">Symptom Checker</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/locator" element={<LocatorPage />} />
          <Route path="/symptoms" element={<SymptomCheckerPage />} />
          
          {/* Protected route example for Settings page */}
          <Route path="/settings" element={<ProtectedRoute element={<Settings user={user} />} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;