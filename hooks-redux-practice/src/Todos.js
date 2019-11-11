import React, { useEffect } from "react";
import { getData } from "./actions";
import { useSelector, useDispatch } from "react-redux";

const Todos = () => {
  const todos = useSelector(state => state.todoReducer.data);
  const postNum = useSelector(state => state.todoReducer.postNum);

  const dispatch = useDispatch();

  const handlePostFetch = () => {
    dispatch(getData(postNum));
  };

  console.log(postNum);

  return (
    <div>
      <ol>
        {todos.map(todo => (
          <li key={todo.id}>
            <p>Post Title: {todo.title}</p>
            <p>Status: {todo.completed ? "completed" : "active"}</p>
          </li>
        ))}
      </ol>
      <button onClick={handlePostFetch}>Fetch Posts</button>
      <button onClick={() => dispatch({ type: "CLEAR_DATA" })}>
        Clear Posts
      </button>
    </div>
  );
};
export default Todos;
