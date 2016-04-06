import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as reducers from '../src/reducers'
import createLogger from 'redux-logger';
import getData from './middleware/getData';
import sendData from './middleware/sendData';

const reducer = combineReducers(reducers);
const logger = createLogger();
const cswm=applyMiddleware(getData,sendData,logger)(createStore);

const store = cswm(reducer,{
    userData:{
        username: null,
        name: null,
        company: null,
        contact: {
            mail: null,
            phone: null
        },
        data: {
            birthday: null,
            status: null
        },
        profile: {
            type: null,
            description: null,
            rating: null
        }
    },
    posts: [
        {
            username: 'Largus',
            name: 'Victor Larin',
            company: false,
            contact: {
                mail: 'Largus@mail.ru',
                phone: 8376579
            },
            data: {
                birthday: null,
                status: null
            },
            profile: {
                type: null,
                description:'На уроке парень отвечал на все вопросы учителя правильно, чем спровоцировал ' +
                'одноклассницу на презрительный комментарий Ботаник! Учитель сделал ей замечание, что не мешало' +
                ' бы уважительно относиться к, возможно, будущему работодателю.Ботаник добавил: Это маловероятно.' +
                ' Я не планирую становиться сутенёром.',
                rating: 15
            }
        }
    ]
});
export default store;







var user={
    username: null,
    password: null,
    company: null,
    companyName: null,
    profile:{
        registr:null,

    }
    }





