import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { closeModal } from 'store/action/modals';
import { IModal } from 'store/types/actionsType';

const Modal: React.FC<IModal> = ({ title, contents }) => {
  const dispatch = useDispatch();
  console.log(title, contents)
  return (
    <ModalContainer>
      <Title>{title}</Title>
      <Contents>{contents}</Contents>
      <button onClick={() => dispatch(closeModal())} >닫기</button>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  position:fixed;
  width: 300px;
  padding: 30px;
  background-color: #ccc;
  top: 50%;
  left: 50%;
  margin-left: -150px;
`
const Title = styled.h1`
    padding-bottom: 10px;
    border-bottom: 1px solid black;
`
const Contents = styled.h3`
    padding-bottom: 2px;
    border-bottom: 1px solid black;
`
export default Modal;