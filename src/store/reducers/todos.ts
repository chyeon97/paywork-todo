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
      return [...state, action.todo];

    case 'GOT_TODOS':
      console.log(typeof action.todos);
      return [...state, action.todos];

    case 'REMOVED_TODO':
      console.log(action);
      return [...state, action];
    default:
      return [...state];
  }
};

export default todoReducer;
