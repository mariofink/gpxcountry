let dragSource;

function handleDragStart(e, index) {
  e.nativeEvent.dataTransfer.effectAllowed = "move";
  // console.log("Drag Start", e, index);
  dragSource = index;
}

function handleDragOver(e) {
  if (e.nativeEvent.preventDefault) {
    e.nativeEvent.preventDefault(); // Allow dropping.
  }
}

function handleDragLeave(e) {
  // console.log("Drag Leave", e);
}

function handleDrop(e, index, callback) {
  console.log("DROP!", index, e);
  callback({ source: dragSource, target: index });
}

function handleDragEnd(e) {
  // console.log("Drag End", e);
}

const DraggableListItem = ({ children, index, onDrop }) => {
  return (
    <li
      className="leading-10 font-bold flex gap-2"
      draggable="true"
      onDragStart={(e) => handleDragStart(e, index)}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={(e) => handleDrop(e, index, onDrop)}
      onDragEnd={handleDragEnd}
    >
      {index} {children}
    </li>
  );
};

export default DraggableListItem;
