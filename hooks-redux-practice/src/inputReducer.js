const initialState = {
  name: "",
  names: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload
      };
    case "SET_NAMES":
      return {
        ...state,
        names: [...state.names, action.payload]
      };
    case "CLEAR_INPUT":
      return {
        ...state,
        name: ""
      };

    default:
      return state;
  }
}
