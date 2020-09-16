// Core
import { put, call, delay } from 'redux-saga/effects';

// Other
import { taskManagerActions } from "../../actions";

export function createWorker(
  apiMethod,
  needResponse,
  successActionFactory,
  trackActionFactory,
  successStatus = 200
) {
  return function* (action) {
    try {
      yield put(taskManagerActions.trackAction(trackActionFactory(action)));

      yield delay(500);

      const response = yield call(() => { return apiMethod(action) });

      if (response.status === successStatus) {
        if (needResponse) {
          const responseData = yield call([response, response.json]);
          yield put(successActionFactory(action, responseData));
        } else {
          yield put(successActionFactory(action));
        }
      } else if (400 <= response.status && response.status < 499) {
        yield put(taskManagerActions.showClientError());
      } else if (500 <= response.status && response.status < 599) {
        yield put(taskManagerActions.showServerError());
      } else {
        throw new Error('Some error');
      }
    } catch (error) {
      console.log(error);
      // Write to Redux error
    } finally {
      yield put(taskManagerActions.untrackAction(trackActionFactory(action)));
    }
  }
}
