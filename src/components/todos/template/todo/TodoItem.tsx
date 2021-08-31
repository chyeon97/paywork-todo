import React from 'react';
import styled from 'styled-components';
import { Item } from 'components/todos/template/item';

interface ITodo {
  title: string;

}

const TodoItem: React.FC<ITodo> = ({ title }) => {
  return (
    <>
      <Title>{title}</Title>
      <Container>
        <Item />

      </Container>
    </>

  )
}
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