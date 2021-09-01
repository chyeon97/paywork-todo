import {
  createTodoAction,
  getTodos,
  removeTodoAction,
  reviseTodoAction,
} from './actionsType';

export type createTodoActionCreator = (
  content: string,
  dueAt: Date,
) => createTodoAction;

export type getTodoActionCreator = () => getTodos;

export type removeTodoActionCreator = (id: string) => removeTodoAction;

export type reviseTodoActionCreator = (
  id: string,
  content: string,
  isCheck: boolean,
  dueAt: Date,
) => reviseTodoAction;
