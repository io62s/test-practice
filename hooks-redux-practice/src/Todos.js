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
        {todos.map(todo => (
          <li key={todo.id}>
            <span>
              Todo Title: <strong>{todo.title}</strong>
            </span>{" "}
            <button onClick={() => remove(todo.id)}>Remove</button>
            <p>
              Status: <strong>{todo.completed ? "completed" : "active"}</strong>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Todos;
