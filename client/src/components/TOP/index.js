import Films from "./top";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFilms } from "../../redux/features/film";
import { useParams } from "react-router-dom"

function Film() {
  const dispatch = useDispatch();
  const {id} = useParams()
  const films = useSelector((state) => state.films.catalog.filter((item) => {
    if(!id) return true
    return item.genreId._id === id
  }));

  useEffect(() => {
    dispatch(loadFilms());
  }, []);

  return (
    <div>
      {films.map((topflm) => {
        return <Films key={topflm._id} film={topflm} />;
      })}
    </div>
  );
}

export default Film;
