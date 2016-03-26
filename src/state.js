import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as reducers from '../src/reducers'
import createLogger from 'redux-logger';
import getPost from './middleware/getPost';
import registrUser from './middleware/registrUser';

const reducer = combineReducers(reducers);
const logger = createLogger();
const cswm=applyMiddleware(getPost,registrUser ,logger)(createStore);

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