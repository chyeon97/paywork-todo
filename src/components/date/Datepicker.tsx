import React from 'react';
import styled from 'styled-components';
import Datepicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './style.css';
import { ko } from "date-fns/esm/locale";

interface IDate {
  id: string;
  date: null | Date;
  handleChange: (
    e: Date,
    event: React.SyntheticEvent<any, Event> | undefined,
  ) => void;
}

const MyDatepicker: React.FC<IDate> = ({ date, handleChange }) => {

  return (
    <Container>
      <Datepicker
        locale={ko}
        showPopperArrow={false}
        dateFormat="🗓  완료일: yyyy/MM/dd(eee)"
        selected={date}
        onChange={handleChange}
      />
    </Container>




  )
}

const Container = styled.div`
  width:200px;
  height:100%;
  border:1px solid black;
  border-radius:5px;
`;


export default MyDatepicker;