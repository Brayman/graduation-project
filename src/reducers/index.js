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
        case 'LOAD_USER_SUCCESS':
            console.log(action);
            return Object.assign({},state,{
                    username: action.data.username,
                    type: 'user',
                    description: action.data.description||'Тут пока что пусто',
                    contact: Object.assign(state.contact, {
                        mail: action.data.mail
                    })
                }
            );
        default:
            return state;
    }
}
//export {posts};
export {userData};