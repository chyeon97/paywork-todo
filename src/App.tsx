import React from 'react';
import { GNB } from 'components/gnb';
import { AddContainer, TodoContainer } from 'components/todos'
import styled from 'styled-components';

function App() {
  return (
    <Wrap>
      <GNB></GNB>
      <AddContainer></AddContainer>
      <Body>
        <TodoContainer title={"TO DO"}>
        </TodoContainer>
        <TodoContainer title={"DONE"}>
        </TodoContainer>

      </Body>
    </Wrap>
  )
}
const Wrap = styled.div`
  width:100%;
  height:100vh;
`

const Body = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'row')}
  width:100%;
  height:72%;
  padding:20px 20px;
`

export default App;
