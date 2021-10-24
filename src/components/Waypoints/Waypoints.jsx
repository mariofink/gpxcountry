/**
 * Icons from here: https://iconsvg.xyz/
 */

const BurgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const BinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

const Waypoints = ({ list }) => (
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
          <button type="button" className="text-gray-500">
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
