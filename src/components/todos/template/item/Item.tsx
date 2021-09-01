import React from 'react';
import { useDispatch } from 'react-redux';
import { showModal, showReviseModal } from 'store/action/modal';
import styled from 'styled-components';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { todo } from 'store/types/storeType';
import getDate from 'utils/getDate';
interface ITodo {
  todos: todo;
}

const Item: React.FC<ITodo> = ({ todos }) => {
  const dispatch = useDispatch();
  const onClickRevise = () => {
    dispatch(showReviseModal(todos.id, todos.content, todos.dueAt, todos.isCheck))
  }

  const onClickRemove = () => {
    dispatch(showModal(todos.id))
  }
  return (
    <Container>
      {/* <Important></Important> */}
      <Text>{todos.content}</Text>
      <EndDate>{getDate(new Date(todos.dueAt))}</EndDate>
      <EditContainer>
        <Revise onClick={onClickRevise}><EditOutlined /></Revise>
        <Remove onClick={onClickRemove}><DeleteOutlined /></Remove>
      </EditContainer>

    </Container>
  )
}
const Container = styled.div`
  ${({ theme }) => theme.flexSet("space-between", "center", "row")};
  width:100%;
  height:70px;
  background-color: #F4F7F7;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  border-radius: 5px;
  margin-bottom:20px;
`;

// const Important = styled.div`
//   width:5%;
//   height:100%;
//   padding:10px 0px;
//   background-color: wheat;
// `;

const Text = styled.h3`
${({ theme }) => theme.flexSet("flex-start", "center", "row")};
  width:50%;
  height:100%;
  padding:20px;
  /* background-color: blue; */
`;

const EndDate = styled.h4`
  ${({ theme }) => theme.flexSet("center", "flex-end", "row")};
  width:40%;
  height:100%;
  color:#CDCDCD
`;

const EditContainer = styled.div`
    ${({ theme }) => theme.flexSet("flex-start", "flex-start", "row")};
    width:10%;
    height:100%;
    padding:3px;
`;

const Revise = styled.div`
  width:50%;
  height:auto;
  color: #8283a7;
  cursor: pointer;
`;
const Remove = styled.div`
  width:50%;
  height:auto;
  color: #e71d36;
  cursor: pointer;
`;
export default Item;