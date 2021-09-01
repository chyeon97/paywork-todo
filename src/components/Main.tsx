import React, { useState } from 'react';
import styled from 'styled-components';
import { GNB } from 'components/gnb';
import { AddContainer, TodoContainer } from 'components/todos'
import { Progress } from 'components/progress'
import { useDispatch } from 'react-redux';
import { showModal } from 'store/action/modals';
import { getTodos, createTodo } from 'store/action/todos';
import { getTodoActionCreator, createTodoActionCreator } from 'store/types/actionCreatorTypes';
import { connect } from "react-redux";
import storeType, { todo } from 'store/types/storeType'

interface IProperty {
  todos: todo[] | any;
  getTodos: getTodoActionCreator;
  createTodo: createTodoActionCreator;
}

const Main: React.FC<IProperty> = ({ todos, getTodos, createTodo }) => {
  React.useEffect(() => {
    getTodos();
    // renderTodos();
  }, [getTodos]);

  const [value, setValue] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  // const [priority, setPriority] = useState('');
  const [add, setAdd] = useState(false);

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
    // setAdd(true)
    const newTodo = value;
    const newDueAt = selectedDate;
    if (newTodo && newDueAt) {
      createTodo(newTodo, newDueAt);
      setValue('')
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
      {/* <button onClick={() => dispatch(showModal('로그인', 'test'))}>모달 열기</button> */}
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
  // deleteTodo,
  // markComplete,
  // markIncomplete,
  getTodos,
  createTodo,
})(Main);
// export default Main;
