import React from 'react';
import styled from 'styled-components';
// import { CirclePrgbar } from '../circleProgressbar';
// import { SELECTP } from 'utils/constants';

const Priority: React.FC = () => {
  return (
    <Container>
      <Title>ANALYSIS PRIORITY</Title>
      <Wrap>
        N/A <br />
        (우선순위를 추가하여 전체 데이터 중 각각의 우선순위 데이터 비율)
        {/* <InnerContainer>
          {SELECTP.PRIORITY.map(option => {
            return (
              <CirclePrgbar key={option[0]} label={option[0]} percent={75} color={option[1]} />
            )
          })}
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
  background-color:#00000090;
`;

const Wrap = styled.div`
  width:100%;
  height:auto;
  padding:50px 0px;
  text-align:center;
`;

// const InnerContainer = styled.div`
//   ${({ theme }) => theme.flexSet('center', 'center', 'row')};
//   width:100%;
//   height:auto;
// `;

const Title = styled.h2`
  width:100%;
  padding:10px;
`
export default Priority;