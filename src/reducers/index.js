/**
 * Created by Artsiom_Rakitski on 2/26/2016.
 */
//import posts from './posts'
import {browserHistory} from 'react-router';
import userData from './user';
const defaultState = {
    login: null,
    name: null,
    description: null,
    rating: null,
    contacts: {
        facebook: null,
        twitter: null,
        mail: null,
        phone: null
    }
};
export function tags(state = [], action) {
    switch (action.type) {
        case 'SET_TAG':
            return state.map(tag => {
                if (action.tag.id === tag.id) {
                    return Object.assign({}, action.tag, {select: true});
                }
                return tag;
            });
        case 'CANCEL_TAG':
            return state.map(tag => {
                if (action.tag.id === tag.id) {
                    return Object.assign({}, action.tag, {select: false});
                }
                return tag;
            });
        default:
            return state;
    }
}
export function posts(state = [], action) {
    switch (action.type) {
        case 'LOAD_POST_SUCCESS':
            return action.data;
        default:
            return state;
    }
}
export function companys(state = [], action) {
    switch (action.type) {
        case 'LOAD_COMP_SUCCESS':
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
        case 'LOAD_PROFILE_SUCCESS':
            return action.data;
        default:
            return state;
    }
}
//export {posts};
export {userData};
