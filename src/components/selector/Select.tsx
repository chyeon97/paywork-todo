import React, { useState } from 'react';
import styled from 'styled-components';
import { SELECT } from 'utils/constants'

const Select: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const handleOpen = () => {
    isActive && setIsActive(false);
    !isActive && setIsActive(true)
  }

  return (
    <Container>
      <PrioritySeletor onClick={handleOpen}>
        <SelectContainer>
          중요도
        </SelectContainer>
        {!isActive &&
          <SelectContainer>
            ▼
          </SelectContainer>}
        {isActive &&
          <SelectContainer>
            ▲
          </SelectContainer>}
      </PrioritySeletor>
      {isActive && <ItemsContainer>
        {SELECT.PRIORITY.map(option => {
          return (
            <ItemInnerContainer>
              <ItemDot color={option[1]}>●</ItemDot>
              <Item key={option[0]}>{option[0]}</Item>
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

const ItemDot = styled.div<{ color: string }>`
  color:${props => props.color};
  font-size: 15px;
`;

const Item = styled.ul`
  padding:10px 10px;
  font-size:15px;
`;

export default Select;