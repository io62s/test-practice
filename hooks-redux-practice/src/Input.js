import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "./actions";

const Input = () => {
  const name = useSelector(state => state.inputReducer.name);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(setName(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={handleInputChange}
      />
      <h1>{name}</h1>
    </div>
  );
};

export default Input;
