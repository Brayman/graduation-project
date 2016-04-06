/**
 * Created by Artsiom_Rakitski on 3/1/2016.
 */
const defaultState= {
    userData:{
        _id: null,
        username: null,
        name: null,
        type: null,
        description: null,
        contact: {
            twitter: null,
            mail: null,
            phone: null
        }
    }
};
export default function (state={},action){
    switch (action.type){
        case 'REGISTRATION_NEW_USER':
            return Object.assign({},state,{
                username: action.impotantData.username,
                type: 'user',
                contact: Object.assign(state.contact, {
                    mail: action.impotantData.mail
                })
            }
         );
        case 'SEND_LOGIN_DATA_SUCCESS':
            return Object.assign({},state,{
                    _id: action.data._id,
                    username: action.data.username,
                    name: action.data.name,
                    type: 'user',
                    contact: Object.assign(state.contact, {
                        mail: action.data.contact.mail
                    })
                }
            );
        case 'SIGNOUT':
            return defaultState.userData;
        case 'REGISTRATION':
            return Object.assign({},state,{
                username: action.impotantData.username,
                type: 'user',
                contact: Object.assign(state.contact, {
                    mail: action.impotantData.mail
                })
            }
         );
        default:
            return state;
    }
}
