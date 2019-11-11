const initialState = {
  data: [],
  postNum: 1
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: state.data.concat(action.payload),
        postNum: state.postNum + 1
      };
    case "CLEAR_DATA":
      return {
        ...state,
        data: []
      };

    default:
      return state;
  }
}
