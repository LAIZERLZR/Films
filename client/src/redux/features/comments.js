const initialState = {
  catalog: [],
  randomF: [],
  loading: false,
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "Comment/load":
      return {
        ...state,
        catalog: action.payload,
        loading: true,
      }
    default:
      return state;
  }
}



export const loadComment = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/reviews")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "Comment/load", payload: data });
    });
  };
};