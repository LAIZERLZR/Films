const initialState = {
  catalog: [],
  loading: false,
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "Films/load":
      return {
        ...state,
        catalog: action.payload,
        loading: true,
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