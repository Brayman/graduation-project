/**
 * Created by Artsiom_Rakitski on 3/1/2016.
 */
const defaultState = {
    userData: {
        _id: null,
        login: null,
        name: null,
        type: null,
        description: null,
        contacts: {
            twitter: null,
            mail: null,
            phone: null
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
            return action.data;
        case 'SIGNOUT':
            return defaultState.userData;
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
