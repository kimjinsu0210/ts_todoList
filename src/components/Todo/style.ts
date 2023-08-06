import { styled } from "styled-components";
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  font-size: 14px;
  padding: 5px;
  border: none;
  background-color: #fed7c3;
  margin-right: 10px;
  cursor: pointer;
`;
const TodoContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const TodoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fee1e8;
  width: 200px;
  height: 150px;
  padding: 10px;
`;
export { Button, TodoContainer, TodoBox, ButtonContainer };
