import React, { useEffect } from "react";
import { getData, removeTodos, removeCompleted } from "./actions";
import { useSelector, useDispatch } from "react-redux";

const Todos = () => {
  const todos = useSelector(state => state.todoReducer.data);
  const postNum = useSelector(state => state.todoReducer.postNum);

  const dispatch = useDispatch();

  const handlePostFetch = () => {
    dispatch(getData(postNum));
  };

  const remove = id => {
    dispatch(removeTodos(id));
  };

  const filterCompleted = () => {
    dispatch(removeCompleted());
  };
  useEffect(() => {
    dispatch(getData(postNum));
    // eslint-disable-next-line
  }, []);

  //console.log(todos);

  return (
    <div>
      <button onClick={handlePostFetch}>Next Todo</button>
      <button onClick={() => dispatch({ type: "CLEAR_DATA" })}>
        Clear Todods
      </button>
      <button onClick={filterCompleted}>Filter Completed</button>
      <ol>
        {todos.map(({ id, title, completed }) => (
          <li key={id}>
            <span>
              Todo Title: <strong>{title}</strong>
            </span>{" "}
            <button onClick={() => remove(id)}>Remove</button>
            <p>
              Status: <strong>{completed ? "completed" : "active"}</strong>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Todos;
