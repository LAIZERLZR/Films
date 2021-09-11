import Genres from "./genres";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGenres } from "../../redux/features/genres";

function Genre() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres.catalog);
  const loading = useSelector((state) => state.genres.loading);

  console.log(genres);
  useEffect(() => {
    dispatch(loadGenres());
  }, []);

  // if (loading) {
  //   return <div>Please wait, loading data 🙂</div>;
  // }
  console.log(genres);
  return (
    <div>
      {genres.map((gnr) => {
        return <Genres key={gnr._id} genre={gnr} />;
      })}
    </div>
  );
}

export default Genre;
