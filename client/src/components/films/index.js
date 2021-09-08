import Films from "./film";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFilms } from "../../redux/features/film";

function Film() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.films.catalog);
  const loading = useSelector((state) => state.films.loading);

  console.log(users)
  useEffect(() => {
    dispatch(loadFilms());
  }, []);

  // if (loading) {
  //   return <div>Please wait, loading data 🙂</div>;
  // }

  return (
    <div>
      {users.map((flm) => {
        return <Films key={flm._id} film={flm} />;
      })}
    </div>
  );
}

export default Film;
