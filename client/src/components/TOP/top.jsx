import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Tops({ films }) {
  for (let i = 0; i < 12; i++){
    if ()
  return (
    <div className="catalogGenres">
      <div className="itemGenres">
        <div className="cardGenres">
          <div>
            <img className="imgGenres" src={films.image} />
          </div>
          <div className="genreName">{films.name}</div>
          <div>{films.rating}</div>
        </div>
      </div>
    </div>
  )
  };
}
export default Tops;