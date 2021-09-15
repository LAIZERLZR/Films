import News from "./newsFilms";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNews } from '../../redux/features/news';


function FilmNews() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.catalog);

  useEffect(() => {
    dispatch(loadNews());
  }, []);

  return (
    <div>
      {news.map((New) => {
        return <News key={New._id} newsF={New} />;
      })}
    </div>
  );
}

export default FilmNews;