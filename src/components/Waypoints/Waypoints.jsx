const Waypoints = ({ list }) => (
  <div>
    <h1>Route Builder</h1>
    <ul>
      {list.map((entry, index) => (
        <li>Waypoint {index + 1}</li>
      ))}
    </ul>
  </div>
);
export default Waypoints;
