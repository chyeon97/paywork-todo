import { combineReducers } from 'redux';
import modals from './modals';
import todos from './todos';

// import toast from './toast';
const rootReducer = combineReducers({ modals, todos });

export default rootReducer;
