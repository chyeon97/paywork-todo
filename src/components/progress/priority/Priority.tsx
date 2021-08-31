import React from 'react';
import styled from 'styled-components';
import { CirclePrgbar } from '../circleProgressbar';
import { SELECT } from 'utils/constants';

const Priority: React.FC = () => {
  return (
    <Container>
      <Title>Priority Progress</Title>
      <Wrap>
        <InnerContainer>
          {SELECT.PRIORITY.map(option => {
            return (
              <CirclePrgbar label={option[0]} percent={75} color={option[1]} />
            )
          })}
        </InnerContainer>
      </Wrap>
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

const Wrap = styled.div`
  width:100%;
  height:auto;
  padding:10px 0px;
`;

const InnerContainer = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  width:100%;
  height:auto;
`;

const Title = styled.h2`
  width:100%;
  padding:10px;
`
export default Priority;