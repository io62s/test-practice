const initialState = {
  data: [],
  postNum: 1
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_TODOS":
      return {
        ...state,
        data: state.data.concat(action.payload),
        postNum: state.postNum + 1
      };
    case "REMOVE_TODO":
      return {
        ...state,
        data: state.data.filter(todo => todo.id !== action.payload)
      };
    case "REMOVE_COMPLETED":
      return {
        ...state,
        data: state.data.filter(todo => todo.completed !== action.payload)
      };

    case "CLEAR_DATA":
      return {
        ...state,
        data: [],
        postNum: 1
      };

    default:
      return state;
  }
}
