import { call, fork, put, takeEvery } from 'redux-saga/effects'
import { watchDeleteTask, watchFetchTasks, watchAddTask, watchToggleTask } from '../features/tasks/taskSaga'
import { fetchTasksPending } from '../features/tasks/tasksSlice';

function* initializeApp() {
  yield put(fetchTasksPending());
}

export default function* rootSaga() {
  yield fork(initializeApp);
  yield fork(watchFetchTasks);
  yield fork(watchDeleteTask);
  yield fork(watchAddTask);
  yield fork(watchToggleTask);
}