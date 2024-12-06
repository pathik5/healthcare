// src/pages/LocatorPage.js
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Set the container style for the map
const containerStyle = {
  width: '100%',
  height: '100vh',
};

// Set the initial center of the map (for example, a default location)
const defaultCenter = {
  lat: 40.730610, // Default latitude (you can change this)
  lng: -73.935242, // Default longitude (you can change this)
};

const LocatorPage = () => {
  const [hospitalLocations, setHospitalLocations] = useState([]);

  useEffect(() => {
    // Simulate fetching nearby hospital data. Replace this with real data.
    const hospitals = [
      { id: 1, name: 'Hospital A', lat: 40.730610, lng: -73.935242 },
      { id: 2, name: 'Hospital B', lat: 40.735610, lng: -73.925242 },
      { id: 3, name: 'Hospital C', lat: 40.740610, lng: -73.920242 },
    ];
    setHospitalLocations(hospitals); // Set the hospital locations to state
  }, []);

  return (
    <div className="locator-page">
      <h2>Nearby Hospitals</h2>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={12}
        >
          {hospitalLocations.map((hospital) => (
            <Marker
              key={hospital.id}
              position={{ lat: hospital.lat, lng: hospital.lng }}
              title={hospital.name}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default LocatorPage;