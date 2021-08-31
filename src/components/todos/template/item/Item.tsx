import React from 'react';
import styled from 'styled-components';

const Item: React.FC = () => {
  return (
    <Container></Container>
  )
}
const Container = styled.div`
  width:100%;
  height:70px;
  background-color: #F4F7F7;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  border-radius: 5px;
`;

export default Item;