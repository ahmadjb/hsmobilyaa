import React, { useState, useEffect } from 'react';
import { LoadScript, GoogleMap, DirectionsRenderer } from '@react-google-maps/api';
import MapIcon from '../../Data/map.png';

const libraries = ['places']; // Load the Places library for current location
const mapContainerStyle = {
  width: '400px',
  height: '400px',
};

const constantAddress = 'Ankara, Turkey'; // Replace with the actual address

const MapComponent = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const handleGetDirections = () => {
    // Open Google Maps with directions
    const url = `https://www.google.com/maps/dir/?api=1&origin=${currentLocation.lat},${currentLocation.lng}&destination=${constantAddress}`;
    window.open(url, '_blank');
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY" libraries={libraries}>
      {/*<GoogleMap mapContainerStyle={mapContainerStyle} center={currentLocation} zoom={15}>
        {currentLocation && constantAddress && (
          <DirectionsRenderer
            origin={currentLocation}
            destination={constantAddress}
          />
        )}
      </GoogleMap>*/}
      <div onClick={handleGetDirections}><img src={MapIcon} style={{width:'130%'}} /></div>
    </LoadScript>
  );
};

export default MapComponent;
