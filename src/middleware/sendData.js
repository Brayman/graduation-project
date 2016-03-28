const  sendData = store => next => action =>{
    if (action.type !== 'SEND'){
        return next(action)
    }
    const [startAction, successAction, failAction]= action.actions;
    store.dispatch({
        type: startAction
    });
    store.dispatch({
        type: successAction,
        data: action.data
    })
};
export default sendData;
/**
 * Created by Artsiom_Rakitski on 3/25/2016.
 */
