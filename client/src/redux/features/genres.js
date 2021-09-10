const initialState = {
  catalog: [],
  loading: false,
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "Genres/load":
      return {
        ...state,
        catalog: action.payload,
        loading: true,
      }
    default:
      return state;
  }
}



export const loadGenres = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/genres")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "Genres/load", payload: data });
    });
  };
};