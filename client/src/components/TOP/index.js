import Films from "./top";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFilms } from "../../redux/features/film";
import { useParams } from "react-router-dom"

function Film() {
  const dispatch = useDispatch();
  const {id} = useParams()
  const films = useSelector((state) => state.films.catalog.sort((a,b) => b.rating - a.rating).filter((item) => {
    if(!id) return true
    return item.genreId._id === id
  }));

  console.log(id)
  useEffect(() => {
    dispatch(loadFilms());
  }, []);
  console.log(films)


  return (
    <div>
      {films.map((flm) => {
        return <Films key={flm._id} film={flm} />;
      })}
    </div>
  );
}

export default Film;