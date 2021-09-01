import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Input, Button } from './template/add';
import { createTodo } from 'store/action/todos';
import storeType, { todo } from 'store/types/storeType'
import { createTodoActionCreator } from 'store/types/actionCreatorTypes';
import { connect } from "react-redux";


interface IProperty {
  // todos: todo[];
  // createTodo: createTodoActionCreator;
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

  // const [value, setValue] = useState('');
  // const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  // // const [priority, setPriority] = useState('');
  // const [add, setAdd] = useState(false);

  // const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value)
  // }

  // const onChangeDate = (date: Date) => {
  //   setSelectedDate(date);
  // };

  // // const onChangePriority = (e: React.MouseEvent<HTMLElement>) => {
  // //   setPriority(e.currentTarget.id)
  // // }

  // const onClickAdd = () => {
  //   // setAdd(true)
  //   const newTodo = value;
  //   const newDueAt = selectedDate;
  //   // const newPriority = priority;
  //   if (newTodo && newDueAt) {
  //     createTodo(newTodo, newDueAt);
  //   }
  //   else return
  // }


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
  // deleteTodo,
  // markComplete,
  // markIncomplete,
  // getTodos,
  createTodo,
})(AddContainer);


// export default AddContainer;