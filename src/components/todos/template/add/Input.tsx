import React from 'react';
import styled from 'styled-components';
import { Select } from 'components/selector';
const Input: React.FC = () => {
  return (
    <>
      <Container>
        <TodoInput />
        <Select />
      </Container>
    </>
  )
}
const Container = styled.div`
  width:60%;
  height: 72px;
  outline:none;
  border:none;
  border-radius:5px;
  font-size:25px;
  padding:5px 5px;
  margin-right:10px;
  background-color: white;

`;
const TodoInput = styled.input`
  width:60%;
  height: 100%;
  outline:none;
  border:none;
  border-radius:5px;
  font-size:25px;
  padding: 15px 15px;
  background-color: white;
`;
export default Input;