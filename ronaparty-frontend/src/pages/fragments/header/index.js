import { useState } from 'react';
import './header.css';

function Header({test}) {

  const [flipAdmin, toggle] = useState(false);

    return (
      <header className="RonaParty-header">
        <div className="header-text">
          <h1>RonaParty
          {flipAdmin ? "hej" : "svenj"}
          </h1>
        </div>
        
        <div className="admin-tools">
          <button id="admin-tools" type="button" onClick={() => toggle(!flipAdmin)}>Admin-Tools</button>
        </div>
      </header>
  );
}

export default Header;
