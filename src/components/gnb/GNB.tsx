import React from 'react';
import styled from 'styled-components';
import { getDate } from 'utils';

const GNB: React.FC = () => {
  return (
    <Wrap>
      <Text>PAY WORK</Text>
      <TodayDate>{getDate(new Date())}</TodayDate>
    </Wrap>
  )
}

const Wrap = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'row')}
  width:100%;
  height:55px;
  border-bottom:1px solid black;
  padding:5px 50px;
`;

const TodayDate = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')}
  color:#B8B8B8;
  font-size: 18px;
`;

const Text = styled.h2`
  font-weight: bold;
`;
export default GNB;