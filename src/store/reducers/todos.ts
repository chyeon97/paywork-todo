import { Reducer } from 'redux';
import { todo } from 'store/types/storeType';
import { createdTodoAction, gotTodos } from 'store/types/actionsType';

type actions = createdTodoAction | gotTodos;

const initState: todo[] = [];

const todoReducer: Reducer<any, actions> = (state = initState, action) => {
  switch (action.type) {
    case 'CREATED_TODO':
      return [...state, action.todo];

    case 'GOT_TODOS':
      console.log(typeof action.todos);
      return [...state, action.todos];
    default:
      return [...state];
  }
};

export default todoReducer;
