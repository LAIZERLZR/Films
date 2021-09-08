import React from 'react';
import { Link } from '@material-ui/core';


function Header() {
  return (

          <div className="header">
            <div className="siteName"><b>KinoPoisk</b></div>
            <div className="headInfo"><b><Link>Films</Link></b></div>
            <div className="headInfo"><b>Genres</b></div>
            <div className="headInfo"><b>TOP</b></div>
            <div className="headInfo"><b>AboutUs</b></div>
          </div>

  );
}

export default Header;