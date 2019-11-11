import React, { useEffect } from "react";
import { getData } from "./actions";
import { useSelector, useDispatch } from "react-redux";

const Todos = () => {
  const todos = useSelector(state => state.todoReducer.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      <ol>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ol>
    </div>
  );
};
export default Todos;
