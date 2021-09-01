import React, { useState } from 'react';
import styled from 'styled-components';
import { GNB } from 'components/gnb';
import { AddContainer, TodoContainer } from 'components/todos'
import { Progress } from 'components/progress'
import { getTodos, createTodo } from 'store/action/todos';
import { getTodoActionCreator, createTodoActionCreator } from 'store/types/actionCreatorTypes';
import { connect, useDispatch } from "react-redux";
import storeType, { todo } from 'store/types/storeType'

interface IProperty {
  todos: todo[] | any;
  getTodos: getTodoActionCreator;
  createTodo: createTodoActionCreator;
}

const Main: React.FC<IProperty> = ({ todos, getTodos, createTodo }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    getTodos(); // todo 조회
  }, [getTodos]);

  const [value, setValue] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onChangeDate = (date: Date) => {
    setSelectedDate(date);
  };

  const renderTodos = () => {
    let complet: todo[] = [];
    let inComplet: todo[] = [];
    if (todos[0]) {
      for (let listData of todos[0]) {
        if (!listData.isCheck) {
          complet.push(listData)
        } else {
          inComplet.push(listData)
        }
      }
    }
    return [complet, inComplet];
  }

  const onClickAdd = () => {
    const newTodo = value;
    const newDueAt = selectedDate;
    if (newTodo && newDueAt) {
      if (dispatch(createTodo(newTodo, newDueAt)).type === 'CREATE_TODO') {
        alert('추가 데이터 전송 성공');
        setValue('')
      }
    }
    else return
  }

  return (
    <Wrap>
      <GNB></GNB>
      <AddContainer inputValue={value} dueDate={selectedDate} onChangeInput={onChangeInput} onChangeDueDate={onChangeDate} onClickAdd={onClickAdd} ></AddContainer>
      <Body>
        <TodoContainer title={"TO DO"} todos={renderTodos()[0]} />
        <TodoContainer title={"DONE"} todos={renderTodos()[1]} />
        <Progress />
      </Body>
    </Wrap>
  )
}
const Wrap = styled.div`
  width:100%;
  height:100vh;
`

const Body = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'row')}
  width:100%;
  height:72%;
  padding:20px 20px;
`
const mapStateToProps = (state: storeType) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, {
  getTodos,
  createTodo,
})(Main);
