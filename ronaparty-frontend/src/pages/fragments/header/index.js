import { useState } from 'react';
import './header.css';

function Header({test}) {

    return (
      <header className="RonaParty-header">
        <div className="header-text">
          <h1>RonaParty</h1>
        </div>
        
        <div className="admin-tools">
          <button id="admin-tools" type="button">Admin-Tools</button>
        </div>
      </header>
  );
}

export default Header;
