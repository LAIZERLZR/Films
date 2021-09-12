import { Link } from "react-router-dom";

function randomFilm({ film }) {
  return (
    <>
      <div className="film">
        <div className="SoloFilm">
          <img className="imgFilm" src={film.img} />
          <div className="SoloFilmInfo">
            <div className="SoloFilmName">{film.name}</div>
            <div className="filmDescription">{film.description}</div>
            <div className="GenreFilm">Жанр: {film.genreId.name}</div>
            <div className="ratingFilm"> Оценка фильма: {film.rating}</div>
          </div>
        </div>
      </div>
      <div className="playDiv">
        <div><iframe
          className="play"
          src={film.href}
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen

        ></iframe></div>
      </div>
    </>
  );
}
export default randomFilm;
