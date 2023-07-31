'use client'

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const defaultPosition = [40.0379, -76.3055]; // Default to Lancaster, Pennsylvania

const HomePage = () => {
  const [position, setPosition] = useState(defaultPosition);

  useEffect(() => {
    // fetch position from API and then set the position
    // For the sake of this example, we'll just use the default position
    setPosition(defaultPosition);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[80%] h-[80%] max-w-[1000px] max-h-[600px] rounded-lg overflow-hidden">
        <MapContainer center={position} zoom={13} className="w-full h-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default HomePage;
