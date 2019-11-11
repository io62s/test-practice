import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector(state => state.countReducer.count);

  const dispatch = useDispatch();

  const INCREMENT = { type: "ICREMENT" };
  const DECREMENT = { type: "DECREMENT" };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(INCREMENT)}>+</button>
      <button onClick={() => dispatch(DECREMENT)}>-</button>
    </div>
  );
};
export default Counter;
