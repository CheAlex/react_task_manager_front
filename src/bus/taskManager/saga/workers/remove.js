// Other
import { taskManagerActions } from "../../actions";
import { api } from '../../api';

import { createWorker } from './commonWorker';

export const remove = createWorker(
  (action) => {return api.tasks.remove(action.payload)},
  false,
  (action) => {
    return taskManagerActions.remove(action.payload);
  },
  (action) => ({action: 'remove', key: action.payload})
);
