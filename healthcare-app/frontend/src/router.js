import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LocatorPage from './pages/NearHospital';
import SymptomCheckerPage from './pages/SymptomChecker';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import History from './pages/History';

const RoutesSetup = () => {
  const [user, setUser] = useState(null);
  const [consultations, setConsultations] = useState([]);

  // Fetch user from localStorage and set it
  useEffect(() => {
    const fetchedUser = localStorage.getItem('user');
    if (fetchedUser) {
      setUser(JSON.parse(fetchedUser));
    }
  }, []);

  // Fetch consultation history (for example, from an API or localStorage)
  useEffect(() => {
    const fetchedConsultations = localStorage.getItem('consultations');
    if (fetchedConsultations) {
      setConsultations(JSON.parse(fetchedConsultations));
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/locator" element={<LocatorPage />} />
        <Route path="/symptoms" element={<SymptomCheckerPage />} />
        <Route path="/settings" element={<Settings user={user} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/history" element={<History consultations={consultations} />} />
      </Routes>
    </Router>
  );
};

export default RoutesSetup;