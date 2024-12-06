// src/pages/LocatorPage.js
import React, { useState, useEffect } from 'react';

const LocatorPage = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    // Fetch hospital data
    fetch('/hospitals/')
      .then(response => response.json())
      .then(data => setHospitals(data));
  }, []);

  return (
    <div>
      <h1>Nearby Hospitals</h1>
      <ul>
        {hospitals.map(hospital => (
          <li key={hospital.id}>
            <h3>{hospital.name}</h3>
            <p>{hospital.address}</p>
            <p>{hospital.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocatorPage;