import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";
const Todos = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const onFormsubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };
  const change = (e) => {
    setTodo(e.target.value);
  };
  return (
    <form className="form" onSubmit={onFormsubmit}>
      <input
        value={todo}
        onChange={change}
        placeholder="Enter New Todo..."
        className="input"
      />
    </form>
  );
};

export default Todos;
