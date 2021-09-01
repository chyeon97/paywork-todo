import React from 'react';
import styled from 'styled-components';
import { useDispatch, connect } from 'react-redux';
import { closeModal } from 'store/action/modal';
import { removeTodo } from 'store/action/todos';
import { removeTodoActionCreator } from 'store/types/actionCreatorTypes';
import storeType from 'store/types/storeType';
interface ITodo {
  id: string;
  removeTodo: removeTodoActionCreator;
}

const Modal: React.FC<ITodo> = ({ id, removeTodo }) => {
  const dispatch = useDispatch();
  const onClickCancel = () => {
    dispatch(closeModal())
  }
  const onClickOk = () => {
    const sid = id;
    if (sid) {
      if (dispatch(removeTodo(id)).type === 'REMOVE_TODO') {
        alert('서버 통신 성공')
        dispatch(closeModal())
      }
    }
    else return
  }
  return (
    <BackContainer>
      <Container>
        <Title> ⛔️ 정말 삭제하시겠습니까? </Title>
        <Buttons>
          <Cancel onClick={onClickCancel}>취소</Cancel>
          <Ok onClick={onClickOk}>확인</Ok>
        </Buttons>
      </Container>
    </BackContainer>

  )
}

const BackContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #8a8a8ab3;
`

const Container = styled.div`
    overflow:hidden;
    position: fixed;
    width: 480px;
    height:220px;
    padding: 15px;
    background-color: white;
    border:1px solid black;
    border-radius:5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index:1;
`;

const Title = styled.h1`
  text-align:center;
  padding:45px;
  font-weight:bold;
`

const Buttons = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'row')}
  width:100%;
  height:30%;
  padding:5px;
`

const Cancel = styled.button`
  width:20%;
  height:100%;
  background-color:#CBCBCB;
  outline:none;
  border:none;
  color:white;
  font-weight: bold;
  border-radius:5px;
  cursor: pointer;
  :hover{
    background-color:#CBCBCB99;
  }
`;

const Ok = styled.button`
  width:20%;
  height:100%;
  background-color:#151C3E;
  outline:none;
  border:none;
  color:white;
  font-weight: bold;
  border-radius:5px;
  cursor: pointer;
  :hover{
    background-color:#151C3E90;
  }
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
  removeTodo
  // getTodos,
  // createTodo,
})(Modal);
// export default Modal;