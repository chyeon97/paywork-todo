import React from 'react';
import styled from 'styled-components';
import { TodoItem } from './template/todo'
interface ITodo {
  title: string;

}

const TodoContainer: React.FC<ITodo> = ({ title }) => {
  return (
    <Container title={title}>
      <TodoItem title={title} />

    </Container>
  )
}

const Container = styled.div`
  width:500px;
  height:100%;
  border:1px solid black;
  border-radius: 5px;
`
export default TodoContainer;