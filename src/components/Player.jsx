import { useState } from "react";

export default function Player({ initName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initName);

  function inputChanged(e) {
    //console.log(e.target.value);
    setName(e.target.value);
  }
  function handleEditClick() {
    setIsEditing((preState) => !preState);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" value={name} onChange={inputChanged} required />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
