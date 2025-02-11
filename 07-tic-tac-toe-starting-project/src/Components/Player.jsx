import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing);
  }

  let playerName = <span className="player-name">{name}</span>;
  let buttonShow = <p>Edit</p>;

  if (isEditing) {
    playerName = <input type="text" required />;
    buttonShow = <p>Save</p>;
  }
  return (
    <>
      <li>
        <span className="player">
          {playerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{buttonShow}</button>
      </li>
    </>
  );
}
