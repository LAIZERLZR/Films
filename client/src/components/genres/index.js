import Genres from "./genres";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGenres } from "../../redux/features/genres";

function Genre() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres.catalog);

  useEffect(() => {
    dispatch(loadGenres());
  }, []);

  return (
    <div>
      {genres.map((gnr) => {
        return <Genres key={gnr._id} genre={gnr} />;
      })}
    </div>
  );
}

export default Genre;
