import React from 'react';
import styled from 'styled-components';
import { Input, Button } from './template/add';
import { createTodo } from 'store/action/todos';
import storeType from 'store/types/storeType'
import { connect } from "react-redux";


interface IProperty {

  inputValue: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dueDate: Date;
  onChangeDueDate: (
    e: Date,
    event: React.SyntheticEvent<any, Event> | undefined,
  ) => void;
  onClickAdd: () => void;
}

const AddContainer: React.FC<IProperty> = ({ inputValue, onChangeInput, dueDate, onChangeDueDate, onClickAdd }) => {

  return (
    <Container>
      <Input inputValue={inputValue} dueDate={dueDate} onChangeInput={onChangeInput} onChangeDueDate={onChangeDueDate} />
      <Button onClickAdd={onClickAdd} />
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')}
  width:100%;
  height:20%;
  background-color: #151C3E;
  padding:10px 30px;
`;

const mapStateToProps = (state: storeType) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, {
  createTodo,
})(AddContainer);