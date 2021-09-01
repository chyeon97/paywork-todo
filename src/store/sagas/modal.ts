import { delay, put, takeLatest } from 'redux-saga/effects';
import {
  SHOW_MODAL,
  CLOSE_MODAL,
  SHOW_REVISE_MODAL,
  CLOSE_REVISE_MODAL,
} from 'store/types/actionsType';

export function* showModal() {
  // yield delay(3000);

  yield put({
    type: CLOSE_MODAL,
  });
}

export function* modal() {
  yield takeLatest(SHOW_MODAL, showModal);
}

export function* showReviseModal() {
  yield put({
    type: CLOSE_REVISE_MODAL,
  });
}
export function* reviseModa() {
  yield takeLatest(SHOW_REVISE_MODAL, showReviseModal);
}
