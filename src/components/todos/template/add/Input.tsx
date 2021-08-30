import React from 'react';
import styled from 'styled-components';
import { Select } from 'components/selector';
import { Datepicker } from 'components/date';
const Input: React.FC = () => {
  return (
    <>
      <Container>
        <TodoInput />
        <Datepicker />
        <Select />
      </Container>
    </>
  )
}
const Container = styled.div`
  ${({ theme }) => theme.flexSet('space-around', 'center', 'row')}
  width:60%;
  height: 72px;
  outline:none;
  border:none;
  border-radius:5px;
  font-size:25px;
  padding:15px 15px;
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
`;
export default Input;