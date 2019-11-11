import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName, setNames } from "./actions";

const Input = () => {
  const name = useSelector(state => state.inputReducer.name);
  const names = useSelector(state => state.inputReducer.names);
  const dispatch = useDispatch();

  const inputRef = useRef();

  const handleInputChange = e => {
    dispatch(setName(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) {
      return;
    }
    dispatch({ type: "CLEAR_INPUT" });
    dispatch(setNames(name));
    inputRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={handleInputChange}
        />
        <button type="submit">Submit Name</button>
      </form>
      <div>
        {names.map(({ name, id }) => (
          <div key={id}>
            <h4>Name: {name}</h4>
            <p>ID: {id}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Input;
