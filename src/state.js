import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as reducers from '../src/reducers'
import createLogger from 'redux-logger';
import getData from './middleware/getData';
import sendData from './middleware/sendData';

const reducer = combineReducers(reducers);
const logger = createLogger();
const cswm=applyMiddleware(getData,sendData,logger)(createStore);

const store = cswm(reducer,{
    userData: {},
    posts: []
});
export default store;




