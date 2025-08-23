import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView() {
  return (
    <MapContainer center={[-5.1477, 119.4327]} zoom={12} className="h-96 w-full rounded-lg shadow">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[-5.1477, 119.4327]}>
        <Popup>Lokasi Contoh di Makassar</Popup>
      </Marker>
    </MapContainer>
  );
}
