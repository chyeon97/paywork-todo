import React from 'react';
import styled from 'styled-components';
import { Item } from 'components/todos/template/item';
import { todo } from 'store/types/storeType';

interface ITodo {
  title: string;
  todos: todo[];
}

const TodoItem: React.FC<ITodo> = ({ title, todos }) => {
  return (
    <Wrap >
      <Title >{title}</Title>
      <Container>
        {todos.map(option => {
          return (
            <Item key={option.id} todos={option} />
          )
        })}


      </Container>
    </Wrap>

  )
}
const Wrap = styled.div`
  width:100%;
  height:100%;
`

const Title = styled.h2`
  color:black;
  height:auto;
  padding:10px 10px;
  
`

const Container = styled.div`
  width:100%;
  /* height:95%; */
  padding:10px;
  /* background-color: wheat; */
`
export default TodoItem;