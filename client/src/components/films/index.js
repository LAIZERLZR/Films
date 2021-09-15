import Films from "./film";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFilms } from "../../redux/features/film";
import { useParams } from "react-router-dom";
import Fuse from "fuse.js";

function Film() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const films = useSelector((state) =>
    state.films.catalog.filter((item) => {
      if (!id) return true;
      return item.genreId._id === id;
    })
  );
  const search = useSelector((state) => state.films.search);
  const fuse = new Fuse(films, {
    keys: ["name"],
  });
  const results = fuse.search(search);
  const filmsResults = search ? results.map((result) => result.item) : films
  console.log(search);

  console.log(id);
  useEffect(() => {
    dispatch(loadFilms());
  }, []);
  console.log(films);

  return (
    <div>
      {filmsResults.map((flm) => {
        return <Films key={flm._id} film={flm} />;
      })}
    </div>
  );
}

export default Film;
