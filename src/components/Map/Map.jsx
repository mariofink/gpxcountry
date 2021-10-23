import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { map, tileLayer } from "leaflet";

const Map = ({ lat, lng }) => {
  useEffect(() => {
    const osMap = map("leafletmap").setView([lat, lng], 13);
    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      useCache: true,
    }).addTo(osMap);
  });
  return <div id="leafletmap" className="h-full"></div>;
};

export default Map;
