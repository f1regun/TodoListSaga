import { call, put, takeLatest } from "redux-saga/effects";
import { 
  fetchTasksPending, fetchTasksSucces, fetchTasksFailed, 
  deleteTaskPending, deleteTaskSucces, deleteTaskFailed,
  addTaskPending, addTaskSucces, addTaskFailed,
  toggleTaskPending, toggleTaskSucces, toggleTaskFailed,
 } from "./tasksSlice";
import axios, { AxiosResponse } from "axios";
import { Task } from './tasksSlice';
import { addTaskApi, deleteTaskApi, fetchTasksApi, toggleTaskApi } from "./api";
import { PayloadAction } from "@reduxjs/toolkit";


export function* fetchTasks() {
  try {
    const response: AxiosResponse<Task[]> = yield call(fetchTasksApi);
    yield put(fetchTasksSucces(response.data));
  } catch(error) {
    yield put(fetchTasksFailed(error instanceof Error ? error.message : 'An error occurred'));
  }
}

export function* watchFetchTasks() {
  yield takeLatest(fetchTasksPending.type, fetchTasks)
}

export function* deleteTask(action: PayloadAction<string>) {
  try {
    yield call(deleteTaskApi, action.payload)
    yield put(deleteTaskSucces())
  } catch(error) {
    yield put(deleteTaskFailed(error instanceof Error ? error.message : 'An error occurred'))
  }
}

export function* watchDeleteTask() {
  yield takeLatest(deleteTaskPending.type, deleteTask)
}

export function* addTask(action: PayloadAction<Task>) {
  try {
    const response: AxiosResponse<Task> = yield call(addTaskApi, action.payload)
    yield put(addTaskSucces(response.data))
  } catch(error) {
    yield put(addTaskFailed(error instanceof Error ? error.message : 'An error occurred'))
  }
}

export function* watchAddTask() {
  yield takeLatest(addTaskPending.type, addTask);
}

export function* toggleTask(action: PayloadAction<Task>) {
  try {
    yield call(toggleTaskApi, action.payload)
    yield put(toggleTaskSucces())
  } catch(error) {
    yield put(toggleTaskFailed(error instanceof Error ? error.message : 'An error occurred'))
  }
}

export function* watchToggleTask() {
  yield takeLatest(toggleTaskPending.type, toggleTask)
}

