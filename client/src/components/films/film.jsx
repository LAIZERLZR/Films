import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Style from "../../App.css";

function Films({ film }) {
  return (
    <div className="catalogFilms">
      <div className="itemFilms">
        <div className="cardFilms">
          <div className="imgTransition">
            <a href={`/film/${film._id}`}>
              <img className="imgFilms" src={film.img} />
            </a>
          </div>
          <div className="FilmName">{film.name}</div>
          <div className="GenreFilm">{film.genreId.name}</div>
        </div>
      </div>
    </div>
  );
}
export default Films;
