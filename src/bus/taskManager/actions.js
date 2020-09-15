// Types
import { types } from "./types";

export const taskManagerActions = {
  // Sync
  fillTasks: (tasks) => ({
    type: types.TASK_MANAGER_FILL_TASKS,
    payload: tasks,
  }),
  markComplete: (id) => ({
    type: types.TASK_MANAGER_MARK_COMPLETE,
    payload: id,
  }),
  unmarkComplete: (id) => ({
    type: types.TASK_MANAGER_UNMARK_COMPLETE,
    payload: id,
  }),
  remove: (id) => ({
    type: types.TASK_MANAGER_REMOVE,
    payload: id,
  }),
  create: (task) => ({
    type: types.TASK_MANAGER_CREATE,
    payload: task,
  }),

  // Async
  fetchTasksAsync: () => ({
    type: types.TASK_MANAGER_FETCH_TASKS_ASYNC,
  }),
  markCompleteAsync: (id) => ({
    type: types.TASK_MANAGER_MARK_COMPLETE_ASYNC,
    payload: id,
  }),
  unmarkCompleteAsync: (id) => ({
    type: types.TASK_MANAGER_UNMARK_COMPLETE_ASYNC,
    payload: id,
  }),
  removeAsync: (id) => ({
    type: types.TASK_MANAGER_REMOVE_ASYNC,
    payload: id,
  }),
  createAsync: (task) => ({
    type: types.TASK_MANAGER_CREATE_ASYNC,
    payload: task,
  }),
};
