'use client';

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icons in Leaflet
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';

const center = {
  lat: 33.6844, // Latitude for Islamabad
  lng: 73.0479, // Longitude for Islamabad
};

// Component to handle map click and update marker position
const LocationMarker: React.FC<{ position: L.LatLngExpression; setPosition: (pos: L.LatLngExpression) => void, setLocation: (location: string) => void }> = ({ position, setPosition, setLocation }) => {
  useMapEvents({
    click(event) {
      const { latlng } = event;
      setPosition(latlng);
      fetchLocation(latlng);
    },
  });

  // Reverse geocoding function to get the address from coordinates
  const fetchLocation = async (latlng: L.LatLngExpression) => {
    const lat = Array.isArray(latlng) ? latlng[0] : latlng.lat;
    const lng = Array.isArray(latlng) ? latlng[1] : latlng.lng;
    
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
      const data = await response.json();
      setLocation(data.display_name); // The location name or address
    } catch (error) {
      console.error("Error fetching location:", error);
      setLocation("Unable to fetch location");
    }
  };

  return position ? <Marker position={position} /> : null;
};

interface OpenStreetMapExampleProps {
  onLocationSelect: (location: string) => void; // callback to send the location to the parent
}

const OpenStreetMapExample: React.FC<OpenStreetMapExampleProps> = ({ onLocationSelect }) => {
  const [markerPosition, setMarkerPosition] = useState<L.LatLngExpression>(center);
  const [locationName, setLocationName] = useState<string>("");

  useEffect(() => {
      onLocationSelect(locationName);
  }, [markerPosition, onLocationSelect]);

  return (
    <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
      {/* Add OpenStreetMap Tiles */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker with popup */}
      <Marker position={markerPosition}>
        <Popup>
          {locationName ? locationName : "Click to select a location"}
        </Popup>
      </Marker>

      {/* Handle marker movement */}
      <LocationMarker position={markerPosition} setPosition={setMarkerPosition} setLocation={setLocationName} />
    </MapContainer>
  );
};

export default OpenStreetMapExample;