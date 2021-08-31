import React from 'react';
import styled from 'styled-components';
import { Input, Button } from './template/add';

const AddContainer: React.FC = () => {
  return (
    <Container>
      <Input />
      <Button />
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')}
  width:100%;
  height:20%;
  background-color: #151C3E;
  padding:10px 30px;
`;

export default AddContainer;