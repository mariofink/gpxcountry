import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { map, tileLayer, circleMarker, LayerGroup } from "leaflet";

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
    waypoints.map((waypoint) => {
      console.log("add marker", waypoint);
      const marker = circleMarker([waypoint.lat, waypoint.lng]);
      markersLayer.current.addLayer(marker);
    });
  }, [waypoints]);
  return <div id="leafletmap" className="h-full"></div>;
};

export default Map;
