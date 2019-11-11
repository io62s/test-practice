import axios from "axios";
export const getData = () => {
  return async dispatch => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    const data = await res.data;

    return dispatch({
      type: "FETCH_DATA",
      payload: data.slice(0, 20)
    });
  };
};

export const setName = name => {
  return {
    type: "SET_NAME",
    payload: name
  };
};
