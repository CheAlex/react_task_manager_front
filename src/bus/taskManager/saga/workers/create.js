// Core
import { put, call, delay } from 'redux-saga/effects';

// Other
import { taskManagerActions } from "../../actions";
import { api } from '../../api';

export function* create(action) {
  const task = action.payload;

  try {
    // Enable Spinner
    const response = yield call(() => { return api.tasks.create(task) });
    console.log(response);
    const createdTask = yield call([response, response.json]);

    if (response.status !== 201) {
      throw new Error('Some error');
    }

    // yield delay(2000);
    yield put(taskManagerActions.create(createdTask));
  } catch (error) {
    console.log(error);
    // Write to Redux error
  } finally {
    // Disable Spinner
  }
}
