import { ADD_TODO, CHECK_TODO, DELETE_TODO } from "./todo.types";

const initialState = [
  {
    text: "Tarea inicial",
    id: 0,
    completed: true,
  },
];

let id = 1;

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: id++,
          text: action.payload,
          completed: false,
        },
      ];
    case CHECK_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}
