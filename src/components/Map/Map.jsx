import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { map, tileLayer, marker, LayerGroup, divIcon, polyline } from "leaflet";

const Map = ({ lat, lng, onClick, waypoints }) => {
  const osMap = useRef(null);
  const markersLayer = useRef(null);
  const lineLayer = useRef(null);
  // init map
  useEffect(() => {
    if (osMap.current !== null) return; // if map has already been initialised
    // Setting tap to false to fix Safari issues (see: https://github.com/Leaflet/Leaflet/issues/7255)
    osMap.current = map("leafletmap", { tap: false }).setView([lat, lng], 13);
    markersLayer.current = new LayerGroup();
    markersLayer.current.addTo(osMap.current);
    lineLayer.current = new LayerGroup();
    lineLayer.current.addTo(osMap.current);
    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      useCache: true,
    }).addTo(osMap.current);
    osMap.current.on("click", (e) => {
      onClick(e.latlng);
    });
  }, [lat, lng, onClick]);
  // update map
  useEffect(() => {
    markersLayer.current.clearLayers();
    lineLayer.current.clearLayers();
    waypoints.map((waypoint, index) => {
      const markerIcon = divIcon({
        className: "map-marker text-white bg-gray-700",
        iconSize: [20, 20],
        html: `<span>${index + 1}</span>`,
      });
      const mapMarker = marker([waypoint.lat, waypoint.lng], {
        icon: markerIcon,
      });
      markersLayer.current.addLayer(mapMarker);
    });
    if (waypoints.length > 1) {
      const line = polyline(waypoints, { color: "#1086e8", weight: 6 });
      lineLayer.current.addLayer(line);
    }
  }, [waypoints]);
  return <div id="leafletmap" className="h-full"></div>;
};

export default Map;
