import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ikanData from './data/ikan.json';

export default function MapView() {
  return (
    <div className="w-full h-[500px]">
      <MapContainer
        center={[-5.1477, 119.4327]}
        zoom={12}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <GeoJSON data={ikanData} />
      </MapContainer>
    </div>
  );
}