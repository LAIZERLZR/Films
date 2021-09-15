import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFilm } from "../../redux/features/film";
import { Route, useParams } from "react-router-dom";
import FilmComment from '../comments';

function FilmInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const film = useSelector((state) =>
    state.films.catalog.find((item) => {
      return item._id === id;
    })
  );

  useEffect(() => {
    dispatch(loadFilm());
  }, []);

  if (!film) return null;

  return (
    <div>
      <div className="film">
        <div className="SoloFilm">
          <img className="imgFilm" src={film.img} />
          <div className="SoloFilmInfo">
            <div className="SoloFilmName">Название фильма: {film.name}</div>
            <div className="SoloFilmName">Страна: {film.country}</div>
            <div className="SoloFilmName">Жанр: {film.genreId.name}</div>
            <div className="SoloFilmName">
              Длительность фильма: {film.duration}
            </div>
            <div className="SoloFilmName"> Оценка фильма: {film.rating}</div>
          </div>
        </div>
      </div>
      <div className="playDiv">
        <div className="filmDescription">
          {film.description}{" "}
          <div className="Price">
            Приобрести фильм за:<button className="bay">{film.price}</button>
          </div>
        </div>
        <iframe
          className="play"
          src={film.href}
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
        <FilmComment/>
    </div>
  );
}

export default FilmInfo;
