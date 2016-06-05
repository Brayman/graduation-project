import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducers from '../src/reducers';
import createLogger from 'redux-logger';
import sendData from './middleware/sendData';
import routing from './middleware/routing';

const reducer = combineReducers(reducers);
const logger = createLogger();
const cswm = applyMiddleware(sendData, routing, logger)(createStore);


const store = cswm(reducer, {
    status: {},
    user: {
        location: {
            position: null,
            marker: [52.103144366096096, 23.772225379943848]
        }
    },
    Profile: {
        _id: null,
        login: null,
        name: null,
        type: null,
        description: null,
        contacts: {
            facebook: null,
            twitter: null,
            mail: null,
            phone: null
        },
        location: {
            position: '123',
            marker: [0, 0]
        }
    },
    tags: [
        {
            id: 1,
            select: false,
            tag: 'ремонт'
        },
        {
            id: 2,
            select: false,
            tag: 'питание'
        },
        {
            id: 3,
            select: false,
            tag: 'развлечения'
        },
        {
            id: 4,
            select: false,
            tag: 'дизайн'
        },
        {
            id: 5,
            select: false,
            tag: 'продукты'
        }
    ],
    posts: []
});
export default store;
