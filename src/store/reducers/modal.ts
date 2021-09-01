import { SHOW_MODAL, CLOSE_MODAL } from 'store/types/actionsType';

const initState = {
  show: false,
  id: '',
};

export default function modal(state = initState, action: any) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: true,
        id: action.id,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
}
