import {
  createTodoActionCreator,
  getTodoActionCreator,
} from 'store/types/actionCreatorTypes';

export const createTodo: createTodoActionCreator = (content, dueAt) => {
  return {
    type: 'CREATE_TODO',
    content: content,
    dueAt: dueAt,
  };
};

export const getTodos: getTodoActionCreator = () => {
  return {
    type: 'GET_TODOS',
  };
};
