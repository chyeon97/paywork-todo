import { all } from 'redux-saga/effects';
import { modals } from './modals';
import todoSaga from './todos';

function* rootSaga() {
  yield all([modals(), todoSaga()]);
}
export default rootSaga;
