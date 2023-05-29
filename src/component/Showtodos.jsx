import React, { useEffect, useState } from "react";
import { deleteTodo, getTodo, toggleTodo } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import RenderTdods from "./RenderTdods";
import Tabs from "./Tabs";
import { Active_Todos, All_Todos, Done_Todos } from "../redux/actiontypes";
const Showtodos = () => {
  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.Todos);
  const currentTab = useSelector((state) => state.CurrentTab);
 // console.log("curr", currentTab);
 // console.log('Todos',Todo)
  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const getTodosTabwise = () => {
    if (currentTab == All_Todos) {
      return Todo;
    } else if (currentTab == Active_Todos) {
      return Todo.filter((Todo) => !Todo.done);
    } else if (currentTab == Done_Todos) {
      return Todo.filter((Todo) => Todo.done);
    }
  };

  const removeDoneTodos = () => {
    Todo.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  };
  return (
    <article>
      <div>
        <Tabs currentTab={currentTab} />
        {Todo.some((Todo) => Todo.done) ? (
          <button onClick={removeDoneTodos} className="button clear">
            Remove Done Todos
          </button>
        ) : null}
      </div>
      <ul>
        {getTodosTabwise().map((e) => (
          <RenderTdods key={e._id} todo={e} />
        ))}
      </ul>
    </article>
  );
};

export default Showtodos;
