import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Genres({ genre }) {
  return (
    <div className="catalogGenres">
      <div className="itemGenres">
        <div className="cardGenres">
          <div>
            <img className="imgGenres" src={genre.image} />
          </div>
          <div className="genreName">{genre.name}</div>

        </div>
      </div>
    </div>
  );
}
export default Genres;
