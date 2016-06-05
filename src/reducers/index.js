/**
 * Created by Artsiom_Rakitski on 2/26/2016.
 */
import user from './user';
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
    },
    location: {
        position: null,
        marker: [0, 0]
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
export function company(state = [], action) {
    switch (action.type) {
        case 'LOAD_TOP_SUCCESS':
            return action.data;
        default:
            return state;
    }
}
export function comments(state = [], action) {
    switch (action.type) {
        case 'LOAD_PROFILE_SUCCESS':
            return action.data.rate;
        default:
            return state;
    }
}
export function status(state = '', action) {
    switch (action.type) {
        case 'LOAD_POST_SUCCESS':
        case 'LOAD_PROFILE_SUCCESS':
        case 'SEND_DATA_SUCCESS':
            return {
                show: true,
                text: 'Успешно',
                type: 'checkmark'
            };
        case 'LOAD_POST_FAILURE':
        case 'LOAD_PROFILE_FAILURE':
            return {
                show: true,
                text: 'неудалось подключиться к серверу',
                type: 'warning sign'
            };
        case 'LOGIN_SUCCESS':
            return {
                show: true,
                text: 'Произведён вход',
                type: 'checkmark'
            };
        case 'LOGIN_FAILURE':
            if (action.error.message !== '403') {
                return {
                    show: true,
                    text: 'неудалось подключиться к серверу',
                    type: 'warning sign'
                };
            }
            return {
                show: true,
                text: 'Неравильный логин или пароль',
                type: 'warning sign'
            };
        case 'SEND_LOGIN_DATA_FAILURE':
            return action.error.message;
        case 'CLOSE_MESSAGE':
            return Object.assign({}, state, {show: false});
        default:
            return state;
    }
}
export function Profile(state = {}, action) {
    switch (action.type) {
        case 'LOAD_PROFILE_SUCCESS':
            return Object.assign({}, state, action.data.user);
        default:
            return state;
    }
}
//export {posts};
export {user};
