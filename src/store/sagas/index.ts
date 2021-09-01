import { all } from 'redux-saga/effects';
import todoSaga from './todos';

function* rootSaga() {
  yield all([todoSaga()]);
}
export default rootSaga;
