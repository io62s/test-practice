const initialState = {
  name: "",
  email: "",
  pass: "",
  names: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputVal
      };
    case "SET_NAMES":
      return {
        ...state,
        names: [...state.names, action.payload]
      };
    case "CLEAR_INPUT":
      return {
        ...state,
        name: "",
        email: "",
        pass: ""
      };

    default:
      return state;
  }
}
