const  getData = store => next => action =>{
    if (action.type !== 'REQUESTWR'){
        return next(action)
    }
    const [startAction, successAction, failAction]= action.actions;
    store.dispatch({
        type: startAction
    });
    action.promise.then(()=>store.dispatch({
        type: successAction,
        data
    }),(error)=> store.dispatch({
        type: failAction,
        error
    }))
};
export default getData;

/**
 * Created by Artsiom_Rakitski on 3/23/2016.
 */
