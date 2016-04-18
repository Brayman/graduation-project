/**
 * Created by Artsiom_Rakitski on 2/26/2016.
 */
//import posts from './posts'
import userData from './user';
const defaultState= {
        login: null,
        name: null,
        description: null,
        rating: null,
        contacts: {
            twitter: null,
            mail: null,
            phone: null
        }
};
export function posts(state = [], action) {
    switch (action.type) {
        case 'LOAD_POST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}
export function status(state = '', action) {
    switch (action.type) {
        case 'LOAD_POST_SUCCESS':
            return 'всё хорошо';
        case 'LOAD_POST_FAILURE':
            return action.error.message;
        case 'SEND_LOGIN_DATA_FAILURE':
            return action.error.message;
        default:
            return state;
    }
}
export function Profile(state = defaultState, action) {
    switch (action.type) {
        case 'LOAD_USER_SUCCESS':
            return Object.assign({}, state, {
                login: action.data.login,
                name: action.data.name,
                description: action.data.description || 'Тут пока что пусто',
                contacts: action.data.contacts,
                picture: action.data.picture
            });
        default:
            return state;
    }
}
//export {posts};
export {userData};
