import "tailwindcss/dist/tailwind.css";
import Map from "./components/Map/Map";
import Waypoints from "./components/Waypoints/Waypoints";

function App() {
  return (
    <div className="container">
      <div className="grid grid-cols-4 h-screen">
        <div className="bg-gray-700">
          <Waypoints />
        </div>
        <div className="col-span-3">
          <Map lat="50.5238" lng="10.0204" />
        </div>
      </div>
    </div>
  );
}

export default App;
