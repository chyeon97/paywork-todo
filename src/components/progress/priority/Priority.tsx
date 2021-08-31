import React from 'react';
import styled from 'styled-components';

const Priority: React.FC = () => {
  return (
    <Container>
      <Title>Priority Progress</Title>
    </Container>
  )
}

const Container = styled.div`
  width:100%;
  height:90%;
  padding:10px;
  border:1px solid black;
  border-radius: 15px;
`;


const Title = styled.h2`
  width:100%;
  padding:10px;
`
export default Priority;