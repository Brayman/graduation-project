/**
 * Created by Artsiom_Rakitski on 2/26/2016.
 */
//import posts from './posts'
import userData from './user';
const defaultState= {
        username: null,
        name: null,
        description: null,
        rating: null,
        contact: {
            twitter: null,
            mail: null,
            phone: null
        }
};
export function posts(state=[],action){
    switch (action.type){
        case 'LOAD_POST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}
export function Profile (state=defaultState,action){
    switch (action.type){
        case 'LOAD_DATA_SUCCESS':
            return action.data;
        case 'GET_PROFILE':
            return Object.assign({},state,{
                    username: "test-user",
                    type: 'user',
                    description: 'Предпринимательство, предпринимательская деятельность — экономическая деятельность' +
                    ', направленная на систематическое получение прибыли от производства и продажи товаров, оказания ' +
                    'услуг. Для этой цели используется имущество, нематериальные активы, труд как самого' +
                    ' предпринимателя, так и привлечённые со стороны. Нет гарантий, что затраченные средства окупятся,' +
                    ' что произведённое будет продано с прибылью. С этим связан риск потерь всего или части имущества.',
                    rating: 66,
                    contact: Object.assign(state.contact, {
                        mail: 'test@mail.ru'
                    })
                }
            );
        default:
            return state;
    }
}
//export {posts};
export {userData};