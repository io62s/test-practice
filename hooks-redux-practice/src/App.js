import React from "react";
import useInput from "./useInput";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const [value, handleValueChange, resetValue] = useInput("");
  const [email, handleEmailChange] = useInput("");

  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>app</h1>
      <input
        type="text"
        name="name"
        value={value}
        onChange={handleValueChange}
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      <button onClick={resetValue} type="submit">
        reset
      </button>
      <h2>{value}</h2>
      <h2>{email}</h2>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </div>
  );
}

export default App;
