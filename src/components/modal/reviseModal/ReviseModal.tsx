import React, { useState } from 'react';
import styled from 'styled-components';
import { Datepicker } from 'components/date';
import { Select } from 'components/selector';
import { useDispatch, connect } from 'react-redux';
import { reviseTodo } from 'store/action/todos';
import { reviseTodoActionCreator } from 'store/types/actionCreatorTypes'
import { closeReviseModal } from 'store/action/modal';
import { convertStatus, convertStatusToBolean } from 'utils/getStatus';
import storeType from 'store/types/storeType';

interface ITodo {
  id: string;
  content: string;
  dueDate: Date;
  status: boolean;
  reviseTodo: reviseTodoActionCreator;
}


const ReviseModal: React.FC<ITodo> = ({ id, content, dueDate, status }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(content)
  const [isActive, setIsActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(dueDate))
  const [value, setValue] = useState(convertStatus(status));
  const handleOpen = () => {
    isActive && setIsActive(false);
    !isActive && setIsActive(true)
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  const handleChangeDate = (date: Date) => {
    setSelectedDate(date)
  }
  const handleChangeSelect = (e: React.MouseEvent<HTMLElement>) => {
    setValue(e.currentTarget.id)
    setIsActive(false)
  }

  const onClickCancel = () => {
    dispatch(closeReviseModal())
  }

  const onClickOk = () => {
    if (id && dueDate && convertStatus(status)) {
      if (dispatch(reviseTodo(id, input, convertStatusToBolean(value), selectedDate)).type === 'REVISE_TODO') {
        alert('수정 데이터 전송 성공')
        dispatch(closeReviseModal())
      }
    }
  }

  return (
    <BackContainer>
      <Container>
        <Content value={input} onChange={onChangeInput} />
        <RestInfo>
          <BodyContainer><Datepicker id="dueDate" date={selectedDate} handleChange={handleChangeDate} /></BodyContainer>
          <BodyContainer>
            <Select value={value} isSelect={isActive} handleOpen={handleOpen} handleChange={handleChangeSelect} />
          </BodyContainer>
        </RestInfo>

        <ButtonContainer>
          <Buttons>
            <Cancel onClick={onClickCancel}>취소</Cancel>
            <Ok onClick={onClickOk}>확인</Ok>
          </Buttons>
        </ButtonContainer>
      </Container>
    </BackContainer>

  )
};

const BackContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #8a8a8ab3;
`;

const Container = styled.div`
  position: fixed;
  width: 500px;
  height: 220px;
  padding: 27px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const Content = styled.input`
  padding:10px;
  width:100%;
  font-weight: bold;
  outline:none;
  font-size:15px;
`;

const RestInfo = styled.div`
${({ theme }) => theme.flexSet('flex-start', 'center', 'row')}
  width:100%;
  height:20%;
  margin-top:10px;
`
const BodyContainer = styled.div`
  width:50%;
  height:100%;
  margin-right:10px;
`
const ButtonContainer = styled.div`
  ${({ theme }) => theme.flexSet('', 'flex-end', 'row')}
  width:100%;
  height:60%;
`

const Buttons = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'row')}
  width:100%;
  height: 60%;
  padding: 5px;
`;

const Cancel = styled.button`
  width: 20%;
  height: 100%;
  background-color: #cbcbcb;
  outline: none;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #cbcbcb99;
  }
`;

const Ok = styled.button`
  width: 20%;
  height: 100%;
  background-color: #151c3e;
  outline: none;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #151c3e90;
  }
`;

const mapStateToProps = (state: storeType) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, {
  reviseTodo
})(ReviseModal);
