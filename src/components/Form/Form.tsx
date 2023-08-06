import { useState, useRef } from "react";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todoList";
import { Todo } from "../../types/type";
import { Button } from "../Todo/style";

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const titleRef = useRef<HTMLInputElement>(null);
  const titleCurrent = titleRef.current;

  const stateReset = () => {
    setTitle("");
    setContent("");
    if (!titleCurrent) return;
    titleCurrent.focus();
  };

  const addTotoList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: uuid(),
      title,
      content,
      isDone: false,
    };
    // setTodoList([...todoList, newTodo]);
    dispatch(addTodo(newTodo));
    stateReset();
  };
  
  return (
    <>
      <h1>TodoList</h1>
      <form onSubmit={addTotoList}>
        <label htmlFor="title">제목</label>
        <input
          ref={titleRef}
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">내용</label>
        <input
          type="text"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button>기록하기</Button>
      </form>
    </>
  );
};

export default Form;
