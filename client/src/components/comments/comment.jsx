function FilmNews({ review }) {
  return (
    <>
      <div className="commentDiv">
        <div className="comment">
          <div><img className="AuthorImg" src="https://www.meme-arsenal.com/memes/3659dcc66b30075cc954c43839f75de0.jpg"/></div>
          <div className="CommentAuthor">{review.author}: </div>
          <div className="CommentText">{review.text}</div>
        </div>
      </div>
    </>
  );
}
export default FilmNews;
