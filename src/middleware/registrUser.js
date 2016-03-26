const  registrUser = store => next => action =>{
    if (action.type !== 'REGISTRATION'){
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
export default registrUser;
/**
 * Created by Artsiom_Rakitski on 3/25/2016.
 */
