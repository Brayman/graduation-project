import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as reducers from '../src/reducers'
import createLogger from 'redux-logger';
import middleware from './middleware/getPostMiddleware';
import registrat from './middleware/postRegistrDataMiddleware';

const reducer = combineReducers(reducers);
const logger = createLogger();
const cswm=applyMiddleware(middleware,registrat ,logger)(createStore);

const store = cswm(reducer,{
    userData:{
        username: null,
        name: null,
        type: null,
        description: null,
        contact: {
            twitter: null,
            mail: null,
            phone: null
        }
    },
    posts:[

    ]
});
export default store;