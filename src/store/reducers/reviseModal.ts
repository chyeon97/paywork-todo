import { SHOW_REVISE_MODAL, CLOSE_REVISE_MODAL } from 'store/types/actionsType';

const initState = {
  show: false,
  id: '',
  content: '',
  dueDate: new Date(),
  status: false,
};

export default function reviseModal(state = initState, action: any) {
  switch (action.type) {
    case SHOW_REVISE_MODAL:
      return {
        ...state,
        show: true,
        id: action.id,
        content: action.content,
        dueDate: action.dueDate,
        status: action.status,
      };

    case CLOSE_REVISE_MODAL:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
}
