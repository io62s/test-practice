import React, { useEffect } from "react";
import { getData, removeTodos, removeCompleted, setComplete } from "./actions";
import { useSelector, useDispatch } from "react-redux";

const Todos = () => {
  const todos = useSelector(state => state.todoReducer.data);
  const postNum = useSelector(state => state.todoReducer.postNum);

  const dispatch = useDispatch();

  const handlePostFetch = () => {
    dispatch(getData(postNum));
  };

  const removeTodo = id => {
    dispatch(removeTodos(id));
  };

  const setCompleted = todo => {
    dispatch(setComplete(todo));
  };

  const filterCompleted = () => {
    dispatch(removeCompleted());
  };

  const clearAllTodos = () => {
    dispatch({ type: "CLEAR_DATA" });
  };
  useEffect(() => {
    dispatch(getData(postNum));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <button onClick={handlePostFetch}>Next Todo</button>
      <button onClick={clearAllTodos}>Clear Todods</button>
      <button onClick={filterCompleted}>Filter Completed</button>
      <ol>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>
              Todo Title: <strong>{todo.title}</strong>
            </span>{" "}
            <button onClick={() => removeTodo(todo.id)}>X</button>
            <button onClick={() => setCompleted(todo)}>
              {todo.completed ? "activate" : "complete"}
            </button>
            <p>
              Status:{" "}
              <strong
                style={{ color: `${todo.completed ? "limegreen" : "red"}` }}
              >
                {todo.completed ? "completed" : "active"}
              </strong>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Todos;
