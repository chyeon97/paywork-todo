import { SHOW_MODAL, CLOSE_MODAL } from 'store/types/actionsType';

export const showModal = (title: string, contents: string) => {
  return {
    type: SHOW_MODAL,
    title,
    contents,
  };
};

export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
