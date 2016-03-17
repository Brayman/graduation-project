import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as reducers from '../src/reducers'
import createLogger from 'redux-logger';

const reducer = combineReducers(reducers);
const logger = createLogger();
const cswm=applyMiddleware(logger)(createStore);

const store = cswm(reducer,{
    news: [
        {
            id:1,
            username: "Белакт",
            description: "новое вкусное молочко",
            rating: 10
        },
        {
            id:2,
            username: "Ваня Усачёв",
            description: "вышел из запоя. Первым 20 клиентам 50% скидка",
            rating: 5
        },
        {
            id:3,
            username: "Савушкин",
            description: "новый швеицарский сыр тепер дешевле на 30%",
            rating: 25
        }
    ],
    newCompany: [
        {
            id:1,
            username: "БурРилка",
            description: "Компания занимающаяся берением скважен и окопов",
            rating: 0
        },
        {
            id:2,
            username: "Виктор Друзь",
            description: "отвечаю на любые вопросы ещё с 88 года",
            rating: 0
        },
        {
            id:3,
            username: "Капатель",
            description: "Лучшие мастера отделыки, специалисты по электрике к вашим услугам",
            rating: 0
        }
    ]
});
export default store;