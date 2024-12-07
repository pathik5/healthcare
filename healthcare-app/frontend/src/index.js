import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import App from './App';
import { UserProvider } from './context/UserContext'; // Import context

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <UserProvider>
    <App />
  </UserProvider>
);