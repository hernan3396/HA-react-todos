import { ADD_TODO, CHECK_TODO, DELETE_TODO } from "./todo.types.js";

export const addToDo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const checkToDo = (id) => ({
  type: CHECK_TODO,
  payload: id,
});

export const deleteToDo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
