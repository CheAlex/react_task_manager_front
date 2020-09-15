// Core
import { compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from 'redux-saga';

const __DEV__ = process.env.NODE_ENV !== 'production';

export const logger = createLogger({
    duration: true,
    collapsed: true,
});

const sagaMiddleware = createSagaMiddleware();

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnchancers = __DEV__ && devtools ? devtools : compose;

const middleware = [ sagaMiddleware ];

if (__DEV__) {
    middleware.push(logger);
}

export { middleware, composeEnchancers, sagaMiddleware };
