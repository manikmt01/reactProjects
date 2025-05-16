import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditting, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing(!isEditting);
  }
  let playerName = <span className="player-name">{name}</span>;

  if (isEditting) {
    playerName = <input type="text" value={name} required />;
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditting ? 'Save' : 'Edit'}</button>
    </li>
  );
}
