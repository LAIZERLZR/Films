import News from "./comment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadComment } from '../../redux/features/comments';


function FilmComment() {
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment.catalog);

  useEffect(() => {
    dispatch(loadComment());
  }, []);

  return (
    <div>
      {comment.map((comm) => {
        return <News key={comm._id} review={comm} />;
      })}
    </div>
  );
}

export default FilmComment;