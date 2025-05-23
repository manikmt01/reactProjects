import { useState } from 'react';

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditting, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing(editing => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditting) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={handleChange} required />
    );
  }
  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditting ? 'Save' : 'Edit'}</button>
    </li>
  );
}
