const initialState = {
  catalog: [],
  loading: false,
  search: "",
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "Films/load":
      return {
        ...state,
        catalog: action.payload,
        random: action.payload.random,
        loading: true,
      }
    case "Film/load":
      return {
        ...state,
        catalog: action.payload,
        loading: true,
      }
    case "search":
      return {
        ...state,
        search: action.payload,
      }
    default:
      return state;
  }
}


export const loadFilms = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/films")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "Films/load", payload: data });
    });
  };
};

export const loadFilm = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/films")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "Film/load", payload: data });
    });
  };
};