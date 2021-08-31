import React from 'react';
import styled from 'styled-components';
import { Progressbar } from '../progressbar';

const Overall: React.FC = () => {
  return (
    <Container>
      <Title>Progress</Title>
      <Wrap>
        <InnerContainer>
          <Progressbar label={'🌞 Morning'} percent={0.1} />
        </InnerContainer>
        <InnerContainer>
          <Progressbar label={'🌆 DayTime'} percent={0.1} />
        </InnerContainer>
        <InnerContainer>
          <Progressbar label={'🏙 Evening'} percent={0.1} />
        </InnerContainer>
        <InnerContainer>
          <Progressbar label={'🌙 Night'} percent={0.2} />
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

const Title = styled.h2`
  width:100%;
  padding:10px;
`
const InnerContainer = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  width:100%;
  height:auto;
`;

const Wrap = styled.div`
  width:100%;
  height:auto;
  padding:10px 0px;
`
export default Overall;