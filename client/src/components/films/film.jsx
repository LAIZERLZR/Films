import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Style from "../../App.css";

function Films({ film }) {


  return (

    <div className="catalog">
      <div className="item">
        <div className="card">
          <div><img className="img" src={film.img} /></div>
          <div className="FilmName">{film.name}</div>
          <div className="GenreFilm">{film.genreId.name}</div>
        </div>
      </div>
    </div>


  );
}
export default Films;
