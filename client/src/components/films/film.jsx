import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Style from "../../App.css";

function Films({ film }) {


  return (

    <div className="catalogFilms">
      <div className="itemFilms">
        <div className="cardFilms">
          <div><img className="imgFilms" src={film.img} /></div>
          <div className="FilmName"><a href={`/film/${film._id}`}>{film.name}</a></div>
          <div className="GenreFilm">{film.genreId.name}</div>
        </div>
      </div>
    </div>

  );
}
export default Films;
