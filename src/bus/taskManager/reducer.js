import dotProp from "dot-prop-immutable";

// Types
import { types } from './types';

const initialState = {
  tasks: [],
  currentActions: {}
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
    case types.TASK_MANAGER_TRACK_ACTION:
      return trackAction(state, action);
    case types.TASK_MANAGER_UNTRACK_ACTION:
      return untrackAction(state, action);
    case types.TASK_MANAGER_SHOW_CLIENT_ERROR:
      return showClientError(state, action);
    case types.TASK_MANAGER_SHOW_SERVER_ERROR:
      return showServerError(state, action);
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

const trackAction = (state, action) => {
  const {action: actionName, key} = action.payload;

  if (null === key) {
    return dotProp.set(state, `currentActions.${actionName}`, true)
  } else {
    return dotProp.set(state, `currentActions.${actionName}.${key}`, true)
  }
};

const untrackAction = (state, action) => {
  const {action: actionName, key} = action.payload;

  if (null === key) {
    return dotProp.delete(state, `currentActions.${actionName}`)
  } else {
    return dotProp.delete(state, `currentActions.${actionName}.${key}`)
  }
};

const showClientError = (state, action) => {
  alert('Произошла клиентская ошибка');

  return state;
};

const showServerError = (state, action) => {
  alert('Произошла серверная ошибка');

  return state;
};
