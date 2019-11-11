const initialState = {
  data: []
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
}
