export default function messages(state='',action){
    switch (action.type){
        case 'NEW_MESSAGE':
            return state+action.count;
        case 'READ_MESSAGE':
            return state-action.count;
        default:
            return state;
    }
}
/**
 * Created by Artsiom_Rakitski on 3/11/2016.
 */
