import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { map, tileLayer, marker, LayerGroup, divIcon } from "leaflet";

const Map = ({ lat, lng, onClick, waypoints }) => {
  const osMap = useRef(null);
  const markersLayer = useRef(null);
  useEffect(() => {
    osMap.current = map("leafletmap").setView([lat, lng], 13);
    markersLayer.current = new LayerGroup();
    markersLayer.current.addTo(osMap.current);
    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      useCache: true,
    }).addTo(osMap.current);
    osMap.current.on("click", (e) => {
      onClick(e.latlng);
    });
  }, []);
  useEffect(() => {
    markersLayer.current.clearLayers();
    waypoints.map((waypoint, index) => {
      const markerIcon = divIcon({
        className: "map-marker text-white bg-gray-700",
        iconSize: [20, 20],
        html: `<span>${index + 1}</span>`,
      });
      const mapMarker = marker([waypoint.lat, waypoint.lng], {
        icon: markerIcon,
        draggable: true,
      });
      markersLayer.current.addLayer(mapMarker);
    });
  }, [waypoints]);
  return <div id="leafletmap" className="h-full"></div>;
};

export default Map;
