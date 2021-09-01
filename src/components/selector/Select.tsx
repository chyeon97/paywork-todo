import React from 'react';
import styled from 'styled-components';
import { SELECT } from 'utils/constants'

interface ISelect {
  value: string;
  isSelect: boolean;
  handleOpen: () => void;
  handleChange: (e: React.MouseEvent<HTMLElement>) => void;
}
const Select: React.FC<ISelect> = ({ value, handleChange, isSelect, handleOpen }) => {

  return (
    <Container>
      <PrioritySeletor onClick={handleOpen}>
        <SelectContainer>
          {value ? value : '상태'}
        </SelectContainer>
        {!isSelect &&
          <SelectContainer>
            ▼
          </SelectContainer>}
        {isSelect &&
          <SelectContainer>
            ▲
          </SelectContainer>}
      </PrioritySeletor>
      {isSelect && <ItemsContainer>
        {SELECT.STATUS.map(option => {
          return (
            <ItemInnerContainer key={option} id={option} onClick={handleChange} >
              <Item key={option}>{option}</Item>
            </ItemInnerContainer>
          )
        })}
      </ItemsContainer>}
    </Container>

  )
}

const Container = styled.div`
  width:120px;
  height:100%;
  position:relative;
`;

const PrioritySeletor = styled.div`
  width:100%;
  height:100%;
  padding:12px 10px;
  background-color:white;
  border-radius:5px;
  border:1px solid black;
  font-weight:500;
  font-size:15px;
  display:flex;
  cursor: pointer;
`;

const SelectContainer = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')}
  width:100%;
  color:#383A3F;
`;

const ItemsContainer = styled.div`
  position:absolute;
  top:110%;
  padding:10px;
  background-color: #fff;
  box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.06);
  border:1px solid black;
  width:100%;
`;

const ItemInnerContainer = styled.div`
    ${({ theme }) => theme.flexSet('space-around', 'center', 'row')};
    transition: all 0.2s;
    cursor: pointer;
    :hover{
    background-color: #f4f7f7;
  }
`;
const Item = styled.div`
  padding:10px 10px;
  font-size:15px;
  
`;
export default Select;