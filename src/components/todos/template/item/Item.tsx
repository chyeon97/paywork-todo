import React from 'react';
import styled from 'styled-components';
import { todo } from 'store/types/storeType';
import getDate from 'utils/getDate';
interface ITodo {
  todos: todo;
}

const Item: React.FC<ITodo> = ({ todos }) => {
  console.log(getDate(new Date(todos.dueAt)))

  return (
    <Container>
      {/* <Important></Important> */}
      <Text>{todos.content}</Text>
      <EndDate>{getDate(new Date(todos.dueAt))}</EndDate>
    </Container>
  )
}
const Container = styled.div`
  ${({ theme }) => theme.flexSet("space-between", "center", "row")};
  width:100%;
  height:70px;
  background-color: #F4F7F7;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  border-radius: 5px;
  margin-bottom:20px;
`;

// const Important = styled.div`
//   width:5%;
//   height:100%;
//   padding:10px 0px;
//   background-color: wheat;
// `;

const Text = styled.h3`
${({ theme }) => theme.flexSet("flex-start", "center", "row")};
  width:60%;
  height:100%;
  padding:20px;
  /* background-color: blue; */
`;

const EndDate = styled.h4`
  ${({ theme }) => theme.flexSet("center", "flex-end", "row")};
  width:40%;
  height:100%;
  color:#CDCDCD
  /* background-color: darkblue; */
`;
export default Item;