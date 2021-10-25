import { BinIcon, BurgerIcon } from "../Icons/Icons";
import { createExport } from "../../utils/gpx";
import DraggableListItem from "../DraggableListItem/DraggableListItem";

const Waypoints = ({ list, onRemove, onDrop }) => (
  <div className="flex flex-col justify-between bg-gray-700 text-white p-4">
    <h1 className="text-2xl font-bold border-b-4 border-gray-500 my-2 py-2">
      Route Builder
    </h1>
    <ul className="py-8 flex-auto">
      {list.map((entry, index) => (
        <DraggableListItem index={index} onDrop={onDrop}>
          <button type="button" className="text-gray-500">
            <BurgerIcon />
          </button>
          <span className="flex-auto">Waypoint {index + 1}</span>
          <button
            type="button"
            className="text-gray-500"
            onClick={() => onRemove(index)}
          >
            <BinIcon />
          </button>
        </DraggableListItem>
      ))}
    </ul>
    {list.length > 0 && (
      <a
        href={createExport(list)}
        download="MyRoute.gpx"
        className="w-full text-center font-bold bg-green-500 text-gray-900 py-3 px-4 rounded-lg hover:bg-green-300 hover:text-gray-700"
      >
        Download your Route
      </a>
    )}
  </div>
);
export default Waypoints;
