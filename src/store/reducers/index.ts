import { combineReducers } from 'redux';
import modal from './modal';
import todos from './todos';
import reviseModal from './reviseModal';

// import toast from './toast';
const rootReducer = combineReducers({ modal, reviseModal, todos });

export default rootReducer;
