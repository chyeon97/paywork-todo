import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects';
import {
  actionIds,
  createTodoAction,
  createdTodoAction,
  gotTodos,
  removeTodoAction,
  removedTodoAction,
  reviseTodoAction,
  revisedTodoAction,
} from 'store/types/actionsType';
import { AxiosResponse } from 'axios';
import todoApi from 'api/todo-api';
// watchers
function* todoSaga(): Generator<StrictEffect> {
  yield takeEvery(actionIds.CREATE_TODO, createTodoWorker);
  yield takeEvery(actionIds.GET_TODOS, getTodosWorker);
  yield takeEvery(actionIds.REMOVE_TODO, removeTodoWorker);
  yield takeEvery(actionIds.REVISE_TODO, reviseTodoWorker);
}

function* createTodoWorker({ content, dueAt }: createTodoAction) {
  //create using api
  try {
    const response: AxiosResponse = yield call(todoApi.post, '/todo', {
      content: content,
      dueAt: dueAt,
    });
    console.log(response);
    switch (response.status) {
      case 200:
        const data: createdTodoAction = {
          type: 'CREATED_TODO',
        };
        console.log(data);
        yield put(data);
    }
  } catch (err) {}
}

function* getTodosWorker() {
  try {
    const response: AxiosResponse = yield call(todoApi.get, '/todo');
    console.log(response);
    switch (response.status) {
      case 200:
        const data: gotTodos = {
          type: 'GOT_TODOS',
          todos: response.data.todoList,
        };
        console.log(data);
        yield put(data);
    }
  } catch (err) {}
}

function* removeTodoWorker({ id }: removeTodoAction) {
  try {
    const response: AxiosResponse = yield call(
      todoApi.post,
      '/todo?id=' + String(`${id}`),
    );
    console.log(response);
    switch (response.status) {
      case 200:
        const data: removedTodoAction = {
          type: 'REMOVED_TODO',
        };
        console.log(data);
        yield put(data);
    }
  } catch (err) {}
}

function* reviseTodoWorker({ id, content, isCheck, dueAt }: reviseTodoAction) {
  try {
    const response: AxiosResponse = yield call(
      todoApi.post,
      '/todo?id=' + String(`${id}`),
      {
        content: content,
        isCheck: isCheck,
        dueAt: dueAt,
      },
    );
    console.log(response);
    switch (response.status) {
      case 200:
        const data: revisedTodoAction = {
          type: 'REVISED_TODO',
        };
        console.log(data);
        yield put(data);
    }
  } catch (err) {}
}
export default todoSaga;
