const initialState = {
  catalog: [],
  randomF: [],
  loading: false,
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "News/load":
      return {
        ...state,
        catalog: action.payload,
        loading: true,
      }
    default:
      return state;
  }
}



export const loadNews = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/news")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "News/load", payload: data });
    });
  };
};