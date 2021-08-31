import React from 'react';
import styled from 'styled-components';
import { GNB } from 'components/gnb';
import { AddContainer, TodoContainer } from 'components/todos'
import { Progress } from 'components/progress'

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
        <Progress></Progress>
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
