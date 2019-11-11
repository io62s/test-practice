const initialState = {
  count: 0
};

export default function countReducer(state = initialState, action) {
  switch (action.type) {
    case "ICREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };

    default:
      return state;
  }
}
