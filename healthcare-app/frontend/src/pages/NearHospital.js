// src/pages/NearHospital.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import "../assets/styles/NearHospital.css";
const NearHospital = () => {
  const [hospitals, setHospitals] = useState([
    { lat: 12.9716, lng: 77.5946, name: "Hospital 1" },
    { lat: 12.2958, lng: 76.6394, name: "Hospital 2" }
  ]);

  return (
    <div className="near-hospital">
      <h2>Nearby Hospitals</h2>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={{ lat: 12.9716, lng: 77.5946 }}
          zoom={10}
        >
          {hospitals.map((hospital, index) => (
            <Marker key={index} position={{ lat: hospital.lat, lng: hospital.lng }} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default NearHospital;