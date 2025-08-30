// src/MapView.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView() {
  return (
    <MapContainer center={[-5.1477, 119.4327]} zoom={7} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[-5.1477, 119.4327]}>
        <Popup>Makassar</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapView;
