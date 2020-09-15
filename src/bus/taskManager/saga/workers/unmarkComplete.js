// Core
import { put, call, delay } from 'redux-saga/effects';

// Other
import { taskManagerActions } from "../../actions";
import { api } from '../../api';

export function* unmarkComplete(action) {
  const id = action.payload;

  try {
    // Enable Spinner
    const response = yield call(() => { return api.tasks.unmarkComplete(id) });
    console.log(response);

    if (response.status !== 200) {
      throw new Error('Some error');
    }

    // yield delay(2000);
    yield put(taskManagerActions.unmarkComplete(id));
  } catch (error) {
    console.log(error);
    // Write to Redux error
  } finally {
    // Disable Spinner
  }
}
