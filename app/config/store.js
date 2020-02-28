import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleaware from 'redux-saga';

import reducers from '../reducers';
import rootSaga from './saga';

const sagaMiddleaware = createSagaMiddleaware ();

const middleaware = [sagaMiddleaware];

if (process.env.NODE_ENV === 'development')
    {
        middleaware.push(logger);
    }
const store = createStore(reducers, applyMiddleware(...middleaware));

sagaMiddleaware.run(rootSaga);

export default store;