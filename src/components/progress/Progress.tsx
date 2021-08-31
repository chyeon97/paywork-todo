import React from 'react';
import styled from 'styled-components';
import { Overall } from './overall'
import { Priority } from './priority';
const Progress: React.FC = () => {
  return (
    <Wrap>
      <Container pos={"flex-start"}>
        <Overall />
      </Container>
      <Container pos={"flex-end"}>
        <Priority />
      </Container>

    </Wrap>

  )
}
const Wrap = styled.div`
  width:auto;
  height:100%;
`

const Container = styled.div <{ pos: string }>`
  ${({ theme }) => theme.flexSet('center', '', 'row')};
  align-items:${props => props.pos};
  width:600px;
  height:50%;
`;

export default Progress