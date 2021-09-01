import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects';
import {
  actionIds,
  createTodoAction,
  createdTodoAction,
  gotTodos,
} from 'store/types/actionsType';
import { AxiosResponse } from 'axios';
import todoApi from 'api/todo-api';
// watchers
function* todoSaga(): Generator<StrictEffect> {
  yield takeEvery(actionIds.CREATE_TODO, createTodoWorker);
  yield takeEvery(actionIds.GET_TODOS, getTodosWorker);
}

function* createTodoWorker({ content, dueAt }: createTodoAction) {
  //create using api
  try {
    const response: AxiosResponse = yield call(todoApi.post, '/todo', {
      content: content,
      dueAt: dueAt,
    });
    console.log(response.data);
    switch (response.status) {
      case 200:
        const data: createdTodoAction = {
          type: 'CREATED_TODO',
          todo: response.data.data,
        };
        yield put(data);
    }
  } catch (err) {}
}

function* getTodosWorker() {
  try {
    const response: AxiosResponse = yield call(todoApi.get, '/todo');
    switch (response.status) {
      case 200:
        console.log(response.data.todoList);
        const data: gotTodos = {
          type: 'GOT_TODOS',
          todos: response.data.todoList,
        };
        yield put(data);
    }
  } catch (err) {}
}

export default todoSaga;
