import React, { useState } from "react";
import { deleteTodo, getTodo, toggleTodo, updateTodo } from "../redux/action";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
const RenderTdods = ({ todo }) => {
  const [editing, setEdit] = useState(false);
  const [text, setText] = useState(todo.data);
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    setEdit((prevState) => !prevState);
    dispatch(updateTodo(todo._id, text));
  };
  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        textDecoration: todo.done ? "line-through" : "",
        color: todo.done ? "#bd3c37" : "#34495e",
      }}
    >
      <span style={{ display: editing ? "none" : "" }}>{todo.data}</span>
      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          className="edit-todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </form>
      <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
        <AiFillDelete />
      </span>
      <span className="icon" onClick={() => setEdit((prevState) => !prevState)}>
        <FaEdit />
      </span>
    </li>
  );
};

export default RenderTdods;
