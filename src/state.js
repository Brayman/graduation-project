import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducers from '../src/reducers';
import createLogger from 'redux-logger';
import sendData from './middleware/sendData';
import routing from './middleware/routing';

const reducer = combineReducers(reducers);
const logger = createLogger();
const cswm = applyMiddleware(sendData, routing, logger)(createStore);


const store = cswm(reducer, {
    status: null,
    userData: {
        _id: "5719ed2fe72bf34e185f88a2",
        birthday: "2016-04-22T09:21:51.289Z",
        company: false,
        contacts: {
            facebook: "Braymanrun",
            mail: "tapakah96@gmail.com",
            phone: 8292913,
            twitter: "@Tapakah"
        },
        dateRegistration: "2016-04-22T09:21:51.289Z",
        description: "Я начинающий JavaScript разработчик.Окончил  среднюю школу, готовлюсь к поступлению в Вуз. В будущем хочу стать front-end разработчиком.",
        location: "Brest",
        login: "artem",
        name: "Artem Rakitski",
        picture: "https://pp.vk.me/c633725/v633725197/ca88/LQl_1uBEBv4.jpg"
    },
    posts: [
        {
            _id: "typoed2fe72bf34e185f88a2",
            birthday: "2016-04-22T09:21:51.289Z",
            company: false,
            contacts: {
                facebook: "Braymanrun",
                mail: "tapakah96@gmail.com",
                phone: 8292913,
                twitter: "@Tapakah"
            },
            dateRegistration: "2016-04-22T09:21:51.289Z",
            description: "Я начинающий JavaScript разработчик.Окончил  среднюю школу, готовлюсь к поступлению в Вуз. В будущем хочу стать front-end разработчиком.",
            location: "Brest",
            login: "artem",
            name: "Artem Rakitski",
            picture: "https://pp.vk.me/c633725/v633725197/ca88/LQl_1uBEBv4.jpg"
        }
    ]
});
export default store;
