// Core
import { put, call, delay } from 'redux-saga/effects';

// Other
import { taskManagerActions } from "../../actions";
import { api } from '../../api';

export function* fetchTasks() {
    try {
        // Enable Spinner
        const response = yield call(api.tasks.getAll);
        console.log(response);
        const tasks = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error('Some error');
        }

        yield delay(2000);
        yield put(taskManagerActions.fillTasks(tasks));
    } catch (error) {
        console.log(error);
        // Write to Redux error
    } finally {
        // Disable Spinner
    }
}
