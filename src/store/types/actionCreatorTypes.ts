import { createTodoAction, getTodos } from './actionsType';

export type createTodoActionCreator = (
  content: string,
  dueAt: Date,
) => createTodoAction;

export type getTodoActionCreator = () => getTodos;
