import { Reducer } from 'redux';
import { todo } from 'store/types/storeType';
import {
  createdTodoAction,
  gotTodos,
  removedTodoAction,
} from 'store/types/actionsType';

type actions = createdTodoAction | gotTodos | removedTodoAction;

const initState: todo[] = [];

const todoReducer: Reducer<any, actions> = (state = initState, action) => {
  switch (action.type) {
    case 'CREATED_TODO':
      return [...state, action];

    case 'GOT_TODOS':
      return [...state, action.todos];

    case 'REMOVED_TODO':
      return [...state, action];
    default:
      return [...state];
  }
};

export default todoReducer;
