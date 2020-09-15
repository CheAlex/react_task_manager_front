// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from "../types";

// Workers
import { fetchTasks, markComplete, unmarkComplete, remove, create } from './workers';

function* watchFetchTasks() {
  yield takeEvery(types.TASK_MANAGER_FETCH_TASKS_ASYNC, fetchTasks);
  yield takeEvery(types.TASK_MANAGER_MARK_COMPLETE_ASYNC, markComplete);
  yield takeEvery(types.TASK_MANAGER_UNMARK_COMPLETE_ASYNC, unmarkComplete);
  yield takeEvery(types.TASK_MANAGER_REMOVE_ASYNC, remove);
  yield takeEvery(types.TASK_MANAGER_CREATE_ASYNC, create);
}

export function* watchTaskManager() {
  yield all([
    call(watchFetchTasks)
  ]);
}
