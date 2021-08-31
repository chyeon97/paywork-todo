import React from 'react';
import styled from 'styled-components';

const Item: React.FC = () => {
  return (
    <Container>
      <Important></Important>
      <Text></Text>
      <EndDate></EndDate>
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
`;

const Important = styled.div`
  width:5%;
  height:100%;
  padding:10px 0px;
  background-color: wheat;
`;

const Text = styled.h3`
  width:75%;
  height:100%;
  background-color: blue;
`;

const EndDate = styled.h3`
  width:20%;
  height:100%;
  background-color: darkblue;
`;
export default Item;