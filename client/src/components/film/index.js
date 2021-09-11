import Film from "./infoFilm";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFilm } from "../../redux/features/film";
import { useParams } from 'react-router-dom';

function FilmInfo() {
  const {id} = useParams()
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films.catalog.filter((item) => {
    return item._id === id
}));
  const loading = useSelector((state) => state.films.loading);

  console.log(films)
  useEffect(() => {
    dispatch(loadFilm());
  }, []);

  // if (loading) {
  //   return <div>Please wait, loading data 🙂</div>;
  // }

  return (
    <div>
      {films.map((film) => {
        return <Film key={film._id} film={film} />;
      })}
    </div>
  );
}

export default FilmInfo;
