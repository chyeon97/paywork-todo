import {
  SHOW_MODAL,
  CLOSE_MODAL,
  SHOW_REVISE_MODAL,
  CLOSE_REVISE_MODAL,
} from 'store/types/actionsType';

//삭제모달
export const showModal = (id: string) => {
  return {
    type: SHOW_MODAL,
    id,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

//수정 모달
export const showReviseModal = (
  id: string,
  content: string,
  dueDate: Date,
  status: boolean,
) => {
  return {
    type: SHOW_REVISE_MODAL,
    id,
    content,
    dueDate,
    status,
  };
};

export const closeReviseModal = () => {
  return {
    type: CLOSE_REVISE_MODAL,
  };
};
