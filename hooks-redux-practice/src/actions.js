import axios from "axios";
import uuid from "uuid/v4";
///todos action///
export const getData = postNum => {
  return async dispatch => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${postNum}`
    );
    const data = await res.data;

    return dispatch({
      type: "FETCH_TODOS",
      payload: data
    });
  };
};

export const removeTodos = id => {
  return {
    type: "REMOVE_TODO",
    payload: id
  };
};

export const removeCompleted = () => {
  return {
    type: "REMOVE_COMPLETED",
    payload: true
  };
};

///input actions///

export const setName = name => {
  return {
    type: "SET_NAME",
    payload: name
  };
};
export const setNames = name => {
  return {
    type: "SET_NAMES",
    payload: { name: name, id: uuid() }
  };
};
