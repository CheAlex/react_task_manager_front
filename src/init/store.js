// Core
import { createStore, applyMiddleware } from "redux";

// Instruments
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import {
    middleware,
    composeEnchancers,
    sagaMiddleware
} from './middleware';

export const store = createStore(
    rootReducer,
    composeEnchancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);
