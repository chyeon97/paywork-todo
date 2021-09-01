import React from 'react';
import styled from 'styled-components';
// import { Progressbar } from '../progressbar';

const Overall: React.FC = () => {
  return (
    <Container>
      <Title>ANALYSIS TIME</Title>
      <Wrap>N/A <br />
        (완료일의 시간을 이용해 보통 어느 시간대에 작업을 완료하는지 데이터 분석)
        {/* <InnerContainer>
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
        </InnerContainer> */}
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
  background-color: #00000090;
`;

const Title = styled.h2`
  width:100%;
  padding:10px;
`
const Wrap = styled.div`
  width:100%;
  height:auto;
  padding:50px 0px;
  font-size:15px;
  text-align:center;
`
// const InnerContainer = styled.div`
//   ${({ theme }) => theme.flexSet('center', 'center', 'row')};
//   width:100%;
//   height:auto;
// `;
export default Overall;