import { useSelector, useDispatch } from "react-redux";
import { booleanChangeTodo, deleteTodo } from "../../redux/modules/todoList";
import { Todo } from "../../types/type";
import { RootState } from "../../redux/config/store";
import { Button, ButtonContainer, TodoBox, TodoContainer } from "./style";
const Todos = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todoList);
  // const [todoList, setTodoList] = useState<TodoList[]>([]);
  const todoBooleanHandler = (id: string) => {
    // const newTodoList: TodoList[] = todoList.map((item) =>
    //   item.id === id ? { ...item, isDone: !item.isDone } : item
    // );
    // setTodoList(newTodoList);
    dispatch(booleanChangeTodo(id));
  };
  const todoDeleteHandler = (id: string) => {
    // const newTodoList: TodoList[] = todoList.filter((item) => item.id !== id);
    // setTodoList(newTodoList);
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      <h2>isWorking📝</h2>
      <TodoContainer>
        {todoList
          ?.filter((item: Todo) => item.isDone === false)
          .map((e: Todo) => {
            return (
              <TodoBox key={e.id}>
                <div>{e.title}</div>
                <div>{e.content}</div>
                <ButtonContainer>
                  <Button onClick={() => todoBooleanHandler(e.id)}>완료</Button>
                  <Button onClick={() => todoDeleteHandler(e.id)}>삭제</Button>
                </ButtonContainer>
              </TodoBox>
            );
          })}
      </TodoContainer>
      <h2>isDone🦈</h2>
      <TodoContainer>
        {todoList
          ?.filter((item: Todo) => item.isDone === true)
          .map((e: Todo) => {
            return (
              <TodoBox key={e.id}>
                <div>{e.title}</div>
                <div>{e.content}</div>
                <ButtonContainer>
                  <Button onClick={() => todoBooleanHandler(e.id)}>취소</Button>
                  <Button onClick={() => todoDeleteHandler(e.id)}>삭제</Button>
                </ButtonContainer>
              </TodoBox>
            );
          })}
      </TodoContainer>
    </div>
  );
};

export default Todos;
