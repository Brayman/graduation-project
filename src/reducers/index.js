/**
 * Created by Artsiom_Rakitski on 2/26/2016.
 */
//import posts from './posts'
import userData from './user';
export function posts(state=[],action){
    switch (action.type){
        case 'LOG_IN':
            return action.name;
        case 'LOG_OUT':
            return null;
        default:
            return state;
    }
}
export function newCompany (state=[],action){
    switch (action.type){
        default:
            return state;
    }
}
//export {posts};
export {userData};