import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducers from '../src/reducers';
import createLogger from 'redux-logger';
import sendData from './middleware/sendData';

const reducer = combineReducers(reducers);
const logger = createLogger();
const cswm = applyMiddleware(sendData, logger)(createStore);

const store = cswm(reducer, {
    status: null,
    userData: {},
    posts: []
});
export default store;
