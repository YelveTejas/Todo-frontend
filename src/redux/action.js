import axios from "axios";
import {
  add_todo,
  delete_todo,
  get_todo,
  toggle_tab,
  toggle_todo,
  update_todo,
} from "./actiontypes";
const api_url = "https://todoapp-backend10.onrender.com";
const addTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${api_url}/todos`, { data });
    dispatch({ type: add_todo, payload: res.data });
  //  console.log(res.data);
  } catch (error) {
    console.log("Error", error);
  }
};

const getTodo = () => async (dispatch) => {
  try {
    const res = await axios.get(`${api_url}/todos`);
    dispatch({ type: get_todo, payload: res.data });
    //console.log(res.data)
  } catch (err) {
    console.log(err);
  }
};

const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${api_url}/todos/${id}`);
    {
      dispatch({ type: toggle_todo, payload: res.data });
    
    }
    
  } catch (err) {
    console.log(err);
  }
};

const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${api_url}/todos/${id}`, { data });
    {
      dispatch({ type: update_todo, payload: res.data });
    }
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${api_url}/todos/${id}`);
    {
      dispatch({ type: delete_todo, payload: res.data });
    }
    //console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: toggle_tab, payload: tab });
};

export { addTodo, getTodo, toggleTodo, updateTodo, deleteTodo, toggleTab };
