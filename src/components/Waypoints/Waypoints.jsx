import { BinIcon, BurgerIcon } from "../Icons/Icons";

const Waypoints = ({ list, onRemove }) => (
  <div className="flex flex-col justify-between bg-gray-700 text-white p-4">
    <h1 className="text-2xl font-bold border-b-4 border-gray-500 my-2 py-2">
      Route Builder
    </h1>
    <ul className="py-8 flex-auto">
      {list.map((entry, index) => (
        <li className="leading-10 font-bold flex gap-2">
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
        </li>
      ))}
    </ul>
    <button
      className="w-full text-sm font-bold bg-green-500 text-gray-900 py-3 px-4 rounded-lg hover:bg-green-300 hover:text-gray-700"
      type="button"
    >
      Download your Route
    </button>
  </div>
);
export default Waypoints;
