import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import "../assets/styles/NearHospital.css";

const NearHospital = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [hospitals, setHospitals] = useState([
    { lat: 12.9716, lng: 77.5946, name: "Hospital 1" },
    { lat: 12.2958, lng: 76.6394, name: "Hospital 2" }
  ]);

  // Get user's current location using the Geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting user location: ", error);
          // Fallback to default location if geolocation fails
          setUserLocation({ lat: 12.9716, lng: 77.5946 });
        }
      );
    } else {
      // If geolocation is not supported, use default location
      setUserLocation({ lat: 12.9716, lng: 77.5946 });
    }
  }, []);

  return (
    <div className="near-hospital">
      <h2>Nearby Hospitals</h2>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        {userLocation ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '400px' }}
            center={userLocation} // Center map on user location
            zoom={12}
          >
            {hospitals.map((hospital, index) => (
              <Marker
                key={index}
                position={{ lat: hospital.lat, lng: hospital.lng }}
                title={hospital.name}
              />
            ))}
          </GoogleMap>
        ) : (
          <p>Loading your location...</p> // Loading message while geolocation is being fetched
        )}
      </LoadScript>
    </div>
  );
};

export default NearHospital;