import { useState } from "react";
import "tailwindcss/dist/tailwind.css";
import { arrayMoveImmutable } from "array-move";
import Map from "./components/Map/Map";
import Waypoints from "./components/Waypoints/Waypoints";

function App() {
  const [waypoints, setWaypoints] = useState([]);
  return (
    <div>
      <div className="grid grid-cols-4 h-screen">
        <Waypoints
          list={waypoints}
          onDrop={(e) => {
            setWaypoints((prevWaypoints) =>
              arrayMoveImmutable(prevWaypoints, e.source, e.target)
            );
          }}
          onRemove={(indexToRemove) =>
            setWaypoints((prevWaypoints) => {
              return prevWaypoints.filter(
                (item, index) => index !== indexToRemove
              );
            })
          }
        />
        <div className="col-span-3">
          <Map
            lat="50.5238"
            lng="10.0204"
            onClick={(latlng) =>
              setWaypoints((prevWaypoints) => [...prevWaypoints, latlng])
            }
            waypoints={waypoints}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
