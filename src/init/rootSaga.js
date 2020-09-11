// Core
import { all } from 'redux-saga/effects';

// Watchers
import {
    watchTaskManager
} from '../bus/taskManager/saga/watchers';

export function* rootSaga() {
    yield all([ watchTaskManager() ]);
}
