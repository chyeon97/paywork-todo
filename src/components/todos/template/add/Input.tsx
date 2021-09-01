import React from 'react';
import styled from 'styled-components';
import { Datepicker } from 'components/date';

interface Iinput {
  inputValue: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dueDate: Date;
  onChangeDueDate: (
    e: Date,
    event: React.SyntheticEvent<any, Event> | undefined,
  ) => void;
}

const Input: React.FC<Iinput> = ({ inputValue, onChangeInput, dueDate, onChangeDueDate }) => {

  return (
    <Container>
      <TodoInput value={inputValue} onChange={onChangeInput} />
      <Datepicker id="EndDate" date={dueDate} handleChange={onChangeDueDate} />
    </Container>
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