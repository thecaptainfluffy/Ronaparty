import { useState } from 'react';
import './admin.css';

function Admin() {

  const [buttonLabel, setButtonLabel] = useState("Start game");

  return (
    <div id="admin">
      <button className="admin" onClick={() => setButtonLabel("Next game")}>{buttonLabel}</button>
    </div>
  );
}

export default Admin;
