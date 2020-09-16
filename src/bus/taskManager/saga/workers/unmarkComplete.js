// Other
import { taskManagerActions } from "../../actions";
import { api } from '../../api';

import { createWorker } from './commonWorker';

export const unmarkComplete = createWorker(
  (action) => {return api.tasks.unmarkComplete(action.payload)},
  false,
  (action) => {
    return taskManagerActions.unmarkComplete(action.payload);
  },
  (action) => ({action: 'completionChange', key: action.payload})
);
