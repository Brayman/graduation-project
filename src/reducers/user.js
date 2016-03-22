/**
 * Created by Artsiom_Rakitski on 3/1/2016.
 */
const defaultState= {
    userData:{
        username: null,
        name: null,
        type: null,
        contact: {
            twitter: null,
            mail: null,
            phone: null
        }
    }
};
export default function (state=defaultState,action){
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
        default:
            return state;
    }
}
