// Other
import { taskManagerActions } from "../../actions";
import { api } from '../../api';

import { createWorker } from './commonWorker';

export const create = createWorker(
  (action) => {return api.tasks.create(action.payload)},
  true,
  (action, responseData) => {
    return taskManagerActions.create(responseData);
  },
  (action) => ({action: 'create'}),
  201
);