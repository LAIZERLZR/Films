import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Style from "../../App.css";

function FilmNews({ newsF }) {
  return (
    <>
      <div className="newsCatalog">
      <div className="newsTitle">{newsF.title}</div>
      <div className="newsInfoDiv">
        <img className="newImg" src={newsF.image} />
        <div className="textNews">{newsF.text}</div>
      </div>

      </div>
    </>
  );
}
export default FilmNews;
