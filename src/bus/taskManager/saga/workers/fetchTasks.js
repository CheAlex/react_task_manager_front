// Other
import { taskManagerActions } from "../../actions";
import { api } from '../../api';

import { createWorker } from './commonWorker';

export const fetchTasks = createWorker(
  () => {return api.tasks.getAll()},
  true,
  (action, responseData) => {
    return taskManagerActions.fillTasks(responseData);
  },
  () => ({action: 'fetchTasks'})
);
