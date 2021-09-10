import { Link } from "react-router-dom";
import film from '../films/film';


function Genres({ genre }) {
  return (
    <div className="catalogGenres">
      <div className="itemGenres">
        <div className="cardGenres">
          <div>
            <img className="imgGenres" src={genre.image} />
          </div>
          <div className="genreName"><Link to={`/genre/${genre._id}`}>{genre.name}</Link></div>
        </div>
      </div>
    </div>

  );
}
export default Genres;
