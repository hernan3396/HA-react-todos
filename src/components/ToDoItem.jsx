import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo, checkToDo } from "../redux/todo.actions";

export default function ToDoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <>
      <li className={todo.completed ? "completed" : ""}>
        {todo.text} ID:{todo.id}
      </li>
      <button onClick={() => dispatch(checkToDo(todo.id))}>Check</button>
      <button onClick={() => dispatch(deleteToDo(todo.id))}>Eliminar</button>
    </>
  );
}
