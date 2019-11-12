import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInput, setInputData } from "./actions";

const Input = () => {
  const inputState = useSelector(state => state.inputReducer);
  const { name, email, pass, names } = inputState;
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleInputChange = e => {
    const { name, value } = e.target;
    dispatch(setInput(name, value));
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch({ type: "CLEAR_INPUT" });
    dispatch(setInputData(name, email, pass));
    inputRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          required
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          required
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          required
          name="pass"
          type="password"
          placeholder="Password"
          value={pass}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {names.map(({ name, email, pass, id }) => (
          <div key={id}>
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <h4>Password: {pass}</h4>
            <p>ID: {id}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Input;
