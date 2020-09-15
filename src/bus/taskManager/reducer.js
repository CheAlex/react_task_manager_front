import dotProp from "dot-prop-immutable";

// Types
import { types } from './types';

const initialState = {
  tasks: []
};

export const taskManagerReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.TASK_MANAGER_FILL_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    case types.TASK_MANAGER_MARK_COMPLETE:
      return markComplete(state, action);
    case types.TASK_MANAGER_UNMARK_COMPLETE:
      return unmarkComplete(state, action);
    case types.TASK_MANAGER_REMOVE:
      return remove(state, action);
    case types.TASK_MANAGER_CREATE:
      return create(state, action);
    default:
      return state;
  }
};

const markComplete = (state, action) => {
  const id = action.payload;

  return {
    ...state,
    tasks: state.tasks.map((task, index) => {
      if (id === task.id) {
        return {
          ...task,
          isCompleted: true
        };
      }

      return task;
    }),
  };
};

const unmarkComplete = (state, action) => {
  const id = action.payload;

  return {
    ...state,
    tasks: state.tasks.map((task, index) => {
      if (id === task.id) {
        return {
          ...task,
          isCompleted: false
        };
      }

      return task;
    }),
  };
};

const remove = (state, action) => {
  const id = action.payload;

  return {
    ...state,
    tasks: state.tasks.filter(task => id !== task.id),
  };
};

const create = (state, action) => {
  const task = action.payload;

  return {
    ...state,
    tasks: [...state.tasks, task]
  };
};
