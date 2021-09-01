import { delay, put, takeLatest } from 'redux-saga/effects';
import { SHOW_MODAL, CLOSE_MODAL } from 'store/types/actionsType';

export function* showModal() {
  yield delay(3000);

  yield put({
    type: CLOSE_MODAL,
  });
}

export function* modals() {
  yield takeLatest(SHOW_MODAL, showModal);
}
