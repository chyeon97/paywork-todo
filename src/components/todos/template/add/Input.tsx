import React, { useState } from 'react';
import styled from 'styled-components';
import { Select } from 'components/selector';
import { Datepicker } from 'components/date';
import getDate from 'utils/getDate';

const Input: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<null | Date>(new Date())
  const handleDate = (date: Date) => {
    const formattedDate = getDate(date);
    setSelectedDate(date);
    // const res = getUnique('createdAt', selected);
    // setSelected([...res, { option: 'createdAt', select: formattedDate }]);
  };
  return (
    <>
      <Container>
        <TodoInput />
        <Datepicker id="EndDate" date={selectedDate} handleChange={handleDate} />
        <Select />
      </Container>
    </>
  )
}
const Container = styled.div`
  ${({ theme }) => theme.flexSet('space-around', 'center', 'row')}
  width:60%;
  height: 72px;
  outline:none;
  border:none;
  border-radius:5px;
  font-size:25px;
  padding:15px 15px;
  margin-right:10px;
  background-color: white;

`;

const TodoInput = styled.input`
  width:60%;
  height: 100%;
  outline:none;
  border:none;
  border-radius:5px;
  font-size:25px;
  padding: 15px 15px;
`;
export default Input;