/**
 * Created by Artsiom_Rakitski on 3/1/2016.
 */
const defaultState = {
    user: {
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
            position: null,
            marker: null
        }
    }
};
export default function (state = {}, action) {
    switch (action.type) {
        case 'REGISTRATION_NEW_USER':
            return Object.assign({}, state, {
                login: action.impotantData.login,
                type: 'user',
                contacts: Object.assign(state.contacts, {
                    mail: action.impotantData.mail
                })
            }
         );
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, action.data);
        case 'SIGNOUT':
            return defaultState;
        case 'REGISTRATION':
            return Object.assign({}, state, {
                login: action.impotantData.login,
                type: 'user',
                contacts: Object.assign(state.contacts, {
                    mail: action.impotantData.mail
                })
            }
         );
        default:
            return state;
    }
}
