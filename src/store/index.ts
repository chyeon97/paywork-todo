import { createStore, applyMiddleware } from 'redux';
import cretaeSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import sagas from './sagas';

const sagaMiddleware = cretaeSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;
