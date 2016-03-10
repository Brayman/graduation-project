/**
 * Created by Artsiom_Rakitski on 3/1/2016.
 */
export default function (state='',action){
    switch (action.type){
        case 'LOG_IN':
            return action.name;
        case 'LOG_OUT':
            return null;
        default:
            return state;
    }
}
