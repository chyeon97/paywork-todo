import { todo } from './storeType';
export const SHOW_MODAL = 'show_modal';
export const CLOSE_MODAL = 'close_modal';
export interface IModal {
  title: string;
  contents: string;
}
// For Action Creator
export interface createTodoAction {
  type: 'CREATE_TODO';
  content: string;
  dueAt: Date;
}

export interface getTodos {
  type: 'GET_TODOS';
}

// For Reducers
export interface createdTodoAction {
  type: 'CREATED_TODO';
  todo: todo;
}

export interface gotTodos {
  type: 'GOT_TODOS';
  todos: todo;
}

export const actionIds = {
  CREATE_TODO: 'CREATE_TODO',
  GET_TODOS: 'GET_TODOS',
};
