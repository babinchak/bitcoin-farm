'use client'
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const defaultPosition = [40.0379, -76.3055]; // Default to Lancaster, Pennsylvania



const HomePage = () => {
  const markers = [
    { id: 1, position: [40.0379, -76.3055], text: 'Lancaster' },
    { id: 2, position: [40.153121170548516, -76.60677103426113], text: 'Elizabethtown' },
    { id: 3, position: [40.17978248407335, -76.17898793499494], text: 'Ephrata' }
    // add as many markers as you like
  ];

  const [activeMarker, setActiveMarker] = useState(null);
  const handleMarkerClick = (marker) => {
    console.log(`Marker ${marker.id} was clicked.`);
    // add your own code here
    setActiveMarker(marker);
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[80%] h-[50%] max-w-[1000px] max-h-[300px] rounded-lg overflow-hidden mb-4">
        <MapContainer center={defaultPosition} zoom={10} className="w-full h-full">
          <TileLayer
            url="https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=c4d51fa697474bb8858ca93fe38d4068"
            attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {markers.map(marker => (
            <Marker
              key={marker.id}
              position={marker.position}
              eventHandlers={{
                click: () => {
                  handleMarkerClick(marker);
                },
              }}
            >
              <Popup>
                {marker.text}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      {activeMarker && (
        <div className="text-center">
          <h2 className="text-xl">{activeMarker.text}</h2>
          <p>Address</p>
        </div>
      )}

    </div>
  );
};

export default HomePage;