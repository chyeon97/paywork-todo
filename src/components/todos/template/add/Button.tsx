import React from 'react';
import styled from 'styled-components';

interface IButton {
  onClickAdd: () => void;
}

const Button: React.FC<IButton> = ({ onClickAdd }) => {
  return (
    <>
      <TodoButton onClick={onClickAdd}>
        <Text>추가</Text>
      </TodoButton>
    </>
  )
};

const TodoButton = styled.button`
  width:117px;
  height:72px;
  background-color:#FBD14B;
  border:none;
  border-radius:5px;
  cursor: pointer;
  :hover{
    background-color:#FBD14B99;
  }
`;
const Text = styled.h2`
  color:white;
`;

export default Button;