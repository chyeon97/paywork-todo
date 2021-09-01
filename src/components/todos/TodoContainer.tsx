import React from 'react';
import styled from 'styled-components';
import { TodoItem } from './template/todo';
import storeType, { todo } from 'store/types/storeType';
import { useEffect } from 'react';
// import { ITodo } from 'store/action/types';
interface IProperty {
  title: string;
  todos: todo[];
}


const TodoContainer: React.FC<IProperty> = ({ title, todos }) => {

  return (
    <Container title={title}>
      <TodoItem title={title} todos={todos} />
    </Container>
  )
}

const Container = styled.div`
  width:500px;
  height:100%;
  border:1px solid black;
  border-radius: 5px;
  padding:10px;
`
export default TodoContainer;