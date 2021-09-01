import {
  createTodoActionCreator,
  getTodoActionCreator,
  removeTodoActionCreator,
  reviseTodoActionCreator,
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
export const removeTodo: removeTodoActionCreator = id => {
  return {
    type: 'REMOVE_TODO',
    id: id,
  };
};
export const reviseTodo: reviseTodoActionCreator = (
  id,
  content,
  isCheck,
  dueAt,
) => {
  return {
    type: 'REVISE_TODO',
    id: id,
    content: content,
    isCheck: isCheck,
    dueAt: dueAt,
  };
};
