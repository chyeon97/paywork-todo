import { todo } from './storeType';
export const SHOW_MODAL = 'show_modal'; // 삭제
export const CLOSE_MODAL = 'close_modal'; // 삭제
export const SHOW_REVISE_MODAL = 'show_revise_modal'; // 수정
export const CLOSE_REVISE_MODAL = 'close_revise_modal'; // 수정

// For Action Creator
export interface createTodoAction {
  type: 'CREATE_TODO';
  content: string;
  dueAt: Date;
}

export interface getTodos {
  type: 'GET_TODOS';
}

export interface removeTodoAction {
  type: 'REMOVE_TODO';
  id: string;
}

export interface reviseTodoAction {
  type: 'REVISE_TODO';
  id: string;
  content: string;
  isCheck: boolean;
  dueAt: Date;
}
// For Reducers
export interface createdTodoAction {
  type: 'CREATED_TODO';
}

export interface gotTodos {
  type: 'GOT_TODOS';
  todos: todo[];
}

export interface removedTodoAction {
  type: 'REMOVED_TODO';
}

export interface revisedTodoAction {
  type: 'REVISED_TODO';
}

export const actionIds = {
  CREATE_TODO: 'CREATE_TODO',
  GET_TODOS: 'GET_TODOS',
  REMOVE_TODO: 'REMOVE_TODO',
  REVISE_TODO: 'REVISE_TODO',

  SHOW_MODAL: 'SHOW_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',

  SHOW_REVISE_MODAL: 'SHOW_REVISE_MODAL',
  CLOSE_REVISE_MODAL: 'CLOSE_REVISE_MODAL',
};
