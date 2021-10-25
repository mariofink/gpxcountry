import { useRef } from "react";

let dragSource;

const DraggableListItem = ({ children, index, onDrop }) => {
  const liElement = useRef(null);
  const handleDragStart = (e, index) => {
    e.nativeEvent.dataTransfer.effectAllowed = "move";
    dragSource = index;
  };
  const handleDragOver = (e) => {
    if (e.nativeEvent.preventDefault) {
      e.nativeEvent.preventDefault(); // Allow dropping.
    }
    liElement.current.classList.add("bg-green-500");
  };
  const handleDragLeave = () => {
    liElement.current.classList.remove("bg-green-500");
  };
  const handleDragEnd = () => {
    liElement.current.classList.remove("bg-green-500");
  };
  const handleDrop = (e, index, callback) => {
    callback({ source: dragSource, target: index });
    liElement.current.classList.remove("bg-green-500");
  };
  return (
    <li
      ref={liElement}
      className="leading-10 font-bold flex gap-2"
      draggable="true"
      onDragStart={(e) => handleDragStart(e, index)}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={(e) => handleDrop(e, index, onDrop)}
      onDragEnd={handleDragEnd}
    >
      {children}
    </li>
  );
};

export default DraggableListItem;
