import axios from "axios";
export const getData = postNum => {
  return async dispatch => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${postNum}`
    );
    const data = await res.data;

    return dispatch({
      type: "FETCH_DATA",
      payload: data
    });
  };
};

export const setName = name => {
  return {
    type: "SET_NAME",
    payload: name
  };
};
