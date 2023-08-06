import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoList from "../modules/todoList";

const rootReducer = combineReducers({
  todoList,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
// ReturnType : 함수타입을 반환해주는 유틸리티 타입
export type RootState = ReturnType<typeof rootReducer>;