import React from 'react';
import styled from 'styled-components';
import { Progress } from 'antd';
import "antd/dist/antd.css";

interface ICirclePrgbar {
  color: string;
  percent: number;
  label: string;
}
const CirclePrgbar: React.FC<ICirclePrgbar> = ({ color, percent, label }) => {

  return (
    <Container>
      <InnerContainer>
        <Progress type="circle" percent={percent} strokeColor={color} />
        <Label>{label}</Label>
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  width:100%;
  height:100%;
`;
const InnerContainer = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  width:100%;
  height:100%;

`;
const Label = styled.h3`
  color:black;
`

export default CirclePrgbar;