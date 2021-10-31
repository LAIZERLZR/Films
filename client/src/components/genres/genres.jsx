import { Link } from "react-router-dom";


function Genres({ genre }) {
  return (

    <div className="catalogGenres">
      <div className="itemGenres">
        <div className="cardGenres">
          <div>
            <div className="imgTransition"><Link to={`/genre/${genre._id}`}><img className="imgGenres" src={genre.image} /></Link></div>
          </div>
          <div className="genreName">{genre.name}</div>
        </div>
      </div>
    </div>

  );
}
export default Genres;
