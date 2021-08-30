import React, { useState } from 'react';
import styled from 'styled-components';




const Datepicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const changeDate = () => {
    console.log(selectedDate)
  }
  return (
    <></>

  )
}

const Container = styled.div`
  width:280px;
  height:100%;
  border:1px solid black;
  border-radius:5px;
`;

const Picker = styled.div`
  width:100%;
  height:100%;
  background-color: aliceblue;
`

export default Datepicker;