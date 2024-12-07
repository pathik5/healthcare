import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Set the container style for the map
const containerStyle = {
  width: '100%',
  height: '100vh',
};

const LocatorPage = () => {
  const [hospitalLocations, setHospitalLocations] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

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
          // Fallback to a default location if geolocation fails
          setUserLocation({ lat: 40.730610, lng: -73.935242 });
        }
      );
    } else {
      // If geolocation is not supported, use default location
      setUserLocation({ lat: 40.730610, lng: -73.935242 });
    }
  }, []);

  // Simulate fetching nearby hospital data. Replace this with real API data.
  useEffect(() => {
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
        {userLocation ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={userLocation} // Center the map on the user's location
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
        ) : (
          <p>Loading your location...</p> // Show loading text while waiting for user's location
        )}
      </LoadScript>
    </div>
  );
};

export default LocatorPage;