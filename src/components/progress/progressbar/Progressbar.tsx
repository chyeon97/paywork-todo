import React from 'react';
import styled from 'styled-components';

interface IProgressbar {
  label: string;
  percent: number;
}

const Progressbar: React.FC<IProgressbar> = ({ label, percent }) => {
  return (
    <>
      <Label>{label}</Label>
      <Container>
        <ProgressBar key={label} value={percent} />
      </Container>
    </>
  )
}

const Container = styled.div`
  width:80%;
  height:auto;
  padding:10px;
`;
const Label = styled.h4`
  width:20%;
  padding:10px;
  color:black;
`;

const ProgressBar = styled.progress`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  width: 100%;
  height: 20px;
  border-radius: 7px;
  color: #35495e;
  ::-webkit-progress-bar{
        background-color: #eee;
        border-radius: 8px;
  }
  ::-webkit-progress-value {
    background-color: #35495e;
    border-radius: 8px;
  }
  ::-moz-progress-bar {
    background-color: #eee;
    border-radius: 8px;
  }
`;

export default Progressbar;