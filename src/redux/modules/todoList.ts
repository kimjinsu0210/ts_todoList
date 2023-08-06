import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../types/type";

type PayloadTypeString = {
  type: string;
  payload: string;
};

type AddTodo = {
  type: string;
  payload: Todo;
};
// 타입 상속
// type TExample2 = TExample2 & {
//   z: number;
// }

const initialState: Todo[] = [];

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action: AddTodo) => {
      return [...state, action.payload];
    },
    deleteTodo: (state, action: PayloadTypeString) => {
      return state.filter((item) => item.id !== action.payload);
    },
    booleanChangeTodo: (state, action: PayloadTypeString) => {
      return state.map((item) =>
        item.id === action.payload ? { ...item, isDone: !item.isDone } : item
      );
    },
  },
});

export const { addTodo, deleteTodo, booleanChangeTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
