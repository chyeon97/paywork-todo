import { SHOW_MODAL, CLOSE_MODAL } from 'store/types/actionsType';
// import { showModal, closeModal } from 'store/action/modals';

//type ModalState = ReturnType<typeof showModal> | ReturnType<typeof closeModal>;
const INIT_STATE = {
  showModal: false,
};

export default function modals(state = INIT_STATE, action: any) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
        title: action.title,
        contents: action.contents,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
}
