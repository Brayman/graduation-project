/**
 * Created by Artsiom_Rakitski on 3/1/2016.
 */
const defaultState= {
    userData:{
        id: null,
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
        case 'SEND_SUCCESS':
            return Object.assign({},state,{
                    username: action.data.username,
                    type: 'user',
                    contact: Object.assign(state.contact, {
                        mail: action.data.mail
                    })
                }
            );


        case 'REGISTRATION':
            return Object.assign({},state,{
                username: action.impotantData.username,
                type: 'user',
                contact: Object.assign(state.contact, {
                    mail: action.impotantData.mail
                })
            }
         );
        case 'NEW_PROFILE_DATA':
            return Object.assign({},state,{
                name: action.data.name||state.name,
                type: null,
                description: action.data.description||state.description,
                contact: Object.assign(state.contact, {
                    twitter: action.data.contact.twitter||state.contact.twitter,
                    mail: action.data.contact.mail||state.contact.mail,
                    phone: action.data.contact.phone||state.contact.phone
                })
            }
         );
        default:
            return state;
    }
}
