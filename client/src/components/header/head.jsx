import React from "react";
import { Link } from "@material-ui/core";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="siteName">
          <b>KinoPoisk</b>
        </div>
        <b>
          <a className="headInfo" href="/films">
            <b>Films</b>
          </a>
        </b>
        <div>
          <a className="headInfo" href="/genres">
            <b>Genres</b>
          </a>
        </div>
        <div className="headInfo">
          <b>TOP</b>
        </div>
        <div className="headInfo">
          <b>AboutUs</b>
        </div>
      </div>
    </div>
  );
}

export default Header;
