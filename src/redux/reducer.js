import { updateTodo } from "./action";
import {
  add_todo,
  delete_todo,
  get_todo,
  toggle_todo,
  update_todo,
} from "./actiontypes";

export const Todoreducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case add_todo:
      return [payload, ...state];
    case get_todo:
      return payload;
    case toggle_todo:
      return state.map((e) =>
        e._id === payload._id ? { ...e, done: !e.done } : e
      );
    case update_todo:
      return state.map((e) =>
        e._id === payload._id ? { ...e, data: payload.data } : e
      );
    case delete_todo:
      return state.filter((e) => e._id !== payload._id);
    default:
      return state;
  }
};
