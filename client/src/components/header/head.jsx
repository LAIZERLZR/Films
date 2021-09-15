import React, { useState } from "react";
import { Link } from "@material-ui/core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faTheaterMasks } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';



function Header() {
  const dispatch = useDispatch()
  function handleChange(e) {
    dispatch({
      type: "search",
      payload: e.target.value
    })
  }


  return (
    <div>
      <div className="header">
        <div className="siteName">
          <a className="KinoPoisk" href="http://localhost:3000/">
            <b>JetMovies</b>
          </a>
        </div>

        <b>
          <a className="headInfo" href="/films">
            <FontAwesomeIcon icon={faFilm} />
            <b>Movies</b>
          </a>
        </b>
        <div>
          <a className="headInfo" href="/genres">
            <FontAwesomeIcon icon={faTheaterMasks} />
            <b>Genres</b>
          </a>
        </div>
        <div>
          <a className="headInfo" href="/topFilms">
            <FontAwesomeIcon icon={faTrophy} />
            <b>Top</b>
          </a>
        </div>
        <div className="headInfo">
          <a className="headInfo" href="/news">
            <FontAwesomeIcon icon={faNewspaper} />
            <b>News on films</b>
          </a>
        </div>
        <div className="search">
          <input onChange={handleChange} type="text" className="searchText" placeholder="Search..." />
          <a className="searchBtn">
            <FontAwesomeIcon icon={faSearch} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
