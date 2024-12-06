// src/router.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LocatorPage from './pages/LocatorPage';
import SymptomCheckerPage from './pages/SymptomCheckerPage';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import History from './pages/History';

const RoutesSetup = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/locator" element={<LocatorPage />} />
      <Route path="/symptoms" element={<SymptomCheckerPage />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile user={/* pass user object here */} />} />
      <Route path="/history" element={<History consultations={/* pass history data here */} />} />
    </Routes>
  </Router>
);

export default RoutesSetup;