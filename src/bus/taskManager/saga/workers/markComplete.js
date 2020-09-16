// Other
import { taskManagerActions } from "../../actions";
import { api } from '../../api';

import { createWorker } from './commonWorker';

export const markComplete = createWorker(
  (action) => {return api.tasks.markComplete(action.payload)},
  false,
  (action) => {
    return taskManagerActions.markComplete(action.payload);
  },
  (action) => ({action: 'completionChange', key: action.payload})
);
