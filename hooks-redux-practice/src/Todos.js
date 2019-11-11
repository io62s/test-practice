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
  useEffect(() => {
    dispatch(getData(postNum));
  }, []);
  console.log(postNum);

  return (
    <div>
      <button onClick={handlePostFetch}>Fetch Post</button>
      <button onClick={() => dispatch({ type: "CLEAR_DATA" })}>
        Clear Posts
      </button>
      <ol>
        {todos.map(todo => (
          <li key={todo.id}>
            <p>
              Post Title: <strong>{todo.title}</strong>
            </p>
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
