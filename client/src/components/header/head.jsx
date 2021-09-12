import React from "react";
import { Link } from "@material-ui/core";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function Header() {
  return (

    <div>
      <div className="header">
        <div className="siteName">
          <a className="KinoPoisk" href="http://localhost:3000/"><b>JetMovies</b></a>
        </div>

        <b>
          <a className="headInfo" href="/films">
            <b>Movies</b>
          </a>
        </b>
        <div>
          <a className="headInfo" href="/genres">
            <b>Genres</b>
          </a>
        </div>
        <div className="headInfo">
          <b>Top</b>
        </div>
        <div className="headInfo">
          <b>Random movie</b>
        </div>
        <div className="search">
          <input type="text"  className="searchText" placeholder="Search..."/>
          <a className="searchBtn">
            <FontAwesomeIcon icon={faSearch} />
          </a>
        </div>

      </div>
    </div>

  );
}

export default Header;
